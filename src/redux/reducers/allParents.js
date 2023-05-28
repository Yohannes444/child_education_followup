import * as ActionTypes from '../ActionsType';

export const AllParentsLoader = (state = {
       allParents: [],
        isLoading: false,
        loadParents: false,
        errMess: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_ALL_PARENTS_REQUST:
            return {...state,
                isLoading: true,
               allParents:[],
                loadParents: false,
                errMess:null
            };
        case ActionTypes.FETCH_ALL_PARENTS_LOADED:
            const Parents = action.payload;
            console.log(Parents)
            return {...state,
                isLoading: false,
                errMess: '',
                loadParents:true,
               allParents:state.allParents.concat(Parents)

            };
        case ActionTypes.FETCH__ALL_PARENTS_FAILD:
            return {...state,
                isLoading: false,
               allParents: [],
                loadParents: false,
                errMess: action.message
                
            };
            
        
        default:
            return state
    }
}