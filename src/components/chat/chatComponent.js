import React, { useState,useEffect } from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseURL } from "../../shared/beasURL";
import { Loading } from "../loadingComponent";
import "./chat.css";
import Conversation from "./conversationComponent";
import 'core-js/features/promise/finally';


function ChatBox(props) {
  const [currentChat, setCurrentChat] = useState("");
  

   
        return(
            <div className="Chat">
        {/* Left Side */}
        <div className="Left-side-chat">
            <div className="Chat-container">
            <h2>Chats</h2>
            <div className="Chat-list">
               
               {props.allChats.allChats.length > 0 && props.allChats.allChats.map((chat) => (
              <div
                onClick={() => {
                  setCurrentChat(chat);
                }}
              >
                <Conversation
                  data={chat}
                  currentUser={props.user.user._id}
//                  online={checkOnlineStatus(chat)}
                />
              </div>
            ))}
            </div>
            </div>
        </div>

        {/* Right Side */}

        <div className="Right-side-chat">
            Right side 
            <div style={{ width: "20rem", alignSelf: "flex-end" }}>
            </div>
            
        </div>
        </div>
    );
}

export default ChatBox;    
