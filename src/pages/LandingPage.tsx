import { Card, Text, Center } from "@mantine/core";
import "../styles/LandingPage.css";
import "@mantine/core/styles.css";
import { FeaturesCards } from "../components/FeaturesCards";
import { EmailBanner } from "../components/EmailBanner";
import { Faq } from "../components/faq";
import { CarouselComponent } from "../components/Carousel";

const LandingPage = () => {
  return (
    <div className={"landing-page-background"}>
      <div className="card-background">
        <Center>
          <Card w="80%" h="15rem" shadow="lg" className="logo-card">
            <Text ta="center" className="logo-text">
              Scripted Reality
            </Text>
          </Card>
        </Center>
      </div>
      <div className="body">
        <Center>
          <FeaturesCards />
        </Center>
        <CarouselComponent />
        <Center>
          <Faq />
        </Center>

        <Center>
          <EmailBanner />
        </Center>
      </div>
    </div>
  );
};

export default LandingPage;
