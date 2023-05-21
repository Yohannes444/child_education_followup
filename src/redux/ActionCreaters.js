import * as ActionTypes from './ActionsType';
import { baseUrl } from '../shared/beasURL'
import { fetchCashier, fetchTeacher,fetchClassRoomList } from './actions/adminActions';
import { parentFetchClassRoom ,fetchChildrens} from './actions/parentActions';
import { fetchTeacherClassRoom } from './actions/teacherActions';
import {fetchWithList,fetchMonthlyFeeListes} from './actions/cashierAction'
import axios from 'axios';
import { toast } from "react-toastify";


export const requestLogin = (creds) => {
    return {
        type: ActionTypes.LOGIN_REQUEST,
        creds
    }
}
  
export const receiveLogin = (response) => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        token: response.token
    }
}
  
export const loginError = (message) => {
    return {
        type: ActionTypes.LOGIN_FAILURE,
        message
    }
}


export const loginUser = (creds) => (dispatch) => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds))

    return fetch(baseUrl + 'users/login', {
        method: 'POST',
        headers: { 
            'Content-Type':'application/json' 
        },
        body: JSON.stringify(creds)
    })
    .then(response => {
        console.log(response)
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
        },
        error => {
            throw error;
        })
    .then(response => response.json())
    .then(response => {
        if (response.success) {
            // If login was successful, set the token in local storage
            localStorage.setItem('token', response.token);
            localStorage.setItem('creds', JSON.stringify(creds));
            // Dispatch the success action
            
            dispatch(receiveLogin(response));
            dispatch(fetchuser())
            dispatch(fetchCashier())
            dispatch(fetchTeacher())
            dispatch(parentFetchClassRoom())
            dispatch(fetchTeacherClassRoom())
            dispatch(fetchWithList())
            dispatch(fetchChildrens())
            dispatch(fetchMonthlyFeeListes())
            dispatch(fetchClassRoomList())


        }
        else {
            var error = new Error('Error ' + response.status);
            error.response = response;
            throw error;
        }
    })
    .catch(error => dispatch(loginError(error.message)))
};

export const requestLogout = () => {
    return {
      type: ActionTypes.LOGOUT_REQUEST
    }
}
  
export const receiveLogout = () => {
    return {
      type: ActionTypes.LOGOUT_SUCCESS
    }
}

// Logs the user out
export const logoutUser = () => (dispatch) => {
    dispatch(requestLogout())
    localStorage.removeItem('token');
    localStorage.removeItem('creds');
    dispatch(fetchuser())
    dispatch(fetchCashier())
    dispatch(fetchTeacher())
    dispatch(parentFetchClassRoom())
    dispatch(fetchTeacherClassRoom())
    dispatch(fetchWithList())
    dispatch(fetchChildrens())
    dispatch(receiveLogout())
}
export const postFeedback = (feedback) => (dispatch) => {
        
  return fetch(baseUrl + 'feedback', {
      method: "POST",
      body: JSON.stringify(feedback),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
  })
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          throw error;
    })
  .then(response => response.json())
  .then(response => { console.log('Feedback', response); toast('Thank you for your feedback!\n'+JSON.stringify(response.feedBack)); })
  .catch(error =>  { console.log('Feedback', error.message); toast('Your feedback could not be posted\nError: '+error.message); });
};

export const parentSignup = (parent) => (dispatch) => {
console.log(parent)
    

    dispatch(requestparentSignup(true))
  return fetch(baseUrl + 'users/signup', {
      method: 'POST',
      body: JSON.stringify(parent),
      headers: { 
          'Content-Type':'application/json' 
      }
  })
  .then(response => {
      console.log(response)
      if (response.ok) {
          return response;
      } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
      }
      },
      error => {
          throw error;
      })
  .then(response => response.json())
  .then(response => {
      if (response.success) {
          
          dispatch(receiveparentSignup(response));
      }
      else {
          var error = new Error('Error ' + response.status);
          error.response = response;
          throw error;
      }
  })
  .catch(error => dispatch(parentSignupError(error.message)))
};

export const requestparentSignup= ()=>{
    return{
        type: ActionTypes.SIGNUP_REQUEST,
        
    }
}
export const receiveparentSignup =(user)=>{
    return{
        type:ActionTypes.SIGNUP_SUCCESS,
        user
    }
}
export const parentSignupError =(message)=>{
    return{
        type:ActionTypes.SIGNUP_FAILURE,
        message
    }
}

