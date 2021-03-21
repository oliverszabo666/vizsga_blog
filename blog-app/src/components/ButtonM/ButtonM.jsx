import React from "react";
import Button from "@material-ui/core/Button";

const ButtonM = (props) => {
  return (
    <div>
      <Button onClick={props.click} variant="contained" color="primary">
        Több
      </Button>
    </div>
  );
};

export default ButtonM;
