import React, {useEffect, useState} from "react";
import MediaCard from "../components/Card"
import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Projects from "../projects.json";
import GridList from "@material-ui/core/GridList";
// import GridListTile from "@material-ui/core/GridListTile";
// import tileData from "./tileData";


// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//     justifyContent: "center"
//   },
// }));
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    height: 800,
    justifyContent: "center"
  },
}));


function Portfolio() {
    const classes = useStyles();
    const [project, setProject] = useState({});

    useEffect(() => {
        getProjects();
    }, []);
    
    function getProjects(){
        setProject(Projects);
    }
    

    return (
      <div>
        <h1 className="text-center">Projects</h1>
        <Container>
          {/* {Projects.map((project) => (
          <Grid item xs={6} sm={4}>
            <Paper className={classes.paper}>
              <MediaCard
                image={project.image}
                title={project.title}
                description={project.description}
                repository={project.repository}
                liveLink={project.liveLink}
              />
            </Paper>
          </Grid>
        ))} */}
          <div className={classes.root}>
            <GridList className={classes.gridList} cols={3}>
              {Projects.map((project) => (
                <MediaCard
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  repository={project.repository}
                  liveLink={project.liveLink}
                />
                //   <GridListTile key={tile.img} cols={tile.cols || 1}>
                //     <img src={tile.img} alt={tile.title} />
                //   </GridListTile>
              ))}
            </GridList>
          </div>
        </Container>
      </div>
    );
}

export default Portfolio;
