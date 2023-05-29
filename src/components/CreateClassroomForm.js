import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import styles from "./styles.module.css";
import {  Control,LocalForm, controls } from 'react-redux-form';
import { Loading } from './loadingComponent'
import MultiselectCheckboxes from 'react-multiselect-checkboxes';
import { Notifs, actions as notifActions } from "redux-notifications";
import { toast } from "react-toastify";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import Dashboard from  './adminDashbord'
import ViewArrayOutlinedIcon from '@mui/icons-material/ViewArrayOutlined';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';

//import RenderLeader from './RenderLeader'

class creatClassroom extends Component {

    constructor(props) {
        super(props);
        this.state = {
            className: "",
            clasSize: "",
            teachersList: [],
            StudentsList: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTeacherSelect = this.handleTeacherSelect.bind(this);

    }

    handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "clasSize" ) {
          // Remove non-alphabetic characters using regex
          const lettersOnly = value <51;
          this.setState({ [name]: value, clasSizeError: !lettersOnly  });
        } else {
          this.setState({ [name]: value });
        }
      }
      
      handleDashbordCliked =()=>{
        this.setState({isAdminDashbordOpen:!this.state.isAdminDashbordOpen})
      }
    async handleSubmit(event) {
        const { className,clasSize,teachersList,StudentsList} = this.state;
        console.log(teachersList)
        const classRoom = { className,clasSize: parseInt(clasSize, 10),teachersList,StudentsList};
        console.log(classRoom)
      this.props.creatClassroom(classRoom);
      
    }
     handleTeacherSelect = (e) => {
        const teachersList = e.map((option) => option.value);
        console.log(teachersList);
        this.setState({ teachersList });

    }
   
    
    render() {
        if (this.props.classRoom.isLoading) {
            

            return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>add class room </BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (this.props.classRoom.errMess) {
            return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>add class room </BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div className="row">
                        <h4>{this.props.classRoom.errMess}</h4>
                    </div>
                </div>
            )
        }
        else if (this.props.classRoom.classRoomADD){
            this.props.refreshState()
            
            toast.success("New class room has been added");
            
                
        }
        else{
            const options = this.props.teachers.map((teacher) => ({
                label: teacher.firstName,
                value:teacher._id,
            }));
        
        return(
        <div className=" bg-f5f5f5">
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
                    <MenuItem icon={<CalendarViewDayIcon />}onClick={this.handleDashbordCliked} ><Button style={{backgroundColor: "rgb(249, 249, 249, 0.7)",color: "#5888b9", border: "none"} }>Admin Dashbord</Button></MenuItem>
                    <MenuItem icon={<RateReviewOutlinedIcon />}> <Button  style={{backgroundColor: "rgb(249, 249, 249, 0.7)",color: "#5888b9", border: "none"} } to='/signupCashier'>feed Back</Button></MenuItem>
                    <MenuItem icon={<ViewArrayOutlinedIcon />}><Link outline className="btn btn-border" style={{color: "#5888b9"}} to='/teacherDashbord'><span  className="fa fa-sign-un fa-lg "></span> TEACHER DASHBORD </Link></MenuItem>
                    <MenuItem icon={<ViewArrayOutlinedIcon />}><Link outline className="btn btn-border" style={{color: "#5888b9"}} to='/cashierDashbord'><span  className="fa fa-sign-un fa-lg "></span> CASHIER DASHBORD</Link></MenuItem>
                    <MenuItem icon={<KitchenOutlinedIcon />}><Link outline className="btn btn-border" style={{color: "#5888b9"}} to='/creatClassRoom'><span  className="fa fa-sign-un fa-lg "></span> ADD CLASS ROOM</Link></MenuItem>
                    <MenuItem icon={<GroupAddOutlinedIcon />}><Link outline className="btn btn-border" style={{color: "#5888b9"}} to='/signupTeacher'><span  className="fa fa-sign-un fa-lg "></span> ADD TEACHER</Link></MenuItem>
                    <MenuItem icon={<GroupAddOutlinedIcon />}> <Link outline className="btn btn-border"  style={{color: "#5888b9"}} to='/signupCashier'><span  className="fa fa-sign-un fa-lg "></span> ADD CASHIER</Link></MenuItem>
                  </Menu>
                </Sidebar>
                <main>
                
                <div style={{ flexGrow: 1 }}>
            
            <div className="row row-content">
                <div className={styles.signup_container}>
                <div className={styles.signup_form_container}>
            
                    <div className={styles.right}>
                     
                        <LocalForm className={styles.form_container} onSubmit={(values) => this.handleSubmit(values)}>
                            <h1 style={{color:'#148010'}}>Create Class Room</h1>
                            <Control.text
                                type = "text"
                                name="className"
                                id = "className"
                                placeholder="class Name"
                                model=".className"
                                onChange={this.handleChange}
                                required
                                className={styles.input}
                            />
                           <Control.text
                            type="number"
                            name="clasSize"
                            id="clasSize"
                            className={styles.input}
                            placeholder="number of student in the class room 
                            class size = 30"
                            model=".clasSize"
                            onChange={this.handleChange}
                            required
                            
                            step={1}
                            />
                            {this.state.clasSizeError && <div className={styles.error}>number of student in the class room must be less than 51</div>}
                            <label>
                             <MultiselectCheckboxes
                                //value={this.state.teachersList}
                                options={options}
                                placeholder="Teachers"
                                onChange={(value) =>this.handleTeacherSelect(value)}
                                
                            /> 

                          
                          </label>
                            <button type="submit" className={styles.green_btn}>
                                Sing Up
                            </button>
                        </LocalForm>
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
}

export default creatClassroom;    
