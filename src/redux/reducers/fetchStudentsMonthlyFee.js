import * as ActionTypes from '../ActionsType';

export const OneStudentMonthlyLoader = (state = {
        oneMonthlyFee: [],
        isLoading: false,
        loadAttendance: false,
        errMess: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_STUDENT_MONTHLY_FEE_REQUST:
            return {...state,
                isLoading: true,
                oneMonthlyFee:[],
                loadAttendance: false,
                errMess:null
            };
        case ActionTypes.FETCH_STUDENT_MONTHLY_FEE_LOADED_SUCCESS:
            const Attendance = action.payload;
            console.log(Attendance)
            return {...state,
                isLoading: false,
                errMess: '',
                loadAttendance:true,
                oneMonthlyFee:state. oneMonthlyFee.concat(Attendance)

            };
        case ActionTypes.FETCH_STUDENT_MONTHLY_FEE_FAILD:
            return {...state,
                isLoading: false,
                oneMonthlyFee: [],
                loadAttendance: false,
                errMess: action.message
                
            };
            
        
        default:
            return state
    }
}