import * as ActionTypes from '../ActionsType';

export const ParentSignup = (state = {
        isLoading: false,
        attendanceADD: false,
        errMess: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.SUBMIT_ATTENDANCE_REQUEST:
            return {...state,
                isLoading: true,
                attendanceADD: false,
                errMess:null
            };
        case ActionTypes.SUBMIT_ATTENDANCE_SUCCESS:
            return {...state,
                isLoading: false,
                errMess: '',
                attendanceADD:true,

            };
        case ActionTypes.SUBMIT_ATTENDANCE_FAILURE:
            return {...state,
                isLoading: false,
                attendanceADD: false,
                errMess: action.message
                
            };
            
        
        default:
            return state
    }
}