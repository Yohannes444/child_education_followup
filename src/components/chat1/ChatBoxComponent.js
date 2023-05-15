import React, { useEffect, useState } from "react";
import { useRef } from "react";
import "./ChatBox.css";

const ChatBox = (props) => {
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [ispersonInfoLoaded,setIspersonInfoLoaded]= useState(false)


  /* if (props?.chat && props.isChatSelected == true && ispersonInfoLoaded === false) {
    props.setIsChatSelected(false)
    const userId = props.chat.members.find((id) => id !== props.currentUser)
    props.fetchOtherPersonInfo(userId);
    setIspersonInfoLoaded(true)
    
  }else{
    console.log("user info is not fetched")
  } */

  return (
    <>
      <div className="ChatBox-container">
        this is from the rign side
       <p>{props?.chat._id}</p>
        
      </div>
    </>
  );
};

export default ChatBox;