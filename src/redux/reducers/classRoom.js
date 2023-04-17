import * as ActionTypes from '../ActionsType';

export const configClassRoomState = (state = {
        isLoading: false,
        classRoomADD: false,
        errMess: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.REQUEST_CLASS_CREAT:
            return {...state,
                isLoading: true,
                classRoomADD: false,
                errMess:null
            };
        case ActionTypes.CREAT_CLASS_ROOM_SECESS:
            return {...state,
                isLoading: false,
                errMess: '',
                classRoomADD:true,

            };
        case ActionTypes.CREAT_CLASS_ROOM_FAILD:
            return {...state,
                isLoading: false,
                classRoomADD: false,
                errMess: action.message
                
            };
            
        
        default:
            return state
    }
}