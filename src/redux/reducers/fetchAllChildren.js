import * as ActionTypes from '../ActionsType';

export const AllStudentsLoader = (state = {
       allstudents: [],
        isLoading: false,
        loadstudents: false,
        errMess: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_ALL_STUDENTS_REQUIRE:
            return {...state,
                isLoading: true,
               allstudents:[],
                loadstudents: false,
                errMess:null
            };
        case ActionTypes.FETCH_ALL_STUDENTS_SUCCESS:
            const students = action.payload;
            console.log(students)
            return {...state,
                isLoading: false,
                errMess: '',
                loadstudents:true,
               allstudents:state.allstudents.concat(students)

            };
        case ActionTypes.FETCH_ALL_STUDENTS_FAILD:
            return {...state,
                isLoading: false,
               allstudents: [],
                loadstudents: false,
                errMess: action.message
                
            };
            
        
        default:
            return state
    }
}