import * as ActionTypes from './ActionsType';
import { baseUrl } from '../shared/beasURL'
import { fetchCashier, fetchTeacher } from './actions/adminActions';
import { parentFetchClassRoom } from './actions/parentActions';
import { fetchTeacherClassRoom } from './actions/teacherActions';
import {fetchWithList} from './actions/cashierAction'

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
  .then(response => { console.log('Feedback', response); alert('Thank you for your feedback!\n'+JSON.stringify(response)); })
  .catch(error =>  { console.log('Feedback', error.message); alert('Your feedback could not be posted\nError: '+error.message); });
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
    return async (dispatch) => {
      dispatch(userLoding());
      const bearer = 'Bearer ' + localStorage.getItem('token');
      try {
        const response = await fetch(baseUrl + 'users', {
            headers: {
                'Authorization': bearer
            },
        });
        if (!response.ok) {
          throw new Error('Error ' + response.status + ': ' + response.statusText);
        }
        const user = await response.json();
        dispatch(userLoaded(user));
        
      } catch (error) {
        dispatch(userFaild(error.message));
      }
    };
  };
  
export const userLoaded = (user) => {
    console.log(user)
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
    };
  };


  

   


