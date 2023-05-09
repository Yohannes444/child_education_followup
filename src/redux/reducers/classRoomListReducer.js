import * as ActionTypes from '../ActionsType';
export const classRoomListLoader = (state = {
        childLists: [],
        isLoading: false,
        loadChild: false,
        errMess: null,
        fetchSuccess:false
    }, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_CLASS_ROOM_LIST_REQUIRE:
            return {...state,
                isLoading: true,
                classRoomList:[],
                loadChild: false,
                errMess:null,
                fetchSuccess:false
            };
        case ActionTypes.FETCH_CLASS_ROOM_LIST_SUCCESS:
            var childList = action.payload;
            return {...state,
                isLoading: false,
                errMess: '',
                loadChild:true,
                classRoomList:state.classRoomList.concat(childList),
                fetchSuccess:false

            };
        case ActionTypes.FETCH_CLASS_ROOM_LIST_FAILD:
            return {...state,
                isLoading: false,
                classRoomList: [],
                loadChild: false,
                errMess:  action.payload,
                fetchSuccess:false
                
            };
        
        default:
            return state
    }
}