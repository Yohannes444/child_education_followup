import * as ActionTypes from '../ActionsType';

export const asignedClassRoom = (state = {
        classroomlist: [],
        asignedClassRoom: [],
        isLoading: false,
        loadClassRoom: false,
        errMess: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.TEACHER_CLASSROOM_FETCH_REQUST:
            return {...state,
                isLoading: true,
                classroomlist:[],
                loadClassRoom: false,
                errMess:null
            };
        case ActionTypes.TEACHER_CLASSROOM_LOADED_SUCCESS:
            var classroom = action.payload;
            console.log(classroom)
            return {...state,
                isLoading: false,
                errMess: '',
                loadClassRoom:true,
                classroomlist:state.asignedClassRoom.concat(classroom)

            };
        case ActionTypes.FETCH_TEACHER_CLASSROOM_FAILD:
            return {...state,
                isLoading: false,
                classroomlist: [],
                loadClassRoom: false,
                errMess: action.message
                
            };
            
        
        default:
            return state
    }
}