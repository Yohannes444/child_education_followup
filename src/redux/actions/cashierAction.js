import * as ActionTypes from '../ActionsType';
import { baseUrl } from '../../shared/beasURL'
import axios from 'axios';


export const fetchWithList = ()=>(dispatch)=>{
    dispatch(fetchWithListRequest())
    const bearer = 'Bearer ' + localStorage.getItem('token');
    axios.get(baseUrl + 'wightlist', {headers: { 
        'Authorization': bearer
        }
    })
    .then(response => {
        if (response.status === 200) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response =>response.data)
    .then(cashiers => dispatch(fetchWithListSucess(cashiers)))
    .catch(error => dispatch(withListLodingFaild(error.message)));
}

export const fetchWithListRequest =()=>{
    return{
        type:ActionTypes.FETCH_WIGHT_LIST_REQUIRE
    }
}
export const fetchWithListSucess =(WIGHTlISTS)=>{
    return{
        type:ActionTypes.FETCH_WIGHT_LIST_SUCCESS,
        payload:WIGHTlISTS
    }
}
export const withListLodingFaild =(masseg)=>{
    return{
        type:ActionTypes.FETCH_WIGHT_LIST_FAILD,
        payload: masseg.response.data.error,
    
    }
}

export const wightListsToggler = (data)=> (dispatch) =>{
    dispatch(ToggleWighListRequest())
    const token = localStorage.getItem('token');
// Set the Authorization header with the bearer token
axios.put(baseUrl + 'wightlist', data, {
  headers: {
    'Authorization': `Bearer ${token}`
  }
})
      .then(response => {
        if (response.status === 200) {
            dispatch(fetchWithList())
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.data)
    .then(cashiers => dispatch(toggleWighListSuccess(cashiers)))
    .catch(error => dispatch(toggleCashierFaild(error.message)));
  };

  export const ToggleWighListRequest = ()=>{
    return{
        type:ActionTypes.TOGGLE_WAIGHT_LIST_REQUEST
    }
  }

  export const toggleWighListSuccess =(cashier)=>{
    return{
        type:ActionTypes.TOGGLE_WAIGHT_LIST_SUCCESS,
        payload:cashier.data
    }
  }
  export const toggleCashierFaild =(messag)=>{
    return{
        type:ActionTypes.TOGGLEL_WAIGHT_LIST_REQUEST_FAILD,
        payload: messag.response.data.error,
    }
  }


  export const fetchMonthlyFeeListes =()=> (dispatch)=>{
    dispatch(fetchMonthlyFeeListesRequest())
    const bearer = 'Bearer ' + localStorage.getItem('token');
    axios.get(baseUrl + 'monthlyFee', {headers: { 
        'Authorization': bearer
        }
    })
    .then(response => {
        if (response.status === 200) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response =>response.data)
    .then(MonthlyFeeList => dispatch(fetchMonthlyFeeListesSucess(MonthlyFeeList)))
    .catch(error => dispatch(MonthlyFeeListesLodingFaild(error.message)));
}

export const fetchMonthlyFeeListesRequest =()=>{
    return{
        type:ActionTypes.FETCH_MONTHLY_FEE_LIST_REQUIRE
    }
}
export const fetchMonthlyFeeListesSucess =(MonthlyFeeList)=>{
    return{
        type:ActionTypes.FETCH_MONTHLY_FEE_LIST_SUCCESS,
        payload:MonthlyFeeList
    }
}
export const MonthlyFeeListesLodingFaild =(masseg)=>{
    return{
        type:ActionTypes.FETCH_MONTHLY_FEE_LIST_FAILD,
        payload: masseg.data
    
    }
}


export const MonthlyFeeListToggler = (data)=> (dispatch) =>{
    dispatch(ToggleMonthlyFeeListRequest())
    const token = localStorage.getItem('token');
    const info = new FormData()
    info.append("approved",data.approved)
    info.append("id",data.id)
// Set the Authorization header with the bearer token
axios.put(baseUrl + 'monthlyFee', data, {
  headers: {
    'Authorization': `Bearer ${token}`
  }
})
      .then(response => {
        if (response.status === 200) {
            dispatch(fetchWithList())
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.data)
    .then(MonthlyFeeLists => dispatch(toggleMonthlyFeeListSuccess(MonthlyFeeLists)))
    .catch(error => dispatch(toggleMonthlyFeeListFaild(error.message)));
  };

  export const ToggleMonthlyFeeListRequest = ()=>{
    return{
        type:ActionTypes.TOGGLE_MONTHLY_FEE_LIST_REQUEST
    }
  }

  export const toggleMonthlyFeeListSuccess =(MonthlyFeeList)=>{
    return{
        type:ActionTypes.TOGGLE_MONTHLY_FEE_LIST_SUCCESS,
        payload:MonthlyFeeList.data
    }
  }
  export const toggleMonthlyFeeListFaild =(messag)=>{
    return{
        type:ActionTypes.TOGGLEL_MONTHLY_FEE_LIST_REQUEST_FAILD,
        payload: messag.data,
    }
  }