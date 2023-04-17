import * as ActionTypes from '../ActionsType';

export const cashierLoader = (state = {
        cashiers: [],
        isLoading: false,
        loadCashier: false,
        errMess: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.CASHIER_FETCH_REQUST:
            return {...state,
                isLoading: true,
                cashiers:[],
                loadCashier: false,
                errMess:null
            };
        case ActionTypes.CAHSIR_LOADED:
            var cashier = action.payload;
            return {...state,
                isLoading: false,
                errMess: '',
                loadCashier:true,
                cashiers:state.cashiers.concat(cashier)

            };
        case ActionTypes.FECH_CASHIER_FAILD:
            return {...state,
                isLoading: false,
                cashiers: [],
                loadCashier: false,
                errMess: action.message
                
            };
            
        
        default:
            return state
    }
}