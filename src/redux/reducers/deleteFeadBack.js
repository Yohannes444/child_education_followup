import * as ActionTypes from '../ActionsType';

export const feedBackDelete = (state = {
        deleteFeedBack: false,
        errMess: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.DELETE_FEEDBACK_SUCCESS:
            var chat = action.payload;
            return {...state,
                errMess: '',
                deleteFeedBack:true,

            };
        case ActionTypes.DELETE_FEEDBACK_FAILD:
            return {...state,
                deleteFeedBack: false,
                errMess: action.message
                
            };
            
        
        default:
            return state
    }
}