export const fetchuser = () => {
    return (dispatch) => {
      dispatch(userLoding());
      const bearer = 'Bearer ' + localStorage.getItem('token');
      fetch(baseUrl + 'users', {
        headers: {
          'Authorization': bearer
        },
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error ' + response.status + ': ' + response.statusText);
        }
        return response.json();
      })
      .then(user => dispatch(userLoaded(user)))
      .catch(error => dispatch(userFaild(error.message)));
    };
  };
  
export const userLoaded = (user) => {
    return {
    type: ActionTypes.USER_LOADED,
    payload: user,
  }
};
export const userLoding= () => {
    return {
        type: ActionTypes.USER_REQUEST,
    }
}

  export const userFaild =(message)=>{
    return{
        type:ActionTypes.USER_ERROR,
        message
    }
}

export const teacherSignup = (teacher)=> (dispatch)=>{
    dispatch(requestTeacherSignup())
    const bearer = 'Bearer ' + localStorage.getItem('token');
    return fetch(baseUrl + 'users/admin/teacher', {
        method: 'POST',
        body: JSON.stringify(teacher),
        headers: { 
            'Content-Type':'application/json',
            'Authorization': bearer
        }
    })
    .then(response => {
        console.log(response)
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
        },
        error => {
            throw error;
        })
    .then(response => response.json())
    .then(response => {
        if (response.success) {
            
            dispatch(receiveTeacherSignup(response));
        }
        else {
            var error = new Error('Error ' + response.status);
            error.response = response;
            throw error;
        }
    })
    .catch(error => dispatch(TeacherSignupError(error.message)))
}

export const requestTeacherSignup =()=>{
    return{
    type:ActionTypes.TEACH_SIGNUP_REQUEST,
}
}

export const receiveTeacherSignup=(teacher)=>{
    return{
        type:ActionTypes.TEACH_ADD_SECESS,
        teacher
    }
}

export const TeacherSignupError = (message)=>{
    return {
        type:ActionTypes.TEACH_ADDED_FAILD,
        message
    }
}



export const cashierSignup = (cashier)=> (dispatch)=>{
    dispatch(requestCashierSignup())
    const bearer = 'Bearer ' + localStorage.getItem('token');
    return fetch(baseUrl + 'users/admin/cashier', {
        method: 'POST',
        body: JSON.stringify(cashier),
        headers: { 
            'Content-Type':'application/json',
            'Authorization': bearer
        }
    })
    .then(response => {
        console.log(response)
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
        },
        error => {
            throw error;
        })
    .then(response => response.json())
    .then(response => {
        if (response.success) {
            
            dispatch(receiveCashierSignup(response));
        }
        else {
            var error = new Error('Error ' + response.status);
            error.response = response;
            throw error;
        }
    })
    .catch(error => dispatch(cashierSignupError(error.message)))
}

export const requestCashierSignup =()=>{
    return{
    type:ActionTypes.CASHI_SIGNUP_REQUEST,
}
}

export const receiveCashierSignup=(cashier)=>{
    return{
        type:ActionTypes.CASHI_ADD_SECESS,
        cashier
    }
}

export const cashierSignupError = (message)=>{
    return {
        type:ActionTypes.CASHI_ADDED_FAILD,
        message
    }
}

export const creatClassroom =(classRoom)=>(dispatch)=>{
    dispatch(requestToCreatClassRoom())
    const bearer = 'Bearer ' + localStorage.getItem('token');
    return fetch(baseUrl + 'classroom', {
        method: 'POST',
        body: JSON.stringify(classRoom),
        headers: { 
            'Content-Type':'application/json',
            'Authorization': bearer
        }
    })
        .then(response => {
            console.log(response)
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
            },
            error => {
                throw error;
            })
        .then(response => response.json())
        .then(response => {
            if (response.success) {
                
                dispatch(creatClassroomSeccess(response));
            }
            else {
                var error = new Error('Error ' + response.status);
                error.response = response;
                throw error;
            }
        })
        .catch(error => dispatch(creatClassroomFaild(error.message)))
    
}

export const requestToCreatClassRoom =()=>{
    return{
        type:ActionTypes.REQUEST_CLASS_CREAT
    }
}
export const creatClassroomSeccess =(classRoom)=>{
    return{
        type:ActionTypes.CREAT_CLASS_ROOM_SECESS,
        classRoom
    }
}
export const creatClassroomFaild= (messag)=>{
    return{
        type:ActionTypes.CREAT_CLASS_ROOM_FAILD,
        messag
    }
}


