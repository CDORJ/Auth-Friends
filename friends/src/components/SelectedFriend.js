import React from "react";

const SelectedFriend = (props) => {
  console.log("Props from SelectedFriend comp", props);
  return (
    <div>
      <h2>{props.selected.name}</h2>
      <p>{props.selected.age}</p>
          <p>{props.selected.email}</p>
          <button>Update Friend</button> <button>Delete Friend</button> 
    </div>
  );
};

export default SelectedFriend;
