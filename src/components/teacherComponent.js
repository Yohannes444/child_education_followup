import React, { Component, useState } from 'react';
import { Breadcrumb, BreadcrumbItem,Table,Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import ClassRoomView from './classRoomViewT'
import {Loading} from "./loadingComponent"
import UploadMaterialForm from './materialFormComponent'
import AttendanceForm from './attendanceForm'
import UploadAssignment from './assignmentForm'
import GreedForm from './greedForm'
import { toast } from "react-toastify";

const Teacher = (props) => {
  const [classroomview,setclassroomview]=useState()
  const [isClassRoomClicked,setIsClassRoomClicked] =useState(false)
  const [classView,setClassView]= useState(true)
  const [isUploading,setIsUploeading]= useState(false)
  const [classRoom,setClassRoom] = useState()
  const [attendaceIsOpen,setattendaceIsOpen]=useState(false)
  const [isUploadingAssignment,setisUploadingAssignment] =useState(false)
  const [greadIsClicked,setgreadIsClicked] = useState(false)

    const handleToggleAccount = (classInfo) => {
      setClassView(!classView)
      setIsUploeading(false)
      setclassroomview(classInfo)
      setIsClassRoomClicked(true)

      console.log(classInfo)
    };
    const handleViewGrade =(classRoomId)=>{
      props.fetchClassRoomGrade(classRoomId)
    }
    const handleAttendance = (classRoomId)=>{
        props.fetchAttendaceTeacher(classRoomId)
    }
    const handlback =()=>{
      setClassView(true)
      setIsClassRoomClicked(false)
    }
    const handlFormback =()=>{
      setClassRoom('')
      setIsUploeading(false)
      setIsClassRoomClicked(true)
    }
    const handlBackFormAttendance =()=>{
      setClassRoom('')
      setattendaceIsOpen(false)
      setIsClassRoomClicked(true)
    }
    const handlBackFromUploadAssignmentForm =()=>{
      setClassRoom('')
      setisUploadingAssignment(false)
      setIsClassRoomClicked(true)
    }
    const handlBackfromGreedForm =()=>{
      setClassRoom('')
      setgreadIsClicked(false)
      setIsClassRoomClicked(true)
    }
    if (props.asignedClassRoom.isLoading || props.uploadState.isLoading ||props.attendanceState.isLoading ||props.assignmentState.isLoading || props.uploadGreedState.isLoading) {
      return(
          <div className="container">
              <div className="row">
               <Breadcrumb>
                  <BreadcrumbItem>
                    <Link to="/home">Home</Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem active>TeacherView</BreadcrumbItem>
                </Breadcrumb>
          </div>
              <div className="row">
                  <Loading />
              </div>
          </div>
      );
    }
    else if (props.asignedClassRoom.errMess ) {
        return(
            <div className="container">
                <div className="row">
                 <Breadcrumb>
                  <BreadcrumbItem>
                    <Link to="/home">Home</Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem active>TeacherView</BreadcrumbItem>
                </Breadcrumb>
            </div>
                <div className="row">
                    <h4>{props.asignedClassRoom.errMess}</h4>
                </div>
            </div>
        )
    }
    else if (props.attendanceState.errMess ) {
      return(
          <div className="container">
              <div className="row">
               <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="/home">Home</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>TeacherView</BreadcrumbItem>
              </Breadcrumb>
          </div>
              <div className="row">
                  <h4>{props.attendanceState.errMess}</h4>
              </div>
          </div>
      )
  }
  else if ( props.uploadState.errMess) {
      return(
          <div className="container">
              <div className="row">
               <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="/home">Home</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>TeacherView</BreadcrumbItem>
              </Breadcrumb>
          </div>
              <div className="row">
                  <h4>{props.uploadState.errMess}</h4>
              </div>
          </div>
      )
  }
  else if (props.uploadState.success){
    props.refreshState()
    toast.success("New education matrial has been uploaded successfully");
  }
  else if ( props.uploadGreedState.errMess) {
    return(
        <div className="container">
            <div className="row">
             <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/home">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>TeacherView</BreadcrumbItem>
            </Breadcrumb>
        </div>
            <div className="row">
                <h4>{props.uploadGreedState.errMess}</h4>
            </div>
        </div>
    )
}
else if (props.uploadGreedState.success){
  props.refreshState()
  toast.success("New  greed has been uploaded successfully");
}
    else if ( props.assignmentState.errMess) {
      return(
          <div className="container">
              <div className="row">
               <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="/home">Home</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>TeacherView</BreadcrumbItem>
              </Breadcrumb>
          </div>
              <div className="row">
                  <h4>{props.assignmentState.errMess}</h4>
              </div>
          </div>
      )
  }
    else if (props.assignmentState.success){
      props.refreshState()
      toast.success("New education assignment has been uploaded successfully");
    }
    else if (props.attendanceState.attendanceADD){
      props.refreshState()
      toast.success("New attendance has been  uploaded successfully");
    }
    else{
       
    return (
      <div>
        
        {classView?(
          <div>
            <div className="row">
                <Breadcrumb>
                  <BreadcrumbItem>
                    <Link to="/home">Home</Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem active>TeacherView</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                  <h3>userView</h3>
                  <hr />
                </div>
              </div>
              
              <h1>Assigned class Rooms</h1>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ width: "75%" }}>
                  <Table bordered>
                    <thead>
                      <tr>
                        <th>ClassName</th>
                        <th>ClasSize</th>
                        <th>Action</th>
                        <th>Grade</th>
                        <th>Attendance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {props.asignedClassRoom.classroomlist.map((classRooms) => (
                        <tr key={classRooms._id}>
                          <td>{classRooms.className}</td>
                          <td>{classRooms.clasSize}</td>
                          <td>
                            <Button onClick={() =>{
                              return handleToggleAccount(classRooms)}}>
                              view class room
                            </Button>
                          </td>
                          <td><Link to='/classRoomGade'><Button onClick={() =>{ return handleViewGrade(classRooms._id)}}> view students grade</Button></Link></td>
                          <td><Link to='/childInfor/attendanc'><Button onClick={() =>{ return handleAttendance(classRooms._id)}}> view class attendance</Button></Link></td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
                <div style={{ width: "25%", textAlign: "center" }}>
                  <img src="assets/images/followUP.png" alt="placeholder" width="500"/>
                </div>
              </div>
          </div>
        ):(console.log(""))
        }
        {isClassRoomClicked && classView===false ? (<ClassRoomView setReceiverId={props.setReceiverId} greadIsClicked={greadIsClicked} setgreadIsClicked={setgreadIsClicked} handlback={handlback} setisUploadingAssignment={setisUploadingAssignment} isUploadingAssignment={isUploadingAssignment} setattendaceIsOpen={setattendaceIsOpen} attendaceIsOpen={attendaceIsOpen} setUploadTo={setClassRoom} setIsClassRoomClicked ={setIsClassRoomClicked} setIsUploeading={setIsUploeading} isUploading={isUploading} classroomview={classroomview}/>):console.log("")}


        {isUploading? <UploadMaterialForm teacher={props.user} handlFormback={handlFormback} classRoom={classRoom} uploadMaterial={props.uploadMaterial} /> :console.log("")}
        {attendaceIsOpen?<AttendanceForm back={handlBackFormAttendance} user={props.user}   classroomId={classRoom._id} students={classRoom.StudentsList} handleSubmit={props.handleAttendanceSubmit}  />:console.log("")}
        {isUploadingAssignment? <UploadAssignment uploadAssignment={props.uploadAssignment} teacher={props.user} back={handlBackFromUploadAssignmentForm} classRoom={classRoom} />:console.log("")}
        {greadIsClicked ? <GreedForm back={handlBackfromGreedForm} handleSubmitGreed={props.handleSubmitGreed} classRoom={classRoom} />:console.log("")}
      </div>
    );
  };
}
  export default Teacher;
  