export const resetClassroomState = () => {
    return {
      type: ActionTypes.CREAT_CLASS_ROOM_FAILD
    };
  };
  
  export const resetCashierState = () => {
    return {
      type: ActionTypes.CASHI_ADDED_FAILD
    };
  };
  
  export const resetSignupState = () => {
    return {
      type: ActionTypes.SIGNUP_FAILURE
    };
  };
  
  export const resetTeacherState = () => {
    return {
      type: ActionTypes.TEACH_ADDED_FAILD
    };
  };
  export const restCashierDashbord =()=>{
    return{
        type:ActionTypes.FECH_CASHIER_FAILD
    }
  }
  export const resetChildSighinUp =()=>{
    return{
        type:ActionTypes.ADD_STUDENT_FAILD
    }
  }
  export const resetWaitList =()=>{
    return{
        type:ActionTypes.TOGGLEL_WAIGHT_LIST_REQUEST_FAILD
    }
  }
  export const resetUploadMaterialState =()=>{
    return{
        type:ActionTypes.UPLOAD_MATERIAL_FAILD
    }
  }
  export const resetAttendanceState = ()=>{
    return{
        type:ActionTypes.SUBMIT_ATTENDANCE_FAILURE
    }
  }
  export const resetASSIGNMENTState = ()=>{
    return{
        type:ActionTypes.SUBMIT_ASSIGNMENT_FAILURE
    }
  }
  export const resetGreedState = ()=>{
    return{
        type:ActionTypes.SUBMIT_GREED_FAILURE
    }
  }
  export const resetMonthlyFeeState =()=>{
    return{
        type:ActionTypes.SUBMIT_RECEIPT_FAILURE,
    }
  }
  export const resetMonthlyFeeTogglerState =()=>{
    return{
        type:ActionTypes.TOGGLEL_MONTHLY_FEE_LIST_REQUEST_FAILD,
    }
  }
  export const resetClassRoomGrade = ()=>{
    return{
        type:ActionTypes.FETCH_CLASS_ROOM_GRADE_FAILD,
    }
}
  export const refreshState = () => {
    return dispatch => {
      dispatch(resetClassroomState());
      dispatch(resetCashierState());
      dispatch(resetSignupState());
      dispatch(resetTeacherState());
      dispatch(restCashierDashbord());
      dispatch(resetChildSighinUp());
      dispatch(resetWaitList())
      dispatch(resetUploadMaterialState())
      dispatch(resetAttendanceState())
      dispatch(resetASSIGNMENTState())
      dispatch(resetGreedState())
      dispatch(resetMonthlyFeeState())
      dispatch(resetMonthlyFeeTogglerState())
      dispatch(resetClassRoomGrade())
      dispatch(FeedBackDeleteFaild())
    };
  };
  

