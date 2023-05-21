import * as ActionTypes from '../ActionsType';

export const ClassRoomGradeLoader = (state = {
        ClassRoomsGrade: [],
        isLoading: false,
        loadClassRoomGrade: false,
        errMess: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_CLASS_ROOM_GRADE_REQUST:
            return {...state,
                isLoading: true,
                ClassRoomsGrade:[],
                loadClassRoomGrade: false,
                errMess:null
            };
        case ActionTypes.FETCH_CLASS_ROOM_GRADE_LOADED_SUCCESS:
            var ClassRoom = action.payload;
            console.log(ClassRoom)
            return {...state,
                isLoading: false,
                errMess: '',
                loadClassRoomGrade:true,
                ClassRoomsGrade:state.ClassRoomsGrade.concat(ClassRoom)

            };
        case ActionTypes.FETCH_CLASS_ROOM_GRADE_FAILD:
            return {...state,
                isLoading: false,
                ClassRoomsGrade: [],
                loadClassRoomGrade: false,
                errMess: action.message
                
            };
            
        
        default:
            return state
    }
}