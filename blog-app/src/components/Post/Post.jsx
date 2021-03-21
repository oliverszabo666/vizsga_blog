import React, { useState } from "react";
import ButtonM from "../ButtonM/ButtonM";

const Post = (props) => {
  const [show, setShow] = useState(false);
  return (
    <div className="post">
      <div>
        <h2>{props.d.title}</h2>
        <p>{props.d.author}</p>
      </div>
      {show ? (
        <p>{props.d.description} </p>
      ) : (
        <ButtonM
          click={() => {
            setShow(true);
          }}
        />
      )}
    </div>
  );
};
export default Post;
