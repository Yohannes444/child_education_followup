import * as ActionTypes from '../ActionsType';

export const uploadGreedReducer = (state = {
        isLoading: false,
        success: false,
        errMess: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.SUBMIT_GREED_REQUEST:
            return {...state,
                isLoading: true,
                success: false,
                errMess:null
            };
        case ActionTypes.SUBMIT_GREED_SUCCESS:
            return {...state,
                isLoading: false,
                errMess: '',
                success:true,

            };
        case ActionTypes.SUBMIT_GREED_FAILURE:
            return {...state,
                isLoading: false,
                success: false,
                errMess: action.message
                
            };
            
        
        default:
            return state
    }
}