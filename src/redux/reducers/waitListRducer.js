import * as ActionTypes from '../ActionsType';
export const wightListLoader = (state = {
        wightLists: [],
        isLoading: false,
        loadwightList: false,
        errMess: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_WIGHT_LIST_REQUIRE:
            return {...state,
                isLoading: true,
                wightLists:[],
                loadwightList: false,
                errMess:null
            };
        case ActionTypes.FETCH_WIGHT_LIST_SUCCESS:
            var wightList = action.payload;
            console.log(wightList)
            return {...state,
                isLoading: false,
                errMess: '',
                loadwightList:true,
                wightLists:state.wightLists.concat(wightList)

            };
        case ActionTypes.FETCH_WIGHT_LIST_FAILD:
            return {...state,
                isLoading: false,
                wightLists: [],
                loadwightList: false,
                errMess:  action.payload
                
            };
            
        
        default:
            return state
    }
}