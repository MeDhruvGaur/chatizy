import React from "react";

function MessageSelf() {
  var props2 = { name: "You", message: "This is a Sample Message"};
  // console.log("Message self Prop : ", props);
  return (
    <div className="self-message-container">
      <div className="messageBox">
        <p>{props2.message}</p>
        <p className="self-timeStamp" style={{ color: "black" }} >
          11:00am
        </p>
      </div>
    </div>
  );
}

export default MessageSelf;