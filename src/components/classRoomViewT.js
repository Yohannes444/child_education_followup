import React from 'react';
import { Table, Button,Breadcrumb, BreadcrumbItem, } from 'reactstrap';
import { Link } from 'react-router-dom';
import './ClassRoomView.css';


import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import GradingOutlinedIcon from '@mui/icons-material/GradingOutlined';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import ReplyAllOutlinedIcon from '@mui/icons-material/ReplyAllOutlined';
const calssRoomView = (props) => {

  const handleToggleAccount = async (id) => {
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
    props.setisUploadingAssignment(!props.isUploadingAssignment)
    
  }
  const handleUploadMaterial = (classRoomInfo)=>{
    props.setUploadTo(classRoomInfo)
    props.setIsUploeading(!props.isUploading)
    props.setIsClassRoomClicked(false)
  }
  const handlattendance = (classRoomInfo) =>{
    props.setUploadTo(classRoomInfo)
    props.setIsClassRoomClicked(false)
    props.setattendaceIsOpen(!props.attendaceIsOpen)
    

  }
  const handlGreed = (classRoomInfo)=>{
    props.setUploadTo(classRoomInfo)
    props.setIsClassRoomClicked(false)
    props.setgreadIsClicked(!props.greadIsClicked)
  }
  
  const handleContactParentClick =(Parent)=>{
    console.log(Parent)
    const ParentId=Parent

    props.setReceiverId(ParentId)
}
  return (
    
    <div className='row' style={( { display: "inline" })}>
      
      <div  id="app" style={({ height: "100vh" }, { display: "flex" })}>
                <Sidebar className="col-sm-1 col-lg-3" style={{ height: "100vh" }}>
                  <Menu >
                    <MenuItem
                      icon={<MenuOutlinedIcon />}
                      onClick={() => {
                        console.log("opps");
                      }}
                      style={{ textAlign: "center" }}
                    >
                      {" "}
                      <h2>Teacher</h2>
                      </MenuItem>
                      <MenuItem icon={<GradingOutlinedIcon />}onClick={""} > <Button style={{backgroundColor: "rgb(249, 249, 249, 0.7)",color: "#5888b9", border: "none"} }  onClick={()=>handlGreed(props.classroomview)} >add grade</Button></MenuItem>
                    <MenuItem icon={<PlaylistAddOutlinedIcon />}> <Button style={{backgroundColor: "rgb(249, 249, 249, 0.7)",color: "#5888b9", border: "none"} } onClick={()=>handlattendance(props.classroomview)}>track attendance</Button></MenuItem>
                    <MenuItem icon={<DriveFolderUploadOutlinedIcon  />}><Button style={{backgroundColor: "rgb(249, 249, 249, 0.7)",color: "#5888b9", border: "none"} } onClick={()=>handleUploadMaterial(props.classroomview)}>upload material</Button></MenuItem>
                    <MenuItem icon={<AssignmentOutlinedIcon />}> <Button style={{backgroundColor: "rgb(249, 249, 249, 0.7)",color: "#5888b9", border: "none"} } onClick={()=>handlUploadAssignment(props.classroomview)}>upload assignment</Button></MenuItem>
                    <MenuItem icon={<FactCheckOutlinedIcon />}> <Link to='/classRoomGade'><Button style={{backgroundColor: "rgb(249, 249, 249, 0.7)",color: "#5888b9", border: "none"} }  onClick={() =>{ return handleViewGrade(props.classroomview._id)}}> view students grade</Button></Link>  </MenuItem>
                    <MenuItem icon={<ListAltOutlinedIcon />}> <Link to='/childInfor/attendanc'><Button style={{backgroundColor: "rgb(249, 249, 249, 0.7)",color: "#5888b9", border: "none"} }  onClick={() =>{ return handleAttendance(props.classroomview._id)}}> view class attendance</Button></Link></MenuItem>
                 </Menu>
                </Sidebar>
                <main className="col-sm-6 col-lg-9">
                
                <div style={{ flexGrow: 1 }} >
                  <ReplyAllOutlinedIcon onClick={() =>{props.handlback()}} />

      <div className="class-room-view">
      <h1>Class Room View</h1>
      <h3>{props.classroomview.className}</h3>
      
      
        </div>
      {/*   <div className="buttons-container">
            <Button onClick={()=>handlGreed(props.classroomview)}>add grade</Button>
            <Button onClick={()=>handlattendance(props.classroomview)}>track attendance</Button>
            <Button onClick={()=>handleUploadMaterial(props.classroomview)}>upload material</Button>
            <Button onClick={()=>handlUploadAssignment(props.classroomview)}>upload assignment</Button>
            <Link to='/classRoomGade'><Button onClick={() =>{ return handleViewGrade(props.classroomview._id)}}> view students grade</Button></Link>
            <Link to='/childInfor/attendanc'><Button onClick={() =>{ return handleAttendance(props.classroomview._id)}}> view class attendance</Button></Link>
                        
        </div> */}
      <h4 >List of students in the class room</h4>
      {props.classroomview.StudentsList.length > 0?
      (<div >      
        <Table bordered >
        <thead>
          <tr>
            <th>Name</th>
            <th>Id</th>
            <th>Parent</th>
          </tr>
        </thead>
        <tbody >
          {props.classroomview.StudentsList.map((student) => (
            <tr key={student._id}>
              <td>{`${student.firstName} ${student.lastName}`}</td>
              <td>{`TMN-${ Intl.DateTimeFormat('en-US', { year: 'numeric'}).format(new Date(Date.parse(student.createdAt))).substring(4, 2)}/${student._id.substring(0, 6)}`}</td>
              <td>
              <Link  style={{ color: 'rgb(255,255,255' }} to='/chat'>
                <Button active={true}
 color="success"
                  onClick={() =>
                    handleContactParentClick(student.parent)
                  }
                >
                  Contact Parent
                </Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table></div>):(<h4 className="class-room-view">ther is no student in this class room</h4>)}
          </div>
        </main>
      </div>
    </div>
  )}

export default calssRoomView;
