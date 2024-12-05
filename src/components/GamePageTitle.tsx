import { Title, Text, Button, Container } from "@mantine/core";
import classes from "../styles/GamePage.module.css";
import Leaderboard from "../pages/Leaderboard";

export function GamePageTitle(){
    return(
      <>
    <Container className={classes.wrapper} size={1400}>
      <div style={{ height: "20px" }}></div>
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
            <Button className={classes.submitRunButton}>Submit Run</Button>
          </div>
        </div>
      <div className={classes.runnerInfo}>
                 <span className={classes.runnerText}>Active Runners: 12</span>
                 <span className={classes.runnerText}>Live Runners: 8</span>
      </div>
    <div className={classes.statsContainer}>
        <div className={classes.statItem}>Followers: 1500</div>
        <div className={classes.statItem}>Runs: 320</div>
        <div className={classes.statItem}>Players: 45</div>
    </div>
  </Container>
     <Container className={classes.navBarContainer} size={1520}>
     <nav className={classes.navBar}>
       <a href="#leaderboard" className={classes.navLink}>Leaderboard</a>
       <a href="#news" className={classes.navLink}>News</a>
       <a href="#levels" className={classes.navLink}>Levels</a>
     </nav>
   </Container>
   <Leaderboard/>
 </>
    );
}
export default GamePageTitle;