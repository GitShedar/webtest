import "./App.css";
import React from "react";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import "fontsource-roboto";
import MenuIcon from "@material-ui/icons/Menu";

const Btn = makeStyles({
  root: {
    borderRadius: "50px",
    color: "#C0C0C9",
    padding: "20px 60px",
    fontSize: "0.8rem",
    letterSpacing: "3px",
    marginLeft: "15px",
    background: "linear-gradient( 45deg, #000, #D7D7D7)",
    "&:hover": {
      background: "linear-gradient( 45deg, #D7D7D7, #000)",
    },
  },
});

function ButtonStyled() {
  const classes = Btn();
  return <Button className={classes.root}>Apply</Button>;
}

const Icon = makeStyles({
  root: {
    position: "absolute",
    backgroundColor: "#000",
    color: "#fff",
    fontSize: "40px",
    right: "15px",
    top: "15px",
    padding: "20px",
    borderRadius: "50%",
  },
});

function IconStyled() {
  const classes = Icon();
  return <MenuIcon className={classes.root}></MenuIcon>;
}

const App = () => {
  return (
    <Box className="main-box">
      <Box style={{ paddingLeft: "30px" }}>

          <h1 className="title"> Find Your Dream Job with Us</h1>
          <Typography>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed diam
              nonummy nibh euismod tinccidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat.
            </p>
          </Typography>
          <ButtonStyled />

      </Box>
      <Box>
        <Box style={{ padding: "20px" }}>
          <IconStyled />
        </Box>
      </Box>
    </Box>
  );
};

export default App;
