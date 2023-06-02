import React, { useEffect, useState } from 'react';
import { Breadcrumb, BreadcrumbItem,Table,Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import ClassRoomView from './classRoomViewT'
import {Loading} from "./loadingComponent"
import UploadMaterialForm from './materialFormComponent'
import AttendanceForm from './attendanceForm'
import UploadAssignment from './assignmentForm'
import GreedForm from './greedForm'
import { toast } from "react-toastify";

import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import GradingOutlinedIcon from '@mui/icons-material/GradingOutlined';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';

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

    useEffect(() => {
      if (isUploading === true) {
        setattendaceIsOpen(false);
        setisUploadingAssignment(false);
        setgreadIsClicked(false);
      } else if (attendaceIsOpen === true) {
        setIsUploeading(false);
        setisUploadingAssignment(false);
        setgreadIsClicked(false);
      } else if (isUploadingAssignment === true) {
        setIsUploeading(false);
        setattendaceIsOpen(false);
        setgreadIsClicked(false);
      } else if (greadIsClicked === true) {
        setIsUploeading(false);
        setattendaceIsOpen(false);
        setisUploadingAssignment(false);
      }
    }, [isUploading, attendaceIsOpen, isUploadingAssignment, greadIsClicked]);
  
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
      <div >
        
        {classView?(
          <div>
           
              <h1>Assigned class Rooms</h1>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ width: "75%" }}>
                  <Table bordered>
                    <thead>
                      <tr>
                        <th>ClassName</th>
                        <th>ClasSize</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {props.asignedClassRoom.classroomlist.map((classRooms) => (
                        <tr key={classRooms._id}>
                          <td>{classRooms.className}</td>
                          <td>{classRooms.clasSize}</td>
                          <td>
                            <Button active={true}
 color="success" onClick={() =>{
                              return handleToggleAccount(classRooms)}}>
                              view class room
                            </Button>
                          </td>
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
        {isClassRoomClicked && classView===false ? (<ClassRoomView fetchAttendaceTeacher={props.fetchAttendaceTeacher} fetchClassRoomGrade={props.fetchClassRoomGrade}  setReceiverId={props.setReceiverId} greadIsClicked={greadIsClicked} setgreadIsClicked={setgreadIsClicked} handlback={handlback} setisUploadingAssignment={setisUploadingAssignment} isUploadingAssignment={isUploadingAssignment} setattendaceIsOpen={setattendaceIsOpen} attendaceIsOpen={attendaceIsOpen} setUploadTo={setClassRoom} setIsClassRoomClicked ={setIsClassRoomClicked} setIsUploeading={setIsUploeading} isUploading={isUploading} classroomview={classroomview}/>):console.log("")}


        {isUploading? <UploadMaterialForm fetchAttendaceTeacher={props.fetchAttendaceTeacher} fetchClassRoomGrade={props.fetchClassRoomGrade}  setReceiverId={props.setReceiverId} greadIsClicked={greadIsClicked} setgreadIsClicked={setgreadIsClicked} handlback={handlback} setisUploadingAssignment={setisUploadingAssignment} isUploadingAssignment={isUploadingAssignment} setattendaceIsOpen={setattendaceIsOpen} attendaceIsOpen={attendaceIsOpen} setUploadTo={setClassRoom} setIsClassRoomClicked ={setIsClassRoomClicked} setIsUploeading={setIsUploeading} isUploading={isUploading} classroomview={classroomview} teacher={props.user} handlFormback={handlFormback} classRoom={classRoom} uploadMaterial={props.uploadMaterial} /> :console.log("")}


        {attendaceIsOpen?<AttendanceForm fetchAttendaceTeacher={props.fetchAttendaceTeacher} fetchClassRoomGrade={props.fetchClassRoomGrade}  setReceiverId={props.setReceiverId} greadIsClicked={greadIsClicked} setgreadIsClicked={setgreadIsClicked} handlback={handlback} setisUploadingAssignment={setisUploadingAssignment} isUploadingAssignment={isUploadingAssignment} setattendaceIsOpen={setattendaceIsOpen} attendaceIsOpen={attendaceIsOpen} setUploadTo={setClassRoom} setIsClassRoomClicked ={setIsClassRoomClicked} setIsUploeading={setIsUploeading} isUploading={isUploading} classroomview={classroomview} back={handlBackFormAttendance} user={props.user}   classroomId={classRoom._id} students={classRoom.StudentsList} handleSubmit={props.handleAttendanceSubmit}  />:console.log("")}


        {isUploadingAssignment? <UploadAssignment fetchAttendaceTeacher={props.fetchAttendaceTeacher} fetchClassRoomGrade={props.fetchClassRoomGrade}  setReceiverId={props.setReceiverId} greadIsClicked={greadIsClicked} setgreadIsClicked={setgreadIsClicked} handlback={handlback} setisUploadingAssignment={setisUploadingAssignment} isUploadingAssignment={isUploadingAssignment} setattendaceIsOpen={setattendaceIsOpen} attendaceIsOpen={attendaceIsOpen} setUploadTo={setClassRoom} setIsClassRoomClicked ={setIsClassRoomClicked} setIsUploeading={setIsUploeading} isUploading={isUploading} classroomview={classroomview} uploadAssignment={props.uploadAssignment} teacher={props.user} back={handlBackFromUploadAssignmentForm} classRoom={classRoom} />:console.log("")}



        {greadIsClicked ? <GreedForm fetchAttendaceTeacher={props.fetchAttendaceTeacher} fetchClassRoomGrade={props.fetchClassRoomGrade}  setReceiverId={props.setReceiverId} greadIsClicked={greadIsClicked} setgreadIsClicked={setgreadIsClicked} handlback={handlback} setisUploadingAssignment={setisUploadingAssignment} isUploadingAssignment={isUploadingAssignment} setattendaceIsOpen={setattendaceIsOpen} attendaceIsOpen={attendaceIsOpen} setUploadTo={setClassRoom} setIsClassRoomClicked ={setIsClassRoomClicked} setIsUploeading={setIsUploeading} isUploading={isUploading} classroomview={classroomview} back={handlBackfromGreedForm} handleSubmitGreed={props.handleSubmitGreed} classRoom={classRoom} />:console.log("")}

      </div>
    );
  };
}
  export default Teacher;
  