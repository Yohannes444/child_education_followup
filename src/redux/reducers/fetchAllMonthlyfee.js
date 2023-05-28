import * as ActionTypes from '../ActionsType';

export const AllMonthlyFee = (state = {
       allMonthlyFee: [],
        isLoading: false,
        loadAttendance: false,
        errMess: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_ALL_MONTHLY_FEE_LIST_REQUIRE:
            return {...state,
                isLoading: true,
               allMonthlyFee:[],
                loadAttendance: false,
                errMess:null
            };
        case ActionTypes.FETCH_ALL_MONTHLY_FEE_LIST_SUCCESS:
            const monthlyfee = action.payload;
            console.log(monthlyfee)
            return {...state,
                isLoading: false,
                errMess: '',
                loadAttendance:true,
               allMonthlyFee:state.allMonthlyFee.concat(monthlyfee)

            };
        case ActionTypes.FETCH_ALL_MONTHLY_FEE_LIST_FAILD:
            return {...state,
                isLoading: false,
               allMonthlyFee: [],
                loadAttendance: false,
                errMess: action.message
                
            };
            
        
        default:
            return state
    }
}