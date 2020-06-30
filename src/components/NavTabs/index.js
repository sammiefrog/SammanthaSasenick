import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withRouter } from "react-router";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginBottom: "20px",
    background: "#33c9dc",
    fontColor: "black",
  },
  tabs: {
    backgroundColor: "#33c9dc",
    fontColor: "black",
  },
});

function NavTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="black"
        centered
      >
        <Tab label="Home" href="/" />
        <Tab label="Portfolio" href="/portfolio" />
        <Tab label="About / Contact" href="/about" />
      </Tabs>
    </Paper>
  );
}

export default withRouter(NavTabs);