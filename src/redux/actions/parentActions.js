import * as ActionTypes from '../ActionsType';
import { baseUrl } from '../../shared/beasURL'
import axios from 'axios';

export const postStudent= (student) =>(dispatch)=>{
    dispatch(childSignupRequest())

    const data = new FormData()
    data.append("firstName", student.firstName)
    data.append("lastName", student.lastName)
    data.append("transcript", student.transcript)
    data.append("receipt",student.receipt)
    data.append("selectedClassRoom",student.selectedClassRoom)
    console.log(data)
    const token = localStorage.getItem('token');
    axios.post(baseUrl + "addStudent",data,{headers:{
        'Authorization': `Bearer ${token}`,
        "Content-Type": "multipart/form-data"
    }})
    .then((response)=>{
        if(response.status ===200){
            return response
        }else{

        }
    })
    .then(resp=>resp.data)
    .then(student=>dispatch(addStudent(student)))
    .catch(err=>dispatch(addStudentFaild(err.masseg)))
    
}

export const childSignupRequest = ()=>{
    return {
        type:ActionTypes.ADD_STUDENT_REQUEST
    }
}

export const addStudent =(student)=>{
    return{
        type:ActionTypes.STUDENT_ADDED_SUCCESS,
        payload:student
    }
}

export const addStudentFaild = (masseg)=>{
    return{
        type:ActionTypes.ADD_STUDENT_FAILD,
        masseg
    }
}


export const parentFetchClassRoom = ()=>(dispatch)=>{
    dispatch(fetchClassRoomRequest())
    const bearer = 'Bearer ' + localStorage.getItem('token');
    axios.get(baseUrl + 'addStudent/freeSpace', {headers: { 
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
    .then(cashiers => dispatch(fetchClassRoomSucess(cashiers)))
    .catch(error => dispatch(classRoomLodingFaild(error.message)));
}

export const fetchClassRoomRequest= ()=>{
    return{
        type:ActionTypes.CLASSROOM_FETCH_REQUST
    }
}
export const fetchClassRoomSucess =(cashiers)=>{
    return {
        type:ActionTypes.CLASSROOM_LOADED_SUCCESS,
        payload:cashiers
    }
}
export const classRoomLodingFaild = (messag)=>{
    return{
        type:ActionTypes.FETCH_CLASSROOM_FAILD,
        messag
    }
}