import React from "react";
import Header from "../components/Header";
import Typewriter from "typewriter-effect";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    typography: {
    color:"black",
    padding: "10px",
    margin: "20px",
    fontSize: "50px",
    justifyContent: "center",
  },
});


function Home() {
    const classes = useStyles();

    return (
      <div>
        <Header />
        <Typewriter className={classes.typography}
          options={{
            strings: ["Hello, my name is Sammantha!", "I am from Chicago, IL", "I am a Full Stack Web Developer", "I enjoy Javascript and Node.js"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    );
}

export default Home;