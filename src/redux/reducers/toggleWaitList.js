import * as ActionTypes from '../ActionsType';

export const toggleWightList = (state = {
        isLoading: false,
        success: false,
        errMess: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.TOGGLE_WAIGHT_LIST_REQUEST:
            return {...state,
                isLoading: true,
                success: false,
                errMess:null
            };
        case ActionTypes.TOGGLE_WAIGHT_LIST_SUCCESS:
            return {...state,
                isLoading: false,
                errMess: '',
                success:true,

            };
        case ActionTypes.TOGGLEL_WAIGHT_LIST_REQUEST_FAILD:
            return {...state,
                isLoading: false,
                success: false,
                errMess: action.message
                
            };
            
        
        default:
            return state
    }
}