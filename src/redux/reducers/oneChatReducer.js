import * as ActionTypes from '../ActionsType';

export const OneChatsLoader = (state = {
        oneChats: [],
        isLoading: false,
        loadOneChat: false,
        errMess: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_ONE_CHAT_REQUIRE:
            return {...state,
                isLoading: true,
                oneChats:[],
                loadOneChat: false,
                errMess:null
            };
        case ActionTypes.FETCH_ONE_CHAT_SUCCESS:
            var chat = action.payload;
            return {...state,
                isLoading: false,
                errMess: '',
                loadOneChat:true,
                oneChats:state.oneChats.concat(chat)

            };
        case ActionTypes.FETCH_ONE_CHAT_FAILD:
            return {...state,
                isLoading: false,
                oneChats: [],
                loadOneChat: false,
                errMess: action.message
                
            };
            
        
        default:
            return state
    }
}