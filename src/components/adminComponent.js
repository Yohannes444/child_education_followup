import React, { Component, useState } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import {Button,Form, FormGroup, Input, Label } from 'reactstrap';
import CashierDashboard from './cashierDashbord'
import ClassRoomList from './classRoomDashBord'
import MaterialTable from 'material-table';
import {Loading} from "./loadingComponent"
import { Grid } from '@material-ui/core';
import { Email, Phone,Delete } from "@material-ui/icons";
import { toast } from "react-toastify";
import Dashboard from  './adminDashbord'

const green = '#3bb19b';
const yellow ='#f1d21c';
const black = '#000000';

const  AdminView =(props)=> {
   const  [isDashBordOpen,setIsDashBordOpen]= useState(true)
   const  [isFeedBackOpen,setIsFeedBackOpen]= useState(false)
   const [isAdminDashbordOpen,setIsAdminDashbordOpen] =useState(false)
   
  const handleFeadback =()=>{
    setIsDashBordOpen(!isDashBordOpen)
    setIsFeedBackOpen(!isFeedBackOpen)
  }
        
  const handleDelete = (feedBackId)=>{
        props.feedBackDelete(feedBackId)
        props.fetchFeedBack()
  }
        return(
            <di>
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem active>home</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                    <div className="col-12">
                    <Link outline 
                        className="btn btn-border" 
                        style={{backgroundColor: yellow}} to='/signupCashier'>
                        <span  className="fa fa-sign-un fa-lg "></span> ADD CASHIER
                    </Link>
                    <p> </p>
                    <Link outline 
                        className="btn btn-border" 
                        style={{backgroundColor: yellow}} to='/signupTeacher'>
                        <span  className="fa fa-sign-un fa-lg "></span> ADD TEACHER
                    </Link>
                    <Link outline 
                        className="btn btn-border" 
                        style={{backgroundColor: yellow}} to='/creatClassRoom'>
                        <span  className="fa fa-sign-un fa-lg "></span> ADD CLASS ROOM
                    </Link>
                    <Link outline 
                        className="btn btn-border" 
                        style={{backgroundColor: yellow}} to='/cashierDashbord'>
                        <span  className="fa fa-sign-un fa-lg "></span> CASHIER DASHBORD
                    </Link>

                    <Link outline 
                        className="btn btn-border" 
                        style={{backgroundColor: yellow}} to='/teacherDashbord'>
                        <span  className="fa fa-sign-un fa-lg "></span> TEACHER DASHBORD
                    </Link>
                    <Button onClick={handleFeadback} style={{backgroundColor: yellow}} to='/signupCashier'>feed Back</Button>
                    <Button onClick={()=>setIsAdminDashbordOpen(!isAdminDashbordOpen)} style={{backgroundColor: yellow}}>Admin Dashbord</Button>
                        <hr />
                    </div>
                {isDashBordOpen?( <ClassRoomList classRoomList={props.classRoomList} />) :console.log("")}
                {props.feedBackDelete.deleteFeedBack === true ? (
                            props.refreshState(),
                            toast.success("fead has been deleted seccess fully")
                             ) :console.log('')}
                 {isFeedBackOpen && props.feedBack.loadFeedBack && props.feedBack.feedBack.map((feedback) => (
                    <div style={{ backgroundColor: "#f2f2f2", padding: "10px" ,margin: "10px" }}>
                    <h3>{feedback.firstName} {feedback.lastName}</h3>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <Email />
                        <span>{feedback.email}</span>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Phone />
                        <span>{feedback.phoneNumber}</span>
                      </Grid>
                      <Grid item xs={12}>
                        <p>{feedback.feedBack}</p>
                      </Grid>
                    </Grid>
                    <Button onClick={()=>handleDelete(feedback._id)} style={{ backgroundColor: 'rgb(200,33,2)',}} >Delete</Button>
                  </div>
                    ))}
                    {isAdminDashbordOpen ? <Dashboard />:console.log('')}

            </di>
        )
    
    
  };
  
  export default AdminView;
  