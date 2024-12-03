import { Text, Title, TextInput, Button, Image, Grid } from "@mantine/core";
import image from "../assets/image.svg";
import classes from "../styles/EmailBanner.module.css";

export function EmailBanner() {
  return (
    <Grid grow p={5}>
      <Grid.Col span={7}>
        <Title className={classes.title}>Wait a minute...</Title>
        <Text p={5} fw={500} fz="lg" mb={5}>
          Subscribe to our newsletter!
        </Text>
        <Text p={5} fz="sm" c="dimmed">
          You will never miss important product updates, latest news and
          community QA sessions. Our newsletter is once a week, every Sunday.
        </Text>

        <div style={{ padding: "5px" }}>
          <TextInput 
            size="md"
            placeholder="Your email"
            style={{ marginBottom: "10px", width: "100%", maxWidth: "400px" }}
          />
          <Button>Subscribe</Button>
        </div>
      </Grid.Col>
      
      <Grid.Col span={5}>
        <Image 
          p={5}
          src={image}
          alt="Newsletter"
          fit="contain"
          style={{ width: '100%', height: 'auto', maxHeight: '400px' }}
        />
      </Grid.Col>
    </Grid>
  );
}

export default EmailBanner;
