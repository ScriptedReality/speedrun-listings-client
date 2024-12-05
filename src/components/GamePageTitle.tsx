import { Title, Text, Button, Container } from "@mantine/core";
import classes from "../styles/GamePage.module.css";

export function GamePageTitle(){
    return(
    <Container className={classes.wrapper} size={1400}>
      <div className={classes.inner}>
        <div className={classes.gameImagePlaceholder}></div>
          <div className={classes.textContainer}>
             <h1 className={classes.gameTitle}>
             Super Mario 64 <span className={classes.highlight}>(1996)</span>
                </h1>
              <div className={classes.ovalContainer}>
                <span className={classes.oval}>Wii</span>
                <span className={classes.oval}>N64</span>
                <span className={classes.oval}>PS2</span>
            </div>
          </div>
        </div>
    
    </Container>
    );
}
export default GamePageTitle;