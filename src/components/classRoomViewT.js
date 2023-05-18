import React from 'react';
import { Table, Button,Breadcrumb, BreadcrumbItem, } from 'reactstrap';
import { Link } from 'react-router-dom';
import './ClassRoomView.css';
const calssRoomView = (props) => {

  const handleToggleAccount = async (id) => {
  };
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
    
    <div>
      <Button onClick={() =>{props.handlback()}} >Back</Button>

      <div className="class-room-view">
      <h1>Class Room View</h1>
      <h3>{props.classroomview.className}</h3>
      
      
        </div>
        <div className="buttons-container">
            <Button onClick={()=>handlGreed(props.classroomview)}>add grade</Button>
            <Button onClick={()=>handlattendance(props.classroomview)}>track attendance</Button>
            <Button onClick={()=>handleUploadMaterial(props.classroomview)}>upload material</Button>
            <Button onClick={()=>handlUploadAssignment(props.classroomview)}>upload assignment</Button>
        </div>
      <h4 className="class-room-view" >List of students in the class room</h4>
    {props.classroomview.StudentsList.length > 0?
      (<div>      
        <Table bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th>Id</th>
            <th>Parent</th>
          </tr>
        </thead>
        <tbody>
          {props.classroomview.StudentsList.map((student) => (
            <tr key={student._id}>
              <td>{`${student.firstName} ${student.lastName}`}</td>
              <td>{student._id}</td>
              <td>
              <Link  style={{ backgroundColor: 'rgb(65, 141, 65)',color: 'rgb(255,255,255' }} to='/chat'>
                <Button
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
  )}

export default calssRoomView;
