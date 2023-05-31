import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import styles from "./styles.module.css";
import {  Control,LocalForm } from 'react-redux-form';
//import RenderLeader from './RenderLeader'
import ReplyAllOutlinedIcon from '@mui/icons-material/ReplyAllOutlined';
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import GradingOutlinedIcon from '@mui/icons-material/GradingOutlined';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';

class uploadAssignment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            subject: "",
            description: "",
            file: "",
            quation:"",
            teacher: this.props.teacher._id,
            classRoom:this.props.classRoom._id
        };
        this.handleSubmit = this.handleSubmit.bind(this);  
    }
    handlFormback= ()=>{
        this.props.back()
    }
    handleViewGrade =(classRoomId)=>{
        this.props.fetchClassRoomGrade(classRoomId)

     }
      handleAttendance = (classRoomId)=>{
          this.props.fetchAttendaceTeacher(classRoomId)

     }
      handlUploadAssignment = (classRoomInfo) =>{
        this.props.setUploadTo(classRoomInfo)
        this.props.setIsClassRoomClicked(false)
        this.props.setIsUploeading(false)
        this.props.setisUploadingAssignment(! this.props.isUploadingAssignment)
        this.props.setattendaceIsOpen(false)
       
     }
      handleUploadMaterial = (classRoomInfo)=>{
        this.props.setUploadTo(classRoomInfo)
        this.props.setIsUploeading(! this.props.isUploading)
        this.props.setIsClassRoomClicked(false)
        this.props.setisUploadingAssignment(false)
        this.props.setattendaceIsOpen(false)

     }
      handlattendance = (classRoomInfo) =>{
        this.props.setUploadTo(classRoomInfo)
        this.props.setIsClassRoomClicked(false)
        this.props.setIsUploeading(false)
        this.props.setattendaceIsOpen(! this.props.attendaceIsOpen)
        this.props.setgreadIsClicked(false)
   
     }
     handlGreed = (classRoomInfo)=>{
        this.props.setUploadTo(classRoomInfo)
        this.props.setIsUploeading(false)
        this.props.setIsClassRoomClicked(false)
        this.props.setattendaceIsOpen(false)
        this.props.setgreadIsClicked(! this.props.greadIsClicked)
     }
    handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "description") {
         let wordCount = value.split(' ').length;
        this.setState({ [name]: value, descriptionError: wordCount>50 });
        } else {
         this.setState({ [name]: value });
        }
       }
       
    

    async handleSubmit(event) {
         const { subject,description,file, quation,teacher,classRoom} = this.state;

        const assignment = { subject,description,file,teacher,classRoom,quation};
        this.props.uploadAssignment(assignment)
        this.setState({
            subject: "",
            description: "",
            file: "",
            quation:"",
            teacher:"",
            classRoom:""
        }); 
    }


    render() {
         
        
        return(
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
                      <h2>Teacher AS</h2>
                      </MenuItem>
                      <MenuItem icon={<GradingOutlinedIcon />} > <Button style={{backgroundColor: "rgb(249, 249, 249, 0.7)",color: "#5888b9", border: "none"} }  onClick={()=>this.handlGreed( this.props.classroomview)} >add grade</Button></MenuItem>
                    <MenuItem icon={<PlaylistAddOutlinedIcon />}> <Button style={{backgroundColor: "rgb(249, 249, 249, 0.7)",color: "#5888b9", border: "none"} } onClick={()=>this.handlattendance( this.props.classroomview)}>track attendance</Button></MenuItem>
                    <MenuItem icon={<DriveFolderUploadOutlinedIcon  />}><Button style={{backgroundColor: "rgb(249, 249, 249, 0.7)",color: "#5888b9", border: "none"} } onClick={()=>this.handleUploadMaterial( this.props.classroomview)}>upload material</Button></MenuItem>
                    <MenuItem style={{backgroundColor: "#e9ca1b"}} icon={<AssignmentOutlinedIcon />}> <Button style={{backgroundColor: "#e9ca1b",color: "#5888b9", border: "none"} } onClick={()=>"this.handlUploadAssignment( this.props.classroomview)"}>upload assignment</Button></MenuItem>
                    <MenuItem icon={<FactCheckOutlinedIcon />}> <Link to='/classRoomGade'><Button style={{backgroundColor: "rgb(249, 249, 249, 0.7)",color: "#5888b9", border: "none"} }  onClick={() =>{ return this.handleViewGrade( this.props.classroomview._id)}}> view students grade</Button></Link>  </MenuItem>
                    <MenuItem icon={<ListAltOutlinedIcon />}> <Link to='/childInfor/attendanc'><Button style={{backgroundColor: "rgb(249, 249, 249, 0.7)",color: "#5888b9", border: "none"} }  onClick={() =>{ return this.handleAttendance( this.props.classroomview._id)}}> view class attendance</Button></Link></MenuItem>
                 </Menu>
                </Sidebar>
                <main>
                
                <div style={{ flexGrow: 1 }}>
        <div className="container bg-f5f5f5">
           <div className="row">
                   
                </div>
            
            <div className="row row-content">
                <div className={styles.signup_container}>
                <div className={styles.signup_form_container}>
                    <div>            
                        <ReplyAllOutlinedIcon onClick={()=>this.handlFormback()} />    
                    </div>

                    <div className={styles.right}>
                     
                        <LocalForm encType="multipart/form-data" className={styles.form_container} onSubmit={(values) => this.handleSubmit(values)}>
                            <h1 style={{color:'#f1d21c'}}>Upload assignment</h1>
                            <h3>{this.props.classRoom.className}</h3>
                            <Control.text
                                type = "text"
                                name="subject"
                                id = "firstName"
                                placeholder="subject name"
                                model=".firstName"
                                onChange={this.handleChange}
                                required
                                className={styles.input}
                            />
                           <Control.textarea
                                name="description"
                                id="description"
                                placeholder="write description the material "
                                model=".description"
                                onChange={this.handleChange}
                                required
                                className={styles.input}
                            />
                            {this.state.descriptionError && <div className={styles.error}>description shuld be less than 50 words</div>}

                            <Control.textarea 
                                name="quation"
                                id="quation"
                                placeholder="write quation the for as a home work "
                                model=".quation"
                                onChange={this.handleChange}
                                className={styles.input}
                            />
                            <Control.file
                                type="file"
                                name="file"
                                id="transcript"
                                placeholder="material quationFile"
                                model=".transcript"
                                onChange={(e) => {
                                    e.persist();
                                    this.setState({ file: e.target.files[0] });
                                  }}
                                accept=".pdf,.png,.jpg,.jpeg,.gif,.pdf,.ppt" 
                                className={styles.input}
                            /> 
                                                       
                            <button type="submit" className={styles.green_btn}>
                                Upload
                            </button>
                        </LocalForm>
                    </div>
                </div>
            </div>
            </div>
            </div>
            </div>
            </main>
            </div>
        </div>
    )}
        };


export default uploadAssignment;    
