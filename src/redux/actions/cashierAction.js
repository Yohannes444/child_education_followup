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
        payload: masseg,
    
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
        payload: messag.response,
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
    console.log(MonthlyFeeList)
    return{
        type:ActionTypes.FETCH_MONTHLY_FEE_LIST_SUCCESS,
        payload:MonthlyFeeList
    }
}
export const MonthlyFeeListesLodingFaild =(masseg)=>{
    return{
        type:ActionTypes.FETCH_MONTHLY_FEE_LIST_FAILD,
        payload: masseg
    
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
        payload:MonthlyFeeList
    }
  }
  export const toggleMonthlyFeeListFaild =(messag)=>{
    return{
        type:ActionTypes.TOGGLEL_MONTHLY_FEE_LIST_REQUEST_FAILD,
        payload: messag,
    }
  }

  export const fetchMonthlyFeeList =()=> (dispatch)=>{
    dispatch(fetchMonthlyFeeListRequest())
    const bearer = 'Bearer ' + localStorage.getItem('token');
    axios.get(baseUrl + 'monthlyFee/all', {headers: { 
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
    .then(MonthlyFeeList => dispatch(fetchMonthlyFeeListSucess(MonthlyFeeList)))
    .catch(error => dispatch(MonthlyFeeListLodingFaild(error.message)));
}

export const fetchMonthlyFeeListRequest =()=>{
    return{
        type:ActionTypes.FETCH_ALL_MONTHLY_FEE_LIST_REQUIRE
    }
}
export const fetchMonthlyFeeListSucess =(MonthlyFeeList)=>{
    return{
        type:ActionTypes.FETCH_ALL_MONTHLY_FEE_LIST_SUCCESS,
        payload:MonthlyFeeList
    }
}
export const MonthlyFeeListLodingFaild =(masseg)=>{
    return{
        type:ActionTypes.FETCH_ALL_MONTHLY_FEE_LIST_FAILD,
        payload: masseg
    
    }
}


export const AllStudentList =()=> (dispatch)=>{
    dispatch(AllStudentListRequest())
    const bearer = 'Bearer ' + localStorage.getItem('token');
    axios.get(baseUrl + 'child/all', {headers: { 
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
    .then(AllStudentList => dispatch(AllStudentListSucess(AllStudentList)))
    .catch(error => dispatch(AllStudentListLodingFaild(error.message)));
}

export const AllStudentListRequest =()=>{
    return{
        type:ActionTypes.FETCH_ALL_STUDENTS_REQUIRE
    }
}
export const AllStudentListSucess =(AllStudentList)=>{
    return{
        type:ActionTypes.FETCH_ALL_STUDENTS_SUCCESS,
        payload:AllStudentList
    }
}
export const AllStudentListLodingFaild =(masseg)=>{
    return{
        type:ActionTypes.FETCH_ALL_STUDENTS_FAILD,
        payload: masseg
    
    }
}




export const fetchOneMonthlyFee = (studentId)=> (dispatch)=>{
    dispatch(MonthlyFeeRequest())
    const bearer = 'Bearer ' + localStorage.getItem('token');
    axios.get(baseUrl + 'monthlyFee/student', {headers: { 
        'Authorization': bearer
        },
        params: {
            studentId: studentId
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
    .then(attendance => dispatch(MonthlyFeeSucess(attendance)))
    .catch(error => dispatch(MonthlyFeeLodingFaild(error.message)));
}

export const MonthlyFeeRequest= ()=>{
    return{
        type:ActionTypes.FETCH_STUDENT_MONTHLY_FEE_REQUST
    }
}
export const MonthlyFeeSucess =(attendance)=>{
    return {
        type:ActionTypes.FETCH_STUDENT_MONTHLY_FEE_LOADED_SUCCESS,
        payload:attendance
    }
}
export const MonthlyFeeLodingFaild = (messag)=>{
    return{
        type:ActionTypes.FETCH_STUDENT_MONTHLY_FEE_FAILD,
        messag
    }
}