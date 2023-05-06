import * as ActionTypes from '../ActionsType';

export const uploadReceiptStore = (state = {
        isLoading: false,
        success: false,
        errMess: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.SUBMIT_RECEIPT_REQUEST:
            return {...state,
                isLoading: true,
                success: false,
                errMess:null
            };
        case ActionTypes.SUBMIT_RECEIPT_SUCCESS:
            return {...state,
                isLoading: false,
                errMess: '',
                success:true,

            };
        case ActionTypes.SUBMIT_RECEIPT_FAILURE:
            return {...state,
                isLoading: false,
                success: false,
                errMess: action.message
                
            };
            
        
        default:
            return state
    }
}