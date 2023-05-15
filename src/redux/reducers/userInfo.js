import * as ActionTypes from '../ActionsType';

export const userInfoLoader = (state = {
        userInfo: null,
        isLoading: false,
        loadUserInfo: false,
        errMess: false
    }, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_USER_INFO_REQUIRE:
            return {...state,
                isLoading: true,
                userInfo:null,
                loadUserInfo: false,
                errMess:null
            };
        case ActionTypes.FETCH_USER_INFO_SUCCESS:
            return {...state,
                isLoading: false,
                errMess: '',
                loadUserInfo:true,
                userInfo:action.payload,
            };
        case ActionTypes.FETCH_USER_INFO_FAILD:
            return {...state,
                isLoading: false,
                userInfo: null,
                loadUserInfo: false,
                errMess: action.message
                
            };
            
        
        default:
            return state
    }
}