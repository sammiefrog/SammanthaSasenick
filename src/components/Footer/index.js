import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  myButton: {
    background: "#33c9dc",
    border: 0,
    borderRadius: 3,
    color: "black",
    height: 50,
    width: "100%",
    padding: "5px",
    marginTop: "20px",
    fontSize: "10px",
    position: "fixed",
    bottom: "0"
  },
});

export default function Footer() {
  const classes = useStyles();

  return (
    <div>
      <Button className={classes.myButton} fullWidth="true">
        <h5>Sammantha Sasenick</h5>
      </Button>
    </div>
  );
}
