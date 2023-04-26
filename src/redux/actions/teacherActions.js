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