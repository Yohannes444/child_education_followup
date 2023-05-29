import React, { Component, useState } from 'react';
import { Breadcrumb, BreadcrumbItem ,Nav, NavItem, NavLink,Button } from 'reactstrap';
import { Link } from 'react-router-dom';
//import {Button,Form, FormGroup, Input, Label,Col,Row ,Container} from 'reactstrap';
import CashierDashboard from './cashierDashbord'
import ClassRoomList from './classRoomDashBord'
import {Loading} from "./loadingComponent"
//import { Sidebar, Menu, MenuItem,useSidebarContext} from "react-pro-sidebar";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";

import { Grid } from '@material-ui/core';
import { Email, Phone,Delete } from "@material-ui/icons";
import { toast } from "react-toastify";
import Dashboard from  './adminDashbord'
import ViewArrayOutlinedIcon from '@mui/icons-material/ViewArrayOutlined';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import styles from "./styles.module.css";

const green = '#3bb19b';
const yellow ='#f1d21c';
const black = '#000000';

const  AdminView =(props)=> {
   const  [isDashBordOpen,setIsDashBordOpen]= useState(true)
   const  [isFeedBackOpen,setIsFeedBackOpen]= useState(false)
   const [isAdminDashbordOpen,setIsAdminDashbordOpen] =useState(false)
   const { collapseSidebar } = useProSidebar();

   
  const handleFeadback =()=>{
    setIsDashBordOpen(!isDashBordOpen)
    setIsFeedBackOpen(!isFeedBackOpen)
  }
        
  const handleDelete = (feedBackId)=>{
        props.feedBackDelete(feedBackId)
        props.fetchFeedBack()
  }

  const handleDashbordCliked =()=>{
    setIsAdminDashbordOpen(!isAdminDashbordOpen)
    setIsDashBordOpen(!isDashBordOpen)
  }
        return(
            <di>
             <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
                <Sidebar style={{ height: "100vh" }}>
                  <Menu >
                    <MenuItem
                      icon={<MenuOutlinedIcon />}
                      onClick={() => {
                        collapseSidebar();
                      }}
                      style={{ textAlign: "center" }}
                    >
                      {" "}
                      <h2>Admin</h2>
                      </MenuItem>
                    <MenuItem icon={<CalendarViewDayIcon />}onClick={handleDashbordCliked} ><Button style={{backgroundColor: "rgb(249, 249, 249, 0.7)",color: "#5888b9", border: "none"} }>Admin Dashbord</Button></MenuItem>
                    <MenuItem icon={<RateReviewOutlinedIcon />}onClick={handleFeadback}> <Button  style={{backgroundColor: "rgb(249, 249, 249, 0.7)",color: "#5888b9", border: "none"} } to='/signupCashier'>feed Back</Button></MenuItem>
                    <MenuItem icon={<ViewArrayOutlinedIcon />}><Link outline className="btn btn-border" style={{color: "#5888b9"}} to='/teacherDashbord'><span  className="fa fa-sign-un fa-lg "></span> TEACHER DASHBORD </Link></MenuItem>
                    <MenuItem icon={<ViewArrayOutlinedIcon />}><Link outline className="btn btn-border" style={{color: "#5888b9"}} to='/cashierDashbord'><span  className="fa fa-sign-un fa-lg "></span> CASHIER DASHBORD</Link></MenuItem>
                    <MenuItem icon={<KitchenOutlinedIcon />}><Link outline className="btn btn-border" style={{color: "#5888b9"}} to='/creatClassRoom'><span  className="fa fa-sign-un fa-lg "></span> ADD CLASS ROOM</Link></MenuItem>
                    <MenuItem icon={<GroupAddOutlinedIcon />}><Link outline className="btn btn-border" style={{color: "#5888b9"}} to='/signupTeacher'><span  className="fa fa-sign-un fa-lg "></span> ADD TEACHER</Link></MenuItem>
                    <MenuItem icon={<GroupAddOutlinedIcon />}> <Link outline className="btn btn-border"  style={{color: "#5888b9"}} to='/signupCashier'><span  className="fa fa-sign-un fa-lg "></span> ADD CASHIER</Link></MenuItem>
                  </Menu>
                </Sidebar>
                <main>
                
                <div style={{ flexGrow: 1 }}>
                      {isDashBordOpen? <ClassRoomList classRoomList={props.classRoomList} /> :console.log("")}
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
                        {isAdminDashbordOpen ? <Dashboard allParents={props.allParents} />:console.log('')} 
                    </div>
                </main>
              </div>
            </di>
        )
    
    
  };
  
  export default AdminView;
  