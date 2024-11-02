import { Image, Accordion, Grid, Container, Title } from "@mantine/core";
import image from "../assets/faqimage.svg";
import classes from "../styles/faq.module.css";

export function Faq() {
  return (
    <div className={classes.wrapper}>
      <Container size="lg">
        <Grid id="faq-grid" gutter={50}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image src={image} alt="Frequently Asked Questions" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Title order={2} ta="left" className={classes.title}>
              Frequently Asked Questions
            </Title>

            <Accordion chevronPosition="right" variant="separated">
              <Accordion.Item className={classes.item} value="reset-password">
                <Accordion.Control>
                  How Do I make an Account?
                </Accordion.Control>
                <Accordion.Panel>Click the profile icon on the header near the top of the screen, click login and then create an account from there!</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="another-account">
                <Accordion.Control>
                  Can I see the Source Code?
                </Accordion.Control>
                <Accordion.Panel>The entire game is open source and readily available! Check the github link on this website to check it out!</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="newsletter">
                <Accordion.Control>
                  Do you store payment information?
                </Accordion.Control>
                <Accordion.Panel>We use plaid as a middle man and recieve none of your payment information.</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="credit-card">
                <Accordion.Control>
                  How does your website look so good?
                </Accordion.Control>
                <Accordion.Panel>We have the best front end developer in the western hemisphere, Aiden Jastrzembski.</Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
export default Faq;
