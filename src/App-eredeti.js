import './App.css';
import React from "react";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import "fontsource-roboto";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

const Btn = makeStyles({
  root: {
    borderRadius: "50px",
    color: "#C0C0C9",
    padding: "25px 90px",
    fontSize: "1rem",
    letterSpacing: "3px",
    marginLeft: "15px",
    marginTop: "35px",
    background: "linear-gradient( 45deg, #000, #D7D7D7)",
    '&:hover': {
    background: "linear-gradient( 45deg, #D7D7D7, #000)",
  },
    },
});

function ButtonStyled() {
  const classes = Btn();
  return <Button className={classes.root}>Apply</Button>;
}

const App = () => {
  return (
    <Box className="main-box"
      display="flex"
      justifyContent="flex-start"
      height="100vh"
      bgcolor="#0a33fb"
    >
      <Box style={{ padding: "50px" }}>
        <div>
          <Typography className="title"
           
            fontWeight={700}
            variant="h1"
          >
            Find Your
            Dream Job 
            with Us 
          </Typography>
          <Typography>
            <p
              style={{
                width: "65%",
                color: "#C0C0C9",
                fontSize: "1rem",
                fontWeight: "200",
                lineHeight: "2.7",
                letterSpacing: "1.1",
                margin: "20px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed diam
              nonummy nibh euismod tinccidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat.
            </p>
          </Typography>
          <ButtonStyled />
        </div>
      </Box>
      <Box
        display="flex"
        justifyContent="flex-end"
        
        width="70%"
        height="100%"
        bgcolor="#0a33fb"
      >
        <Box style={{ padding: "50px" }}>
          {" "}
          <MenuRoundedIcon className="hambicon"
            style={{
              fontSize: "100px",
            }}
          ></MenuRoundedIcon>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
