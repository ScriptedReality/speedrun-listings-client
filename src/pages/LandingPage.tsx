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

        
        <div>
          <ScrollAnimation direction="up" delay={0.3}>
            <CarouselComponent />
          </ScrollAnimation>
        </div>
        

        <Center style={{ marginTop: "100px" }}>
          <div style={{ width: "70%", wordWrap: "break-word", overflow: "hidden" }}>
            <ScrollAnimation direction="right" delay={0.4}>
              <Faq />
            </ScrollAnimation>
          </div>
          
        </Center>

        
        
        <ScrollAnimation direction="left" delay={0.5}>
          <Center style={{ marginTop: "100px", marginBottom: "100px" }}>
            <div style={{ width: "70%" }}>
              <EmailBanner />
            </div>
          </Center>
        </ScrollAnimation>
        
        
        
      </div>
    </div>
  );
};

export default LandingPage;
