import * as ActionTypes from './ActionsType';

export const ParentSignup = (state = {
        isLoading: false,
        parentADD: false,
        errMess: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.SIGNUP_REQUEST:
            return {...state,
                isLoading: true,
                parentADD: false,
                errMess:null
            };
        case ActionTypes.SIGNUP_SUCCESS:
            return {...state,
                isLoading: false,
                errMess: '',
                parentADD:true,

            };
        case ActionTypes.SIGNUP_FAILURE:
            return {...state,
                isLoading: false,
                parentADD: false,
                errMess: action.message
                
            };
            
        
        default:
            return state
    }
}