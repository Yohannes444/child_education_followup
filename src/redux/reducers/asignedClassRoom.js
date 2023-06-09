import * as ActionTypes from '../ActionsType';

export const asignedClassRoom = (state = {
        classroomlist: [],
        asignedClassRoom: [],
        isLoading: false,
        errMess: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.TEACHER_CLASSROOM_FETCH_REQUST:
            return {...state,
                isLoading: true,
                classroomlist:[],
                errMess:null
            };
        case ActionTypes.TEACHER_CLASSROOM_LOADED_SUCCESS:
            var classroom = action.payload;
            return {...state,
                isLoading: false,
                errMess: '',
                classroomlist:state.asignedClassRoom.concat(classroom)

            };
        case ActionTypes.FETCH_TEACHER_CLASSROOM_FAILD:
            return {...state,
                isLoading: false,
                classroomlist: [],
                errMess: action.message
            };
            
        
        default:
            return state
    }
}