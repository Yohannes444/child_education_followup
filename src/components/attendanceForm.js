import React, { useState } from 'react';
import { Table, Button,Breadcrumb, BreadcrumbItem, } from 'reactstrap';
import styles from "./styles.module.css";
import { Link } from 'react-router-dom';
import ReplyAllOutlinedIcon from '@mui/icons-material/ReplyAllOutlined';
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import GradingOutlinedIcon from '@mui/icons-material/GradingOutlined';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';

const AttendanceForm = (props) => {
  const [attendance, setAttendance] = useState({});

  const handleChange = (event, studentId) => {
    const { checked } = event.target;
    setAttendance({
      ...attendance,
      [studentId]: checked,
    });
  };
  const handleViewGrade =(classRoomId)=>{
    props.fetchClassRoomGrade(classRoomId)

 }
  const handleAttendance = (classRoomId)=>{
      props.fetchAttendaceTeacher(classRoomId)

 }
  const handlUploadAssignment = (classRoomInfo) =>{
    props.setUploadTo(classRoomInfo)
    props.setIsClassRoomClicked(false)
    props.setIsUploeading(false)
    props.setisUploadingAssignment(! props.isUploadingAssignment)
    props.setattendaceIsOpen(false)
   
 }
  const handleUploadMaterial = (classRoomInfo)=>{
    props.setUploadTo(classRoomInfo)
    props.setIsUploeading(! props.isUploading)
    props.setIsClassRoomClicked(false)
    props.setisUploadingAssignment(false)
    props.setattendaceIsOpen(false)

 }
  const handlattendance = (classRoomInfo) =>{
    props.setUploadTo(classRoomInfo)
    props.setIsClassRoomClicked(false)
    props.setIsUploeading(false)
    props.setattendaceIsOpen(! props.attendaceIsOpen)
    props.setgreadIsClicked(false)

 }
  const handlGreed = (classRoomInfo)=>{
    props.setUploadTo(classRoomInfo)
    props.setIsUploeading(false)
    props.setIsClassRoomClicked(false)
    props.setattendaceIsOpen(false)
    props.setgreadIsClicked(! props.greadIsClicked)
 }
  const handleSubmitClick = (event) => {
    event.preventDefault();
    const data = {
      classroomId:props.classroomId,
      date: new Date(),
      students: props.students.map((student) => ({
        studentId: student._id,
        teacherId:props.user._id,
        present: attendance[student._id] || false,
      })),
    };
    props.handleSubmit(data);
  };
  const handlFormback= ()=>{
    props.back()
}

  return (
  <div>
     <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
                <Sidebar style={{ height: "100vh" }}>
                  <Menu >
                    <MenuItem
                      icon={<MenuOutlinedIcon />}
                      onClick={() => {
                        console.log("opps");
                      }}
                      style={{ textAlign: "center" }}
                    >
                      {" "}
                      <h2>Teacher AT</h2>
                      </MenuItem>
                      <MenuItem icon={<GradingOutlinedIcon />}onClick={""} > <Button style={{backgroundColor: "rgb(249, 249, 249, 0.7)",color: "#5888b9", border: "none"} }  onClick={()=>handlGreed(props.classroomview)} >add grade</Button></MenuItem>
                    <MenuItem style={{backgroundColor: "#e9ca1b"}} icon={<PlaylistAddOutlinedIcon />}> <Button style={{backgroundColor: "#e9ca1b",color: "#5888b9", border: "none"} } onClick={()=>"handlattendance(props.classroomview)"}>track attendance</Button></MenuItem>
                    <MenuItem icon={<DriveFolderUploadOutlinedIcon  />}><Button style={{backgroundColor: "rgb(249, 249, 249, 0.7)",color: "#5888b9", border: "none"} } onClick={()=>handleUploadMaterial(props.classroomview)}>upload material</Button></MenuItem>
                    <MenuItem icon={<AssignmentOutlinedIcon />}> <Button style={{backgroundColor: "rgb(249, 249, 249, 0.7)",color: "#5888b9", border: "none"} } onClick={()=>handlUploadAssignment(props.classroomview)}>upload assignment</Button></MenuItem>
                    <MenuItem icon={<FactCheckOutlinedIcon />}> <Link to='/classRoomGade'><Button style={{backgroundColor: "rgb(249, 249, 249, 0.7)",color: "#5888b9", border: "none"} }  onClick={() =>{ return handleViewGrade(props.classroomview._id)}}> view students grade</Button></Link>  </MenuItem>
                    <MenuItem icon={<ListAltOutlinedIcon />}> <Link to='/childInfor/attendanc'><Button style={{backgroundColor: "rgb(249, 249, 249, 0.7)",color: "#5888b9", border: "none"} }  onClick={() =>{ return handleAttendance(props.classroomview._id)}}> view class attendance</Button></Link></MenuItem>
                 </Menu>
                </Sidebar>
                <main>
                
                <div style={{ flexGrow: 1 }}>
    <div className="container bg-f5f5f5">
    
      <div className="row">
        <div className="row row-content">
        <div className={styles.signup_container}>
            <div className={styles.signup_form_container}>
        <div>   
          <ReplyAllOutlinedIcon onClick={()=>handlFormback()} />             
        </div>
        
   
    <div className={styles.right}>
    <form onSubmit={handleSubmitClick} className={styles.form_container} >
      <h2>Attendance</h2>
      <Table bordered>
          <thead>
          <tr>
            <th>full name</th>
            <th>id</th>
            <th>present</th>
          </tr>
        </thead>
        <tbody>
      {props.students.map((student) => (
        
          
          <tr key={student._id}>
          <td>{`${student.firstName} ${student.lastName}`}</td>
          <td>{student._id}</td>
          <td>  <input
                  className={styles.input}
                  type="checkbox"
                  checked={attendance[student._id] || false}
                  onChange={(event) => handleChange(event, student._id)}
                /></td>
                
              </tr>
           
          ))}
        </tbody>
      </Table>
      <Button type="submit">Save Attendance</Button>
    </form>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </main>
    </div>
    </div>
  );
};

export default AttendanceForm;
