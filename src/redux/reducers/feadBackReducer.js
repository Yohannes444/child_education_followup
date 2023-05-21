import * as ActionTypes from '../ActionsType';

export const feedBackLoader = (state = {
        feedBack: [],
        isLoading: false,
        loadFeedBack: false,
        errMess: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.FEEDBACK_REQUEST:
            return {...state,
                isLoading: true,
                feedBack:[],
                loadFeedBack: false,
                errMess:null
            };
        case ActionTypes.FEEDBACK_LOADED:
            var chat = action.payload;
            return {...state,
                isLoading: false,
                errMess: '',
                loadFeedBack:true,
                feedBack:state.feedBack.concat(chat)

            };
        case ActionTypes.FEEDBACK_ERROR:
            return {...state,
                isLoading: false,
                feedBack: [],
                loadFeedBack: false,
                errMess: action.message
                
            };
            
        
        default:
            return state
    }
}