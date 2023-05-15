import React, { useRef, useState } from "react";
import ChatBox from "../ChatBox/ChatBox";
import Conversation from "../Coversation/Conversation";
import "./Chat.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { io } from "socket.io-client";
import axios from 'axios'
import { baseUrl } from "../../shared/beasURL";
import {  fetchuser,refreshState, fetchOneChat ,fechOtherPersoneInfo,userChats} from '../../redux/ActionCreaters';


const Chat = (props) => {
  const dispatch = useDispatch();
  const socket = useRef();
  const  user  =  props.user?.user;

  const [chats, setChats] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [sendMessage, setSendMessage] = useState(null);
  const [receivedMessage, setReceivedMessage] = useState(null);
  console.log('Rendering component from chat component...');
  // Get the chat in chat section
  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await userChats(user._id);
        console.log(data)
        setChats(data);
      } catch (error) {
        console.log(error);
      }
    };
    getChats();
  }, [user._id]);

   // Connect to Socket.io
  useEffect(() => {
    socket.current = io("ws://localhost:8800");
    socket.current.emit("new-user-add", user._id);
    socket.current.on("get-users", (users) => {
      setOnlineUsers(users);
    });
  }, [user]);

  // Send Message to socket server
  useEffect(() => {
    if (sendMessage!==null) {
      socket.current.emit("send-message", sendMessage);}
  }, [sendMessage]);


  // Get the message from socket server
  useEffect(() => {
    socket.current.on("recieve-message", (data) => {
      console.log(data)
      setReceivedMessage(data);
    }

    );
  }, []);


  const checkOnlineStatus = (chat) => {
    const chatMember = chat.members.find((member) => member !== user._id);
    const online = onlineUsers.find((user) => user.userId === chatMember);
    return online ? true : false;
  };
 
  return (
    <div className="Chat">
      {/* Left Side */}
      <div className="Left-side-chat">
        <div className="Chat-container">
          <h2>Chats</h2>
          <div className="Chat-list">
            {chats.map((chat) => (
              <div
                onClick={() => {
                  setCurrentChat(chat);
                }}
              >
                <Conversation
                  user={props.user}
                  data={chat}
                  currentUser={user._id}
                  online={checkOnlineStatus(chat)}
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
          currentUser={user._id}
          setSendMessage={setSendMessage}
          receivedMessage={receivedMessage}
        />

      </div>
    </div>
  );
};

export default Chat;