export const fetchOneChat =(userId)=> (dispatch)=>{
    dispatch(fetchOneChatRequest())
    const bearer = 'Bearer ' + localStorage.getItem('token');
    axios.get(baseUrl + 'message', {headers: { 
        'Authorization': bearer
        },
        params: {
            userId: userId
        }
    }
    )
    .then(response => {
        if (response.status === 200) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response =>response.data)
    .then(OneChat => dispatch(fetchOneChatSucess(OneChat)))
    .catch(error => dispatch(OneChatLodingFaild(error.message)));
}

export const fetchOneChatRequest =()=>{
    return{
        type:ActionTypes.FETCH_ONE_CHAT_REQUIRE
    }
}

export const fetchOneChatSucess =(OneChat)=>{
    return{
        type:ActionTypes.FETCH_ONE_CHAT_SUCCESS,
        payload:OneChat
    }
}
export const OneChatLodingFaild =(masseg)=>{
    return{
        type:ActionTypes.FETCH_ONE_CHAT_FAILD,
        payload: masseg.data
    
    }
}



 export const fechOtherPersoneInfo =(userId)=> (dispatch)=>{
     dispatch(fetchOtherPersoneInfoRequest())
    const bearer = 'Bearer ' + localStorage.getItem('token');
    axios.get(baseUrl + 'users/userInfo', {headers: { 
        'Authorization': bearer
        },
        params: {
            userId: userId
        }
    }
    )
    .then(response => {
        if (response.status === 200) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response =>response.data)
    .then(OtherPersoneInfo => dispatch(fetchOtherPersoneInfoSucess(OtherPersoneInfo)))
    .catch(error => dispatch(OtherPersoneInfoLodingFaild(error.message)));
}


export const fetchOtherPersoneInfoRequest =()=>{
    return{
        type:ActionTypes.FETCH_USER_INFO_REQUIRE
    }
}

export const fetchOtherPersoneInfoSucess =(OtherPersoneInfo)=>{
    return{
        type:ActionTypes.FETCH_USER_INFO_SUCCESS,
        payload:OtherPersoneInfo
    }
}
export const OtherPersoneInfoLodingFaild =(masseg)=>{
    return{
        type:ActionTypes.FETCH_USER_INFO_FAILD,
        payload: masseg.data
    
    }
} 


export const fetchUserChat = (userId)=>(dispatch)=>{
 dispatch(fetchUserChatRequest())
    const bearer = 'Bearer ' + localStorage.getItem('token');
    axios.get(baseUrl + 'chat', {headers: { 
        'Authorization': bearer
        },
        params: {
            userId: userId
        }
    }
    )
    .then(response => {
        if (response.status === 200) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response =>response.data)
    .then(UserChat => dispatch(fetchUserChatSucess(UserChat)))
    .catch(error => dispatch(UserChatLodingFaild(error.message)));
}

export const fetchUserChatRequest =()=>{
    return{
        type:ActionTypes.FETCH_ALL_CHAT_REQUIRE
    }
}

export const fetchUserChatSucess =(UserChat)=>{
    return{
        type:ActionTypes.FETCH_ALL_CHAT_SUCCESS,
        payload:UserChat
    }
}
export const UserChatLodingFaild =(masseg)=>{
    return{
        type:ActionTypes.FETCH_ALL_CHAT_FAILD,
        payload: masseg.data
    
    }
}



export const fetchFeedBack = () => {
    return (dispatch) => {
      dispatch(FeedBackLoding());
      const bearer = 'Bearer ' + localStorage.getItem('token');
      axios.get(baseUrl + 'feedback', {
        headers: {
          'Authorization': bearer
        },
      })
      .then(response => {
        if (response.status === 200){
            return response
        }
         else{
            throw new Error('Error ' + response.status + ': ' + response.statusText);
        }
      })
      .then(response =>response.data)
      .then(FeedBack => dispatch(FeedBackLoaded(FeedBack)))
      .catch(error => dispatch(FeedBackFaild(error.message)));
    };
  };
  
export const FeedBackLoaded = (FeedBack) => {
    return {
    type: ActionTypes.FEEDBACK_LOADED,
    payload: FeedBack,
  }
};
export const FeedBackLoding= () => {
    return {
        type: ActionTypes.FEEDBACK_REQUEST,
    }
}

  export const FeedBackFaild =(message)=>{
    return{
        type:ActionTypes.FEEDBACK_ERROR,
        message
    }
}

export const deleteFeedBack =(feedBackId)=>(dispatch)=> {
    const bearer = 'Bearer ' + localStorage.getItem('token');
    axios.delete(baseUrl + 'feedback', {
      headers: {
        'Authorization': bearer
      },
      params:{
        feedBackId:feedBackId
      }
    })
    .then(response => {
      if (response.status === 200){
          return response
      }
       else{
          throw new Error('Error ' + response.status + ': ' + response.statusText);
      }
    })
    .then(response =>response.data)
    .then(FeedBack => dispatch(feedBackDeleted(FeedBack)))
    .catch(error => dispatch(FeedBackDeleteFaild(error.message)));
}

export const feedBackDeleted =(feedBack)=>{
    return{
        type:ActionTypes.DELETE_FEEDBACK_SUCCESS,
        payload:feedBack
    }
}
export const FeedBackDeleteFaild=(messag)=>{
    return{
        type:ActionTypes.DELETE_FEEDBACK_FAILD,
        messag
    }
}
const API = axios.create({ baseURL: baseUrl });

const bearer = 'Bearer ' + localStorage.getItem('token');


export const userChats = (userId) => API.get(baseUrl + 'chat', {headers: { 'Authorization': bearer},params: {userId: userId}});
//export const userChats = (userId) => API.get(baseUrl + 'chat', {headers: { 'Authorization': bearer},params: {userId: userId}})
export const getUser = (userId) => API.get(baseUrl + 'users/userInfo', {headers: { 'Authorization': bearer},params: {userId: userId}})
export const getMessages = (userId) => API.get(baseUrl + 'message', {headers: {  'Authorization': bearer},params: {userId: userId}})
export const addMessage = (message) => API.post(baseUrl + 'message', { message }, { headers: { 'Authorization': bearer } });
export const addChat =(chat)=>{
    const receiverId =chat.receiverId
    const senderId=chat.senderId
    return (API.post(baseUrl + 'chat', { senderId:senderId,receiverId:receiverId }, { headers: { 'Authorization': bearer } }))
}

