import * as ActionTypes from './ActionsType';

export const User = (state = {
        isAuthenticated: localStorage.getItem('token') ? true : false,
        isLoading: false,
        user: null,
        errMess: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.USER_REQUEST:
            return {...state,
                isLoading: true,
                isAuthenticated:false,
                user: null,
                errMess:null
            };
        case ActionTypes.USER_LOADED:
            return {...state,
                isLoading: false,
                errMess: '',
                user:action.payload,
                isAuthenticated:true

            };
        case ActionTypes.USER_ERROR:
            return {...state,
                isLoading: false,
                isAuthenticated: false,
                user: null,
                errMess: action.message
                
            };
            
        
        default:
            return state
    }
}