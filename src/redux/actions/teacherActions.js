import * as ActionTypes from '../ActionsType';
import { baseUrl } from '../../shared/beasURL'
import axios from 'axios';




export const fetchTeacherClassRoom = ()=>(dispatch)=>{
    dispatch(fetchTeacherClassRoomRequest())
    const bearer = 'Bearer ' + localStorage.getItem('token');
    axios.get(baseUrl + 'classroom/teacherview', {headers: { 
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
    .then(classroom => dispatch(fetchTeacherClassRoomSucess(classroom)))
    .catch(error => dispatch(TeacherclassRoomLodingFaild(error.message)));
}

export const fetchTeacherClassRoomRequest= ()=>{
    return{
        type:ActionTypes.TEACHER_CLASSROOM_FETCH_REQUST
    }
}
export const fetchTeacherClassRoomSucess =(classroom)=>{
    return {
        type:ActionTypes.TEACHER_CLASSROOM_LOADED_SUCCESS,
        payload:classroom
    }
}
export const TeacherclassRoomLodingFaild = (messag)=>{
    return{
        type:ActionTypes.FETCH_TEACHER_CLASSROOM_FAILD,
        messag
    }
}

export const uploadMaterial =(materialInfo)=>(dispatch)=>{
    dispatch(uploadMatrialRequast())
    const data = new FormData()
    data.append("subject", materialInfo.subject)
    data.append("description", materialInfo.description)
    data.append("teacher", materialInfo.teacher)
    data.append("file",materialInfo.file)
    data.append("classRoom",materialInfo.classRoom)
    console.log(data)
    const token = `Bearer ${localStorage.getItem('token')}`;
// Set the Authorization header with the bearer token
axios.post(baseUrl + "classMatrial", data, {
  headers: {
    'Authorization': token,
    "Content-Type": "multipart/form-data"
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
    .then(material => dispatch(uploadMaterialSuccess(material)))
    .catch(error => dispatch(uploadMaterialFaild(error.message)));
  };

  export const uploadMatrialRequast = ()=>{
    return{
        type:ActionTypes.UPLOAD_MATERIAL_REQUEST
    }
  }

  export const uploadMaterialSuccess =(material)=>{
    return{
        type:ActionTypes.UPLOAD_MATERIAL_SUCCESS,
        payload:material.data
    }
  }
  export const uploadMaterialFaild =(messag)=>{
    return{
        type:ActionTypes.UPLOAD_MATERIAL_FAILD,
        messag
    }
  }