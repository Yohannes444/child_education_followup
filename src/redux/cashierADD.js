import * as ActionTypes from './ActionsType';

export const cashiSignup = (state = {
        isAuthenticated: localStorage.getItem('token') ? true : false,
        isLoading: false,
        cashierADD: false,
        errMess: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.CASHI_SIGNUP_REQUEST:
            return {...state,
                isLoading: true,
                isAuthenticated:false,
                cashierADD: false,
                errMess:null
            };
        case ActionTypes.CASHI_ADD_SECESS:
            return {...state,
                isLoading: false,
                errMess: '',
                cashierADD:true,
                isAuthenticated:true

            };
        case ActionTypes.CASHI_ADDED_FAILD:
            return {...state,
                isLoading: false,
                isAuthenticated: false,
                cashierADD: false,
                errMess: action.message
                
            };
            
        
        default:
            return state
    }
}