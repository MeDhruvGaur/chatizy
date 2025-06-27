import React from "react";

const ConversationItem = ({ props }) => {
  return (
    <div className="conversation-container">
      <p className="con-icon">
        {props.name[0]}
      </p>
      <p className="con-title">{props.name}</p>
      <p className="col-lastMessage">{props.lastMessage}</p>
      <p className="col-timeStamp">{props.timeStamp}</p>
    </div>
  );
};

export default ConversationItem;