import * as ActionTypes from '../ActionsType';

export const deleteTeacher = (state = {
        isLoading: false,
        success: false,
        errMess: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.DELETE_TEACHER_REQUST:
            return {...state,
                isLoading: true,
                success: false,
                errMess:null
            };
        case ActionTypes.DELETE_TEACHER_LOADED:
            return {...state,
                isLoading: false,
                errMess: '',
                success:true,

            };
        case ActionTypes.DELETE_TEACHER_FAILD:
            return {...state,
                isLoading: false,
                success: false,
                errMess: action.message
                
            };
            
        
        default:
            return state
    }
}