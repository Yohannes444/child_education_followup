import * as ActionTypes from '../ActionsType';

export const TeachSignup = (state = {
        isAuthenticated: localStorage.getItem('token') ? true : false,
        isLoading: false,
        teacherADD: false,
        errMess: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.TEACH_SIGNUP_REQUEST:
            return {...state,
                isLoading: true,
                isAuthenticated:false,
                teacherADD: false,
                errMess:null
            };
        case ActionTypes.TEACH_ADD_SECESS:
            return {...state,
                isLoading: false,
                errMess: '',
                teacherADD:true,
                isAuthenticated:true

            };
        case ActionTypes.TEACH_ADDED_FAILD:
            return {...state,
                isLoading: false,
                isAuthenticated: false,
                teacherADD: false,
                errMess: action.message
                
            };
            
        
        default:
            return state
    }
}