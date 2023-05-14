import * as ActionTypes from '../ActionsType';

export const allChatsLoader = (state = {
        allChats: [],
        isLoading: false,
        loadCashier: false,
        errMess: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_ALL_CHAT_REQUIRE:
            return {...state,
                isLoading: true,
                allChats:[],
                loadCashier: false,
                errMess:null
            };
        case ActionTypes.FETCH_ALL_CHAT_SUCCESS:
            var teacher = action.payload;
            return {...state,
                isLoading: false,
                errMess: '',
                loadCashier:true,
                allChats:state.allChats.concat(teacher)

            };
        case ActionTypes.FETCH_ALL_CHAT_FAILD:
            return {...state,
                isLoading: false,
                allChats: [],
                loadCashier: false,
                errMess: action.message
                
            };
            
        
        default:
            return state
    }
}