import React, { useState, useEffect } from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from "../../shared/beasURL";
import { Loading } from "../loadingComponent"
import "./chat.css"

//import RenderLeader from './RenderLeader'

function Conversation(props) {

  const [userData, setUserData] = useState(null)
  const [ispersonInfoLoaded,setIspersonInfoLoaded]= useState(false)
   if(props.userInfo.userInfo ==null && ispersonInfoLoaded === false){
        const userId = props.data.members.find((id) => id !== props.currentUser)
        props.fetchOtherPersonInfo(userId);
        setIspersonInfoLoaded(true)

  } 
/*   useEffect(() => {
    const userId = props.data.members.find((id) => id !== props.currentUser);
  
    const getUserData = async () => {
      await props.fetchOtherPersonInfo(userId);
    };
  
    getUserData();
  }, []); */

        return(
                <>
                <div className="follower conversation">
                  <div>
                    {/* {online && <div className="online-dot"></div>} */}
                    <img
                      src={`${baseUrl}profile-picture-default-png.png`}
                      alt="Profile"
                      className="followerImage"
                      style={{ width: "50px", height: "50px" }}
                    />
                    <div className="name" style={{fontSize: '0.8rem'}}>
                      <span>{props.userInfo.userInfo?.firstName} {props.userInfo.userInfo?.lastName}</span>
                      <span style={{color:"#51e200"}}>oneline</span>
                    </div>
                  </div>
                </div>
                <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
              </>
    );
}

export default Conversation;    
