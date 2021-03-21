import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import { v4 as uuidv4 } from "uuid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  iconB: {
    color: "white",
    backgroundColor: "black",
    position: "fixed",
    right: "30px",
    top: "30px",
    width: "100px",
    height: "100px",
    "&hover": {
      color: "black",
      backgroundColor: "yellow",
    },
  },
  rect: {
    fontSize: "60px",
    stroke: "white",
  },
});

const options = ["Home", "Contact", "About"];
const ITEM_HEIGHT = 48;

const LongMenu = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        className={classes.iconB}
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon className={classes.rect} />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={uuidv4()}
            selected={option === "Pyxis"}
            onClick={handleClose}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default LongMenu;
