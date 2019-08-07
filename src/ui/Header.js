import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import blue from "@material-ui/core/colors/blue";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Dropdown from "./Dropdown";

const useStyles = makeStyles({
  root: {
    backgroundColor: blue[500]
  },
  headerText: {
    marginLeft: "10px"
  }
});

const Header = ({ title, menuItems }) => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Dropdown menuItems={menuItems} />
        <Typography variant="h6" className={classes.headerText}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
