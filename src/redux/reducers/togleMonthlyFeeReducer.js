import * as ActionTypes from '../ActionsType';

export const getMonthlyFeeState = (state = {
        isLoading: false,
        success: false,
        errMess: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.TOGGLE_MONTHLY_FEE_LIST_REQUEST:
            return {...state,
                isLoading: true,
                success: false,
                errMess:null
            };
        case ActionTypes.TOGGLE_MONTHLY_FEE_LIST_SUCCESS:
            var wightList = action.payload;
            console.log(wightList)
            return {...state,
                isLoading: false,
                errMess: '',
                success:true,
                

            };
        case ActionTypes.TOGGLEL_MONTHLY_FEE_LIST_REQUEST_FAILD:
            return {...state,
                isLoading: false,
                success: false,
                errMess:  action.payload
                
            };
        
        default:
            return state
    }
}