import * as ActionTypes from '../ActionsType';

export const AttendancLoader = (state = {
       Attendanc: [],
        isLoading: false,
        loadAttendance: false,
        errMess: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_STUDENT_ATTENDANCE_REQUST:
            return {...state,
                isLoading: true,
               Attendanc:[],
                loadAttendance: false,
                errMess:null
            };
        case ActionTypes.FETCH_STUDENT_ATTENDANCE_LOADED_SUCCESS:
            const Attendance = action.payload;
            console.log(Attendance)
            return {...state,
                isLoading: false,
                errMess: '',
                loadAttendance:true,
               Attendanc:state.Attendanc.concat(Attendance)

            };
        case ActionTypes.FETCH_STUDENT_ATTENDANCE_FAILD:
            return {...state,
                isLoading: false,
               Attendanc: [],
                loadAttendance: false,
                errMess: action.message
                
            };
            
        
        default:
            return state
    }
}