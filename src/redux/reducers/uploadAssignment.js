import * as ActionTypes from '../ActionsType';

export const uploadAssignmentReducer = (state = {
        isLoading: false,
        success: false,
        errMess: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.SUBMIT_ASSIGNMENT_REQUEST:
            return {...state,
                isLoading: true,
                success: false,
                errMess:null
            };
        case ActionTypes.SUBMIT_ASSIGNMENT_SUCCESS:
            return {...state,
                isLoading: false,
                errMess: '',
                success:true,

            };
        case ActionTypes.SUBMIT_ASSIGNMENT_FAILURE:
            return {...state,
                isLoading: false,
                success: false,
                errMess: action.message
                
            };
            
        
        default:
            return state
    }
}