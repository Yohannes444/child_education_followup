import * as ActionTypes from '../ActionsType';
export const childInfoLoader = (state = {
        childInfo:[],
        isLoading: false,
        loadChild: false,
        errMess: null,
        fetchSuccess:false
    }, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_CHILDINFO_FAILD:
            return{...state,
                isLoading:false,
                childInfo:[],
                loadChild:false,
                err:action.payload,
                fetchSuccess:false
            }
        case ActionTypes.FETCH_CHILDINFO_SUCCESS:
            var childInfor = action.payload;
            console.log(childInfor)
            return{...state,
                isLoading:false,
                childInfo:state.childInfo.concat(childInfor),
                loadChild:false,
                errMess:'',
                fetchSuccess:true
            }
        case ActionTypes.FETCH_CHILDINFO_REQUEST:
            return{...state,
                isLoading:true,
                childInfo:[],
                loadChild:false,
                errMess:'',
                fetchSuccess:false
            }
            
        
        default:
            return state
    }
}