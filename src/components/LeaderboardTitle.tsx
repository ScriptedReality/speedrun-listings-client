import { useState } from "react";
import { Title, Text, Button, Modal, Container, TextInput, Group, Center } from "@mantine/core";
import { Dots } from "./Dots";
import classes from "../styles/LeaderboardTitle.module.css";
import "../styles/LeaderboardPage.css";
import axios from 'axios';
import { notifications } from '@mantine/notifications';
import { AxiosError } from 'axios';

export function LeaderboardTitle() {
  const [modalOpened, setModalOpened] = useState(false);
  const [url, setUrl] = useState("");
  const [time, setTime] = useState("");

  const clearInputs = () => {
    setUrl("");
    setTime("");
  };

  const submitRun = async () => {
    try {
      console.log(JSON.stringify({ url, time }))
      await axios.post('http://localhost:3001/runs/674f8b41ee5c45da70ae668f/', { time, url });
      
      clearInputs();
      setModalOpened(false);

      notifications.show({
        title: 'Success',
        message: 'Run submitted successfully!',
        color: 'purple',
        position: 'top-center',
        
      });
    } catch (error) {
      console.error('Error submitting run:', error);
      const axiosError = error as AxiosError;
      /*@ts-ignore This could be a problem in the future - the .message isn't happy*/
      const errorMessage = axiosError.response?.data?.message || 'There was an error submitting your run.';
      notifications.show({
        title: 'Success',
        message: errorMessage.toString(),
        color: 'red',
        position: 'top-center',
        
      });
    }
  };

  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Scripted Reality{" "}
          <Text component="span" className={classes.highlight} inherit>
            Leaderboard
          </Text>{" "}
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
            See the top scores by time or region. Do you have what it takes to
            see yourself on the leaderboard?
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} size="lg" onClick={() => setModalOpened(true)}>
            Submit Run
          </Button>
        </div>
      </div>

      <Modal centered
        opened={modalOpened}
        onClose={() => {
          clearInputs();
          setModalOpened(false);
        }}
        title="Submit Your Run"
      >
        <TextInput
          label="URL"
          placeholder="Enter the URL"
          value={url}
          onChange={(event) => setUrl(event.currentTarget.value)}
        />
        <TextInput
          label="Time"
          placeholder="Enter the time"
          value={time}
          onChange={(event) => setTime(event.currentTarget.value)}
        />
        <Group style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
          <Button onClick={() => {
            clearInputs();
            setModalOpened(false);
          }}>Cancel</Button>
          <Button onClick={submitRun}>Submit</Button>
        </Group>
      </Modal>
    </Container>
  );
}

export default LeaderboardTitle;
