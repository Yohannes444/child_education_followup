import * as ActionTypes from '../ActionsType';
export const MonthlyFeeListReducer = (state = {
        MonthlyFeeList: [],
        isLoading: false,
        monthlyFeeLoaded:false,
        success: false,
        errMess: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_MONTHLY_FEE_LIST_REQUIRE:
            return {...state,
                isLoading: true,
                MonthlyFeeList:[],
                monthlyFeeLoaded: false,
                errMess:null
            };
        case ActionTypes.FETCH_MONTHLY_FEE_LIST_SUCCESS:
            var monthlyFeeList = action.payload;
            console.log(monthlyFeeList)
            return {...state,
                isLoading: false,
                errMess: '',
                monthlyFeeLoaded:true,
                MonthlyFeeList:state.MonthlyFeeList.concat(monthlyFeeList)

            };
        case ActionTypes.FETCH_MONTHLY_FEE_LIST_FAILD:
            return {...state,
                isLoading: false,
                MonthlyFeeList: [],
                monthlyFeeLoaded: false,
                errMess:  action.payload
                
            };
            
            
        
        default:
            return state
    }
}