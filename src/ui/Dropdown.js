import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const anchorProps = {
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "center"
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "center"
  }
};

const Dropdown = ({ menuItems }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  return (
    <React.Fragment>
      <IconButton
        color="inherit"
        onClick={event => setAnchorEl(event.currentTarget)}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        {...anchorProps}
        elevation={0}
        getContentAnchorEl={null}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        {menuItems.map(menuItem => (
          <MenuItem key={menuItem.key}>{menuItem.label}</MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
};

export default Dropdown;
