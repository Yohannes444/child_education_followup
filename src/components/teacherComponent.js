import React, { Component, useState } from 'react';
import { Breadcrumb, BreadcrumbItem,Table,Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import ClassRoomView from './classRoomViewT'
import {Loading} from "./loadingComponent"
import UploadMaterialForm from './materialFormComponent'

const Teacher = (props) => {
  const [classroomview,setclassroomview]=useState()
  const [isClassRoomClicked,setIsClassRoomClicked] =useState(false)
  const [classView,setClassView]= useState(true)
  const [isUploading,setIsUploeading]= useState(false)
  const [uploadTo,setUploadTo] = useState()
    const handleToggleAccount = (classInfo) => {
      setClassView(!classView)
      setIsUploeading(false)
      setclassroomview(classInfo)
      setIsClassRoomClicked(true)

      console.log(classInfo)
    };
    const handlback =()=>{
      setClassView(true)
      setIsClassRoomClicked(false)
    }
    const handlFormback =()=>{
      setUploadTo('')
      setIsUploeading(false)
      setIsClassRoomClicked(true)
    }
    if (props.asignedClassRoom.isLoading || props.uploadState.isLoading) {
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
      alert("New education matrial has been uploaded successfully");
    }
    
    else{
       
    return (
      <div>
        
        { isClassRoomClicked? (  <Button onClick={() =>{return handlback()}} >Back</Button>):console.log("")}
        <p>this is from the Teacher component</p>
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
                        <th>className</th>
                        <th>clasSize</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {props.asignedClassRoom.classroomlist.map((classRooms) => (
                        <tr key={classRooms._id}>
                          <td>{classRooms.className}</td>
                          <td>{classRooms.clasSize}</td>
                          <td>
                            <Button onClick={() =>{
                              console.log(classRooms)
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
        {isClassRoomClicked && classView===false ? (<ClassRoomView  setUploadTo={setUploadTo} setIsClassRoomClicked ={setIsClassRoomClicked} setIsUploeading={setIsUploeading} isUploading={isUploading} classroomview={classroomview}/>):console.log("")}


        {isUploading? <UploadMaterialForm teacher={props.user} handlFormback={handlFormback} classRoom={uploadTo} uploadMaterial={props.uploadMaterial} /> :console.log("")}
      </div>
    );
  };
}
  export default Teacher;
  