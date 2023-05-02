import * as ActionTypes from '../ActionsType';
export const childListLoader = (state = {
        childLists: [],
        isLoading: false,
        loadChild: false,
        errMess: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_CHILDS_REQUEST:
            return {...state,
                isLoading: true,
                childLists:[],
                loadChild: false,
                errMess:null
            };
        case ActionTypes.FETCH_CHILDS_SUCCESS:
            var childList = action.payload;
            return {...state,
                isLoading: false,
                errMess: '',
                loadChild:true,
                childLists:state.childLists.concat(childList)

            };
        case ActionTypes.FETCH_CHILDS_FAILD:
            return {...state,
                isLoading: false,
                childLists: [],
                loadChild: false,
                errMess:  action.payload
                
            };
            
        
        default:
            return state
    }
}