import * as ActionTypes from '../ActionsType';

export const deleteCashier = (state = {
        isLoading: false,
        success: false,
        errMess: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.DELETE_CASHIER_REQUST:
            return {...state,
                isLoading: true,
                success: false,
                errMess:null
            };
        case ActionTypes.DELETE_CASHIER_LOADED:
            return {...state,
                isLoading: false,
                errMess: '',
                success:true,

            };
        case ActionTypes.DELETE_CASHIER_FAILD:
            return {...state,
                isLoading: false,
                success: false,
                errMess: action.message
                
            };
            
        
        default:
            return state
    }
}