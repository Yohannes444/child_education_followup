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

  
export const submitAttendance = (attendance) =>  (dispatch) => {
    dispatch(submitAttendaceRequest())
    const token = `Bearer ${localStorage.getItem('token')}`;
    try {
       axios.post(baseUrl +'attendance', attendance,{
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json',
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
    })
    .then(response => response.data)
    .then(material =>dispatch( submitAttendaceSuccess(material)));

    } catch (error) {
      dispatch(submitAttendaceFaild(error));
    }
  };

  export const submitAttendaceRequest = ()=>{
    return{
        type:ActionTypes.SUBMIT_ATTENDANCE_REQUEST
    }
  }
  export const submitAttendaceSuccess =(material)=>{
    return{
        type: ActionTypes.SUBMIT_ATTENDANCE_SUCCESS,
        payload:material.data
    }
  }
  export const submitAttendaceFaild =(messag)=>{
    return{
        type:ActionTypes.SUBMIT_ATTENDANCE_FAILURE,
        messag
    }
  }

  export const uploadAssignment = (info) => (dispatch) =>{
    dispatch(submitAssignmentRequest())
    const token = `Bearer ${localStorage.getItem('token')}`;
    const data = new FormData()
    data.append("subject", info.subject)
    data.append("description", info.description)
    data.append("quation", info.quation)
    data.append("file",info.file)
    data.append("teacher",info.teacher)
    data.append("classRoom",info.classRoom)
    console.log(data)
    try {
       axios.post(baseUrl +'Assignment', data,{
        headers: {
          'Authorization': token,
          'Content-Type': 'multipart/form-data',
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
    })
    .then(response => response.data)
    .then(material =>dispatch( submitAssignmentSuccess(material)));

    } catch (error) {
      dispatch(submitAssignmentFaild(error));
    }
  };


  export const submitAssignmentRequest = ()=>{
    return{
        type:ActionTypes.SUBMIT_ASSIGNMENT_REQUEST
    }
  }
  export const submitAssignmentSuccess =(material)=>{
    return{
        type: ActionTypes.SUBMIT_ASSIGNMENT_SUCCESS,
        payload:material.data
    }
  }
  export const submitAssignmentFaild =(messag)=>{
    return{
        type:ActionTypes.SUBMIT_ASSIGNMENT_FAILURE,
        messag
    }
  }

  export const handleSubmitGreed =(gradeData)=>(dispatch)=>{
    dispatch(submitGreedRequest())
    console.log(gradeData)
    const token = `Bearer ${localStorage.getItem('token')}`;
  
    try {
       axios.post(baseUrl +'grade', gradeData,{
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json',
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
    })
    .then(response => response.data)
    .then(material =>dispatch( submitGreedSuccess(material)));

    } catch (error) {
      dispatch(submitGreedFaild(error));
    }
  };


  export const submitGreedRequest = ()=>{
    return{
        type:ActionTypes.SUBMIT_GREED_REQUEST
    }
  }
  export const submitGreedSuccess =(material)=>{
    return{
        type: ActionTypes.SUBMIT_GREED_SUCCESS,
        payload:material.data
    }
  }
  export const submitGreedFaild =(messag)=>{
    return{
        type:ActionTypes.SUBMIT_GREED_FAILURE,
        messag
    }
  }

  export const fetchClassRoomGrade = (classId)=>(dispatch)=>{
    dispatch(fetchClassRoomGradeRequest())
    const bearer = 'Bearer ' + localStorage.getItem('token');
    axios.get(baseUrl + 'grade', {headers: { 
        'Authorization': bearer
        },
        params: {
            classId: classId
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
    .then(grades => dispatch(fetchClassRoomGradeSucess(grades)))
    .catch(error => dispatch(ClassRoomGradeLodingFaild(error.message)));
}

export const fetchClassRoomGradeRequest= ()=>{
    return{
        type:ActionTypes.FETCH_CLASS_ROOM_GRADE_REQUST
    }
}
export const fetchClassRoomGradeSucess =(grades)=>{
    return {
        type:ActionTypes.FETCH_CLASS_ROOM_GRADE_LOADED_SUCCESS,
        payload:grades
    }
}
export const ClassRoomGradeLodingFaild = (messag)=>{
    return{
        type:ActionTypes.FETCH_CLASS_ROOM_GRADE_FAILD,
        messag
    }
}


export const fetchAttendaceTeacher = (classRoomId)=> (dispatch)=>{
  dispatch(fetchAttendaceRequest())
  const bearer = 'Bearer ' + localStorage.getItem('token');
  axios.get(baseUrl + 'attendance/teacher', {headers: { 
      'Authorization': bearer
      },
      params: {
        classRoomId: classRoomId
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
  .then(attendance => dispatch(fetchAttendaceSucess(attendance)))
  .catch(error => dispatch(AttendaceLodingFaild(error.message)));
}

export const fetchAttendaceRequest= ()=>{
  return{
      type:ActionTypes.FETCH_STUDENT_ATTENDANCE_REQUST
  }
}
export const fetchAttendaceSucess =(attendance)=>{
  return {
      type:ActionTypes.FETCH_STUDENT_ATTENDANCE_LOADED_SUCCESS,
      payload:attendance
  }
}
export const AttendaceLodingFaild = (messag)=>{
  return{
      type:ActionTypes.FETCH_STUDENT_ATTENDANCE_FAILD,
      messag
  }
}