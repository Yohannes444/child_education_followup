import * as ActionTypes from '../ActionsType';

export const AttendanceLoader = (state = {
       Attendances: [],
        isLoading: false,
        loadAttendance: false,
        errMess: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_ATTENDANCE_REQUST:
            return {...state,
                isLoading: true,
               Attendances:[],
                loadAttendance: false,
                errMess:null
            };
        case ActionTypes.FETCH_ATTENDANCE_LOADED_SUCCESS:
            const Attendance = action.payload;
            console.log(Attendance)
            return {...state,
                isLoading: false,
                errMess: '',
                loadAttendance:true,
               Attendances:state.Attendances.concat(Attendance)

            };
        case ActionTypes.FETCH_ATTENDANCE_FAILD:
            return {...state,
                isLoading: false,
               Attendances: [],
                loadAttendance: false,
                errMess: action.message
                
            };
            
        
        default:
            return state
    }
}