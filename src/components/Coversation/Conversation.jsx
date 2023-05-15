import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from 'axios'
import { baseUrl } from "../../shared/beasURL";
import {  fetchuser,refreshState,  fetchOneChat ,fechOtherPersoneInfo,getUser} from '../../redux/ActionCreaters';

const Conversation = ({ data, currentUser, online }) => {
  console.log('Rendering form conversetion component...');
  const [userData, setUserData] = useState(null)
  const dispatch = useDispatch()

/*   useEffect(()=> {

    const userId = data.members.find((id)=>id!==currentUser)
    const getUserData = async ()=> {
      try
      {
          const {data} =await getUser(userId)
         setUserData(data)
         dispatch({type:"FETCH_USER_INFO_SUCCESS", data:data})
      }
      catch(error)
      {
        console.log(error)
      }
    }

    getUserData();
  }, []) */
  return (
    <>
      <div className="follower conversation">
        <div>
          {online && <div className="online-dot"></div>}
          <img
            src={`${baseUrl}profile-picture-default-png.png`}
            alt="Profile"
            className="followerImage"
            style={{ width: "50px", height: "50px" }}
          />
          <div className="name" style={{fontSize: '0.8rem'}}>
            <span>{userData?.firstName} {userData?.lastName}</span>
            <span style={{color: online?"#51e200":""}}>{online? "Online" : "Offline"}</span>
          </div>
        </div>
      </div>
      <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
    </>
  );
};

export default Conversation;
