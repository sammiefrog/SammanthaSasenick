import React from "react";
import Typewriter from "typewriter-effect";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
    root: {
    color:"black",
    padding: "10px",
    fontSize: "50px",
    textAlign: "center",
    },
    img: {
      height: "30%",
      width: "30%",
      padding: "20px"
    }
});


function Home() {
    const classes = useStyles();

    return (
      <div>
        <Container className={classes.root}>
          <img className={classes.img}
            src={require("../assets/images/avatar.png")}
            // {process.env.PUBLIC_URL + "./assets/images/avatar.png"}
            alt="cartoon version of me"
          ></img>
          <Typewriter
            options={{
              strings: [
                "Hello, my name is Sammantha!",
                "I am from Chicago, IL",
                "I am a Full Stack Web Developer",
                "I enjoy Javascript and Node.js",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </Container>
      </div>
    );
}

export default Home;