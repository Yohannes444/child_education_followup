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
        masseg
    }
}

export const wightListsToggler = (data)=> (dispatch) =>{
    dispatch(ToggleWighListRequest())
    const token = localStorage.getItem('token');
    console.log(data)
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
        messag
    }
  }
