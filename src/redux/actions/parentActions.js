import * as ActionTypes from '../ActionsType';
import { baseUrl } from '../../shared/beasURL'
import axios from 'axios';

export const postStudent= (student) =>(dispatch)=>{
    dispatch(childSignupRequest())

    const data = new FormData()
    data.append("firstName", student.firstName)
    data.append("lastName", student.lastName)
    data.append("photo",student.photo)
    data.append("transcript", student.transcript)
    data.append("receipt",student.receipt)
    data.append("selectedClassRoom",student.selectedClassRoom)
    console.log(data)
    const token = localStorage.getItem('token');
    axios.post(baseUrl + "wightlist",data,{headers:{
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
    axios.get(baseUrl + 'wightlist/freeSpace', {headers: { 
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
    .then(classroom => dispatch(fetchClassRoomSucess(classroom)))
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

export const  fetchChildrens = () =>(dispatch)=>{
    dispatch(fetchChildrensRequest())
    const bearer = 'Bearer ' + localStorage.getItem('token');
    axios.get(baseUrl + 'child', {headers: { 
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
    .then(child => dispatch(fetchChildrenSucess(child)))
    .catch(error => dispatch(ChildrenLodingFaild(error.message)));
}

export const  fetchChildrensRequest = ()=>{
    return {
        type:ActionTypes.FETCH_CHILDS_REQUEST
    }
}

export const fetchChildrenSucess = (child) =>{
    return{
        type:ActionTypes.FETCH_CHILDS_SUCCESS,
        payload:child
    }
}

export const ChildrenLodingFaild = (masseg) =>{
    return{
        type:ActionTypes.FETCH_CHILDS_FAILD,
        masseg
    }
}

export const fetchChildInfo = (studentId) => (dispatch)=>{
    dispatch(fetchChildInfoRequest())

    const bearer = 'Bearer ' + localStorage.getItem('token');
    axios.get(baseUrl + 'grade/child', {headers: { 
        'Authorization': bearer,
        
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
    .then(child => dispatch(fetchChildInfoSucess(child)))
    .catch(error => dispatch(ChildInfoLodingFaild(error.message)));
}

export const  fetchChildInfoRequest = ()=>{
    return {
        type:ActionTypes.FETCH_CHILDINFO_REQUEST
    }
}

export const fetchChildInfoSucess = (child) =>{
    return{
        type:ActionTypes.FETCH_CHILDINFO_SUCCESS,
        payload:child
    }
}

export const ChildInfoLodingFaild = (masseg) =>{
    return{
        type:ActionTypes.FETCH_CHILDINFO_FAILD,
        masseg
    }
}


export const fetchMaterial = (studentId) => (dispatch)=>{
    dispatch(fetchMaterialRequest())

    const bearer = 'Bearer ' + localStorage.getItem('token');
    axios.get(baseUrl + 'classMatrial', {headers: { 
        'Authorization': bearer,
        
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
    .then(material => dispatch(fetchMaterialSucess(material)))
    .catch(error => dispatch(MaterialLodingFaild(error.message)));
}

export const  fetchMaterialRequest = ()=>{
    return {
        type:ActionTypes.FETCH_MATERIAL_REQUEST
    }
}

export const fetchMaterialSucess = (material) =>{
    return{
        type:ActionTypes.FETCH_MATERIAL_SUCCESS,
        payload:material
    }
}

export const MaterialLodingFaild = (masseg) =>{
    return{
        type:ActionTypes.FETCH_MATERIAL_FAILD,
        masseg
    }
}


export const fetchAssignment = (studentId) => (dispatch)=>{
    dispatch(fetchAssignmentRequest())

    const bearer = 'Bearer ' + localStorage.getItem('token');
    axios.get(baseUrl + 'Assignment', {headers: { 
        'Authorization': bearer,
        
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
    .then(assignment => dispatch(fetchAssignmentSucess(assignment)))
    .catch(error => dispatch(AssignmentLodingFaild(error.message)));
}

export const  fetchAssignmentRequest = ()=>{
    return {
        type:ActionTypes.FETCH_ASSIGNMENT_REQUEST
    }
}

export const fetchAssignmentSucess = (assignment) =>{
    return{
        type:ActionTypes.FETCH_ASSIGNMENT_SUCCESS,
        payload:assignment
    }
}

export const AssignmentLodingFaild = (masseg) =>{
    return{
        type:ActionTypes.FETCH_ASSIGNMENT_FAILD,
        masseg
    }
}
