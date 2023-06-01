import React from 'react';
import { Table, Button,Breadcrumb, BreadcrumbItem, } from 'reactstrap';
import { Link } from 'react-router-dom';
import {Loading} from "./loadingComponent"
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import AdminDashboard from  './adminDashbord'
import ViewArrayOutlinedIcon from '@mui/icons-material/ViewArrayOutlined';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import styles from "./styles.module.css";
import { toast } from "react-toastify";

const Dashboard = (props) => {
  const handleDashbordCliked =()=>{
  }
  const handleToggleAccount = async (id) => {
    props.activeToggler(id)
  };
  const deleteTeacherAccount =async (teacherId)=>{
    props.deleteTeacherAccount(teacherId)
  }
  if (props.teachers.isLoading) {
  
    return(
        <div className="container">
            <div className="row">
            <Breadcrumb>
                <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>add teacher</BreadcrumbItem>
            </Breadcrumb>
        </div>
            <div className="row">
                <Loading />
            </div>
        </div>
    );
  }
  else if(props.deleteTeacher.errMess){
    toast.error(props.deleteTeacher.errMess)
    props.refreshState()
  }
  else if(props.deleteTeacher.success){
      toast.success("cashier accont has ben deleted successfuly")
      props.refreshState()
  }
  else if (props.teachers.errMess) {
      return(
          <div className="container">
              <div className="row">
              <Breadcrumb>
                  <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                  <BreadcrumbItem active>add cashier</BreadcrumbItem>
              </Breadcrumb>
          </div>
              <div className="row">
                  <h4>{props.teachers.errMess}</h4>
              </div>
          </div>
      )
  }
  
  else{
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
                      <h2>Admin</h2>
                      </MenuItem>
                    <MenuItem icon={<CalendarViewDayIcon />}onClick={handleDashbordCliked} ><Button style={{backgroundColor: "rgb(249, 249, 249, 0.7)",color: "#5888b9", border: "none"} }>Admin Dashbord</Button></MenuItem>
                    <MenuItem icon={<RateReviewOutlinedIcon />}> <Button  style={{backgroundColor: "rgb(249, 249, 249, 0.7)",color: "#5888b9", border: "none"} } to='/signupCashier'>feed Back</Button></MenuItem>
                    <MenuItem icon={<ViewArrayOutlinedIcon />}><Link outline className="btn btn-border" style={{color: "#5888b9"}} to='/teacherDashbord'><span  className="fa fa-sign-un fa-lg "></span> TEACHER DASHBORD </Link></MenuItem>
                    <MenuItem icon={<ViewArrayOutlinedIcon />}><Link outline className="btn btn-border" style={{color: "#5888b9"}} to='/cashierDashbord'><span  className="fa fa-sign-un fa-lg "></span> CASHIER DASHBORD</Link></MenuItem>
                    <MenuItem icon={<KitchenOutlinedIcon />}><Link outline className="btn btn-border" style={{color: "#5888b9"}} to='/creatClassRoom'><span  className="fa fa-sign-un fa-lg "></span> ADD CLASS ROOM</Link></MenuItem>
                    <MenuItem icon={<GroupAddOutlinedIcon />}><Link outline className="btn btn-border" style={{color: "#5888b9"}} to='/signupTeacher'><span  className="fa fa-sign-un fa-lg "></span> ADD TEACHER</Link></MenuItem>
                    <MenuItem icon={<GroupAddOutlinedIcon />}> <Link outline className="btn btn-border"  style={{color: "#5888b9"}} to='/signupCashier'><span  className="fa fa-sign-un fa-lg "></span> ADD CASHIER</Link></MenuItem>
                  </Menu>
                </Sidebar>
                <main>
                
                <div  className="row row-content" >
                <div >
                <div className={styles.signup_form_container}>
            
      <h1>teachers</h1>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Enabled</th>
            <th>Action</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {props.teachers.teachers.map((teacher) => (
            <tr key={teacher._id}>
              <td>{`${teacher.firstName} ${teacher.lastName}`}</td>
              <td>{teacher.email}</td>
              <td>{teacher.active ? 'Yes' : 'No'}</td>
              <td>
                <Button color="warning"
                  onClick={() =>
                    handleToggleAccount(teacher._id)
                  }
                >
                  {teacher.active ? 'Disable' : 'Enable'}
                </Button>
              </td>
              <td>
                <Button color="danger"
                  onClick={() =>
                    deleteTeacherAccount(teacher._id)
                  }
                >
                 Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      </div>
      </div>
    </div>  </main>
              </div>
    </div>
    
  )}
};

export default Dashboard;
