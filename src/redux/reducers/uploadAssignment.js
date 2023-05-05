import * as ActionTypes from '../ActionsType';

export const uploadAssignmentReducer = (state = {
    assignmentState:[],
        isLoading: false,
        success: false,
        errMess: null,
        assignmentlList:[],
    }, action) => {
    switch (action.type) {
        case ActionTypes.SUBMIT_ASSIGNMENT_REQUEST:
            return {...state,
                isLoading: true,
                success: false,
                assignmentlList:[],
                errMess:null
            };
        case ActionTypes.SUBMIT_ASSIGNMENT_SUCCESS:
            return {...state,
                isLoading: false,
                errMess: '',
                assignmentlList:[],
                success:true,

            };
        case ActionTypes.SUBMIT_ASSIGNMENT_FAILURE:
            return {...state,
                isLoading: false,
                success: false,
                assignmentlList:[],
                errMess: action.message
                
            };
            case ActionTypes.FETCH_ASSIGNMENT_FAILD:
                return{...state,
                    isLoading:false,
                    assignmentlList:[],
                    errMess:action.payload,
                    success:false
                }
            case ActionTypes.FETCH_ASSIGNMENT_SUCCESS:
                var assignmentLists = action.payload;
                return{...state,
                    isLoading:false,
                    assignmentlList:state.assignmentState.concat(assignmentLists),
                    errMess:'',
                    success:true
                }
            case ActionTypes.FETCH_ASSIGNMENT_REQUEST:
                return{...state,
                    isLoading:true,
                    assignmentlList:[],
                    errMess:'',
                    success:false
                }
            
        
        default:
            return state
    }
}