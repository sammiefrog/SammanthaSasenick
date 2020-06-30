import React from "react";
// import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
// import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
// import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
    // flexGrow: 1,
    background: "#33c9dc",
    color: "#000000",
    height: "50px",
    width: "100%",
    padding: "5px",
    marginTop: "35px",
    fontSize: "10px",
    position: "fixed",
    bottom: "0",
        textAlign: "center",
    alignContent: "flex-start",
  },
  icons: {
    color: "#000000",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.root}>
        <Typography variant="subtitle1" >
          Sammantha Sasenick
          <IconButton
            className={classes.icon}
            aria-label="email"
            href="mailto:ssasenick412@gmail.com"
            target="_blank"
          >
            <MailOutlineIcon />
          </IconButton>
          <IconButton
            className={classes.icon}
            aria-label="github"
            href="https://github.com/sammiefrog"
            target="_blank"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            className={classes.icon}
            aria-label="linkedin"
            href="https://www.linkedin.com/in/sammantha-sasenick412/"
            target="_blank"
          >
            <LinkedInIcon />
          </IconButton>
        </Typography>
      </Box>
    </div>
  );
}


// export default function Footer() {
//   const classes = useStyles();

//   return (
//     <div>
//       <Container className={classes.root}>
//         Sammantha Sasenick
//         {/* <CardActions disableSpacing> */}
//         <IconButton
//           className={classes.icon}
//           aria-label="email"
//           href="mailto:ssasenick412@gmail.com"
//           target="_blank"
//         >
//           <MailOutlineIcon />
//         </IconButton>
//         <IconButton
//           className={classes.icon}
//           aria-label="github"
//           href="https://github.com/sammiefrog"
//           target="_blank"
//         >
//           <GitHubIcon />
//         </IconButton>
//         <IconButton
//           className={classes.icon}
//           aria-label="linkedin"
//           href="https://www.linkedin.com/in/sammantha-sasenick412/"
//           target="_blank"
//         >
//           <LinkedInIcon />
//         </IconButton>
//       </Container>
//     </div>
//   );
// }
