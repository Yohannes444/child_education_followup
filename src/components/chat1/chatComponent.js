import React, { useState,useEffect } from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseURL } from "../../shared/beasURL";
import { Loading } from "../loadingComponent";
import "./chat.css";
import Conversation from "./conversationComponent";
import 'core-js/features/promise/finally';
import ChatBox from './ChatBoxComponent'

function ChatComponent(props) {
  const [currentChat, setCurrentChat] = useState("");
  const [sendMessage, setSendMessage] = useState(null);
  const [receivedMessage, setReceivedMessage] = useState(null);
  const [isChatSelected,setIsChatSelected] = useState(false)

   
        return(
            <div className="Chat">
        {/* Left Side */}
        <div className="Left-side-chat">
            <div className="Chat-container">
            <h2>Chats</h2>
            <div className="Chat-list">
               
               {props.allChats.allChats.length > 0 && props.allChats.allChats.map((chat) => (
              <div onClick={() => {
                  setCurrentChat(chat);
				          setIsChatSelected(true)
                }}>
                <Conversation
                  data={chat}
                  userInfo={props.userInfo}
                  currentUser={props.user.user._id}
                  fetchOtherPersonInfo={props.fetchOtherPersonInfo}
//                  online={checkOnlineStatus(chat)}
                />
              </div>
            ))}
            </div>
            </div>
        </div>

        {/* Right Side */}

        <div className="Right-side-chat">
			<div style={{ width: "20rem", alignSelf: "flex-end" }}>
			</div>
			<ChatBox
			chat={currentChat}
			currentUser={props.user.user._id}
			userInfo={props.userInfo}
			isChatSelected={isChatSelected}
			setIsChatSelected={setIsChatSelected}
			///setSendMessage={setSendMessage}
			//receivedMessage={receivedMessage}
			fetchOtherPersonInfo={props.fetchOtherPersonInfo}
			/>
      </div>
        </div>
    );
}

export default ChatComponent;    
