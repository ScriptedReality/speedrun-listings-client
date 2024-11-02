import { Carousel } from "@mantine/carousel";
import { Center } from "@mantine/core";
import "@mantine/carousel/styles.css";

export function CarouselComponent() {
  return (
    <Center>
      <Carousel
        orientation="vertical"
        height={"30rem"}
        w={"66%"}
        withIndicators
        draggable={false}
        style={{ boxShadow: "0 30px 30px rgba(0, 0, 0, .2)" }}
      >
        <Carousel.Slide>
          <Center mt={"5rem"}>Gameplay/Workflow Image 1</Center>
        </Carousel.Slide>
        <Carousel.Slide>
          <Center mt={"5rem"}>Gameplay/Workflow Image 2</Center>
        </Carousel.Slide>
        <Carousel.Slide>
          <Center mt={"5rem"}>Gameplay/Workflow Image 3</Center>
        </Carousel.Slide>
        {/* ...other slides */}
      </Carousel>
    </Center>
  );
}

export default CarouselComponent;
