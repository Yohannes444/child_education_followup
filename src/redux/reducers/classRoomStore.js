import * as ActionTypes from '../ActionsType';

export const ClassRoomLoader = (state = {
        ClassRooms: [],
        isLoading: false,
        loadClassRoom: false,
        errMess: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.CLASSROOM_FETCH_REQUST:
            return {...state,
                isLoading: true,
                ClassRooms:[],
                loadClassRoom: false,
                errMess:null
            };
        case ActionTypes.CLASSROOM_LOADED_SUCCESS:
            var ClassRoom = action.payload;
            console.log(ClassRoom)
            return {...state,
                isLoading: false,
                errMess: '',
                loadClassRoom:true,
                ClassRooms:state.ClassRooms.concat(ClassRoom)

            };
        case ActionTypes.FETCH_CLASSROOM_FAILD:
            return {...state,
                isLoading: false,
                ClassRooms: [],
                loadClassRoom: false,
                errMess: action.message
                
            };
            
        
        default:
            return state
    }
}