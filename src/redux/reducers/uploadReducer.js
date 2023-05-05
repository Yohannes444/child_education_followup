import * as ActionTypes from '../ActionsType';

export const uploadReducer = (state = {
        uploadState: [],
        isLoading: false,
        success: false,
        errMess: null,
        materialList:[],
    }, action) => {
    switch (action.type) {
        case ActionTypes.UPLOAD_MATERIAL_REQUEST:
            return {...state,
                isLoading: true,
                success: false,
                errMess:null,
                materialList:[],
            };
        case ActionTypes.UPLOAD_MATERIAL_SUCCESS:
            return {...state,
                isLoading: false,
                errMess: '',
                success:true,
                materialList:[],
            };
        case ActionTypes.UPLOAD_MATERIAL_FAILD:
            return {...state,
                isLoading: false,
                success: false,
                errMess: action.message,
                materialList:[],
                
            };
            case ActionTypes.FETCH_MATERIAL_FAILD:
                return{...state,
                    isLoading:false,
                    materialList:[],
                    errMess:action.payload,
                    success:false
                }
            case ActionTypes.FETCH_MATERIAL_SUCCESS:
                var materialLists = action.payload;
                return{...state,
                    isLoading:false,
                    materialList:state.uploadState.concat(materialLists),
                    errMess:'',
                    success:true
                }
            case ActionTypes.FETCH_MATERIAL_REQUEST:
                return{...state,
                    isLoading:true,
                    materialList:[],
                    errMess:'',
                    success:false
                }
            
        
        default:
            return state
    }
}