import { Image, Accordion, Grid, Title, rem } from "@mantine/core";
import { IconLetterA, IconLetterF, IconLetterQ, IconExclamationMark} from '@tabler/icons-react';
import image from "../assets/faqimage.svg";

export function Faq() {
  return (
    <Grid grow className="gap-4 mt-10">
      <Grid.Col span={3} className="flex justify-center items-center">
        <Image
          src={image}
          alt="Frequently Asked Questions"
          fit="contain"
          style={{ width: '100%', height: 'auto', maxHeight: '400px' }}
        />
      
        
      </Grid.Col>
      <Grid.Col span={5}>
      <Title order={2} size="40" className="text-2x1 font-bold">
          Frequently Asked Questions
        </Title>
      <Accordion variant="contained">
      <Accordion.Item value="account">
        <Accordion.Control
          icon={
            <IconLetterF
              style={{ color: 'var(--mantine-color-red-6', width: rem(20), height: rem(20) }}
            />
          }
        >
          How do I make an account?
        </Accordion.Control>
        <Accordion.Panel>Click the profile icon on the header near the top of the screen, click login and then create an account from there!</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="source">
        <Accordion.Control
          icon={
            <IconLetterA
              style={{ color: 'var(--mantine-color-blue-6', width: rem(20), height: rem(20) }}
            />
          }
        >
          Can I see the Source Code?
        </Accordion.Control>
        <Accordion.Panel>Nuh uh uh!</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="payment">
        <Accordion.Control
          icon={
            <IconLetterQ
              style={{ color: 'var(--mantine-color-teal-6)', width: rem(20), height: rem(20) }}
            />
          }
        >
          Do you store payment information?
        </Accordion.Control>
        <Accordion.Panel>We use plaid as a middle man and recieve none of your payment information.</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="sogood">
        <Accordion.Control
          icon={
            <IconExclamationMark
              style={{ color: 'var(--mantine-color-black)', width: rem(20), height: rem(20) }}
            />
          }
        >
          How does your website look so good?
        </Accordion.Control>
        <Accordion.Panel>We have the best front end developer in the western hemisphere, Aiden Jastrzembski (assisted greatly by Michael Strange).</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Grid.Col>
    </Grid>
  );
}

export default Faq;
