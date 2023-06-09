import * as ActionTypes from '../ActionsType';
import { baseUrl } from '../../shared/beasURL'
import axios from 'axios';


  export const fetchCashier = ()=>(dispatch)=>{
    dispatch(fetchCashierRequest())
    const bearer = 'Bearer ' + localStorage.getItem('token');
    axios.get(baseUrl + 'cashier', {headers: { 
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
    .then(cashiers => dispatch(fetchCashierSucess(cashiers)))
    .catch(error => dispatch(cashierLodingFaild(error.message)));
}

export const fetchCashierRequest= ()=>{
    return{
        type:ActionTypes.CASHIER_FETCH_REQUST
    }
}
export const fetchCashierSucess =(cashiers)=>{
    return {
        type:ActionTypes.CAHSIR_LOADED,
        payload:cashiers
    }
}
export const cashierLodingFaild = (messag)=>{
    return{
        type:ActionTypes.FECH_CASHIER_FAILD,
        messag
    }
}


export const toggleCashierAccount = id => dispatch => {
    dispatch(toggleCashierRequist())
    const token = localStorage.getItem('token');

// Set the Authorization header with the bearer token
axios.put(baseUrl + `cashier/${id}/active`, null, {
  headers: {
    'Authorization': `Bearer ${token}`
  }
})
      .then(response => {
        if (response.status === 200) {
            dispatch(fetchCashier())
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
    .then(cashiers => dispatch(toggleCashierSuccess(cashiers)))
    .catch(error => dispatch(toggleCashierFaild(error.message)));
  };

  export const toggleCashierRequist = ()=>{
    return{
        type:ActionTypes.TOGGLE_CASHIER_REQUEST
    }
  }

  export const toggleCashierSuccess =(cashier)=>{
    return{
        type:ActionTypes.TOGGLE_CASHIER_ACCOUNT_SUCCESS,
        payload:cashier.data
    }
  }
  export const toggleCashierFaild =(messag)=>{
    return{
        type:ActionTypes.TOGGLEL_CASHIER_FAILD,
        messag
    }
  }



    
export const fetchTeacher = ()=>(dispatch)=>{
    dispatch(fetchTeacherRequest())
    const bearer = 'Bearer ' + localStorage.getItem('token');
    axios.get(baseUrl + 'teacher', {headers: { 
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
    .then(response => response.data)
    .then(teachers => dispatch(fetchTeacherSucess(teachers)))
    .catch(error => dispatch(teacherLodingFaild(error.message)));
}

export const fetchTeacherRequest= ()=>{
    return{
        type:ActionTypes.TEACHER_FETCH_REQUST
    }
}
export const fetchTeacherSucess =(teachers)=>{
    return {
        type:ActionTypes.TEACHER_LOADED,
        payload:teachers
    }
}
export const teacherLodingFaild = (messag)=>{
    return{
        type:ActionTypes.FECH_TEACHER_FAILD,
        payload: messag
    }
}


export const toggleTeacherAccount = id => dispatch => {
    dispatch(toggleTeacherRequist())
    const token = `Bearer ${localStorage.getItem('token')}`;

// Set the Authorization header with the bearer token
axios.put(baseUrl + `teacher/${id}/active`, null, {
  headers: {
    'Authorization': token
  }
})
      .then(response => {
        if (response.status === 200) {
            dispatch(fetchTeacher())
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
    .then(cashiers => dispatch(toggleTeacherSuccess(cashiers)))
    .catch(error => dispatch(toggleTeacherFaild(error.message)));
  };

  export const toggleTeacherRequist = ()=>{
    return{
        type:ActionTypes.TOGGLE_TEACHER_REQUEST
    }
  }

  export const toggleTeacherSuccess =(cashier)=>{
    return{
        type:ActionTypes.TOGGLE_TEACHER_ACCOUNT_SUCCESS,
        payload:cashier.data
    }
  }
  export const toggleTeacherFaild =(messag)=>{
    return{
        type:ActionTypes.TOGGLEL_TEACHER_FAILD,
        messag
    }
  }


  
  export const fetchClassRoomList =()=> (dispatch)=>{
    dispatch(fetchClassRoomListRequest())
    const bearer = 'Bearer ' + localStorage.getItem('token');
    axios.get(baseUrl + 'classroom', {headers: { 
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
    .then(ClassRoomList => dispatch(fetchClassRoomListSucess(ClassRoomList)))
    .catch(error => dispatch(ClassRoomListLodingFaild(error.message)));
}

export const fetchClassRoomListRequest =()=>{
    return{
        type:ActionTypes.FETCH_CLASS_ROOM_LIST_REQUIRE
    }
}
export const fetchClassRoomListSucess =(ClassRoomList)=>{
    return{
        type:ActionTypes.FETCH_CLASS_ROOM_LIST_SUCCESS,
        payload:ClassRoomList
    }
}
export const ClassRoomListLodingFaild =(masseg)=>{
    return{
        type:ActionTypes.FETCH_CLASS_ROOM_LIST_FAILD,
        payload: masseg.data
    
    }
}



export const fetchAllParents = ()=>(dispatch)=>{
    dispatch(fetchAllParentsRequest())
    const bearer = 'Bearer ' + localStorage.getItem('token');
    axios.get(baseUrl + 'users/allparetns', {headers: { 
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
    .then(AllParents => dispatch(fetchAllParentsSucess(AllParents)))
    .catch(error => dispatch(AllParentsLodingFaild(error.message)));
}

export const fetchAllParentsRequest= ()=>{
    return{
        type:ActionTypes.FETCH_ALL_PARENTS_REQUST
    }
}
export const fetchAllParentsSucess =(AllParentss)=>{
    return {
        type:ActionTypes.FETCH_ALL_PARENTS_LOADED,
        payload:AllParentss
    }
}
export const AllParentsLodingFaild = (messag)=>{
    return{
        type:ActionTypes.FETCH__ALL_PARENTS_FAILD,
        messag
    }
}

export const deleteCashierAccunt =(cashierId)=>(dispatch)=>{
    dispatch(deleteCashierRequest())
    const bearer = 'Bearer ' + localStorage.getItem('token');
    axios.delete(baseUrl + 'users/cashier', {headers: { 
        'Authorization': bearer
        },
        params: {
            cashierId: cashierId
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
    .then(AllParents => dispatch(deleteCashierSucess(AllParents)))
    .catch(error => dispatch(deletCashierFaild(error.message)));
}

export const deleteCashierRequest= ()=>{
    return{
        type:ActionTypes.DELETE_CASHIER_REQUST
    }
}
export const deleteCashierSucess =(AllParentss)=>{
    return {
        type:ActionTypes.DELETE_CASHIER_LOADED,
        payload:AllParentss
    }
}
export const deletCashierFaild = (messag)=>{
    return{
        type:ActionTypes.DELETE_CASHIER_FAILD,
        messag
    }
}



export const deleteTeacherAccount =(teacherId)=>(dispatch)=>{
    dispatch(deleteTeacherRequest())
    const bearer = 'Bearer ' + localStorage.getItem('token');
    axios.delete(baseUrl + 'users/teacher', {headers: { 
        'Authorization': bearer
        },
        params: {
            teacherId: teacherId
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
    .then(AllParents => dispatch(deleteTeacherSucess(AllParents)))
    .catch(error => dispatch(deletTeacherFaild(error.message)));
}

export const deleteTeacherRequest= ()=>{
    return{
        type:ActionTypes.DELETE_TEACHER_REQUST
    }
}
export const deleteTeacherSucess =(AllParentss)=>{
    return {
        type:ActionTypes.DELETE_TEACHER_LOADED,
        payload:AllParentss
    }
}
export const deletTeacherFaild = (messag)=>{
    return{
        type:ActionTypes.DELETE_TEACHER_FAILD,
        messag
    }
}