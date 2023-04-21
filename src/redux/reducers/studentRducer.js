import * as ActionTypes from '../ActionsType';

export const childSignup = (state = {
        isLoading: false,
        childADD: false,
        errMess: null 
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_STUDENT_REQUEST:
            return {...state,
                isLoading: true,
                childADD: false,
                errMess:null
            };
        case ActionTypes.STUDENT_ADDED_SUCCESS:
            return {...state,
                isLoading: false,
                errMess: '',
                childADD:true,

            };
        case ActionTypes.ADD_STUDENT_FAILD:
            return {...state,
                isLoading: false,
                childADD: false,
                errMess: action.message
                
            };
            
        
        default:
            return state
    }
}