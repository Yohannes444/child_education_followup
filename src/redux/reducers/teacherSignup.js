import * as ActionTypes from '../ActionsType';

export const TeachSignup = (state = {
        isLoading: false,
        teacherADD: false,
        errMess: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.TEACH_SIGNUP_REQUEST:
            return {...state,
                isLoading: true,
                teacherADD: false,
                errMess:null
            };
        case ActionTypes.TEACH_ADD_SECESS:
            return {...state,
                isLoading: false,
                errMess: '',
                teacherADD:true,

            };
        case ActionTypes.TEACH_ADDED_FAILD:
            return {...state,
                isLoading: false,
                teacherADD: false,
                errMess: action.message
                
            };
            
        
        default:
            return state
    }
}