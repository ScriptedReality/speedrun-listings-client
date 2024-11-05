import { Card, Text, Center } from "@mantine/core";
import "../styles/LandingPage.css";
import "@mantine/core/styles.css";
import { FeaturesCards } from "../components/FeaturesCards";
import { EmailBanner } from "../components/EmailBanner";
import { Faq } from "../components/faq";
import { CarouselComponent } from "../components/Carousel";
import { ScrollAnimation } from "../components/ScrollAnimation";

const LandingPage = () => {
  return (
    <div className={"landing-page-background"}>
      <div className="card-background">
        <ScrollAnimation direction="up">
          <Center>
            <Card w="80%" h="15rem" shadow="lg" className="logo-card">
              <Text ta="center" className="logo-text">
                Scripted Reality
              </Text>
            </Card>
          </Center>
        </ScrollAnimation>
      </div>
      <div className="body">
        <Center>
          <ScrollAnimation direction="up" delay={.75}>
            <FeaturesCards />
          </ScrollAnimation>
        </Center>

        <ScrollAnimation direction="up" delay={0.3}>
          <CarouselComponent />
        </ScrollAnimation>

        <Center>
          <ScrollAnimation direction="right" delay={0.4}>
            <Faq />
          </ScrollAnimation>
        </Center>
        <ScrollAnimation direction="left" delay={0.5}>
          <Center>
            <EmailBanner />
          </Center>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default LandingPage;
