import * as ActionTypes from '../ActionsType';

export const uploadReducer = (state = {
        isLoading: false,
        success: false,
        errMess: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.UPLOAD_MATERIAL_REQUEST:
            return {...state,
                isLoading: true,
                success: false,
                errMess:null
            };
        case ActionTypes.UPLOAD_MATERIAL_SUCCESS:
            return {...state,
                isLoading: false,
                errMess: '',
                success:true,

            };
        case ActionTypes.UPLOAD_MATERIAL_FAILD:
            return {...state,
                isLoading: false,
                success: false,
                errMess: action.message
                
            };
            
        
        default:
            return state
    }
}