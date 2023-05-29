import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import styles from "./styles.module.css";
import {  Control,LocalForm } from 'react-redux-form';
import {Loading} from "./loadingComponent"
//import RenderLeader from './RenderLeader'
import { toast } from "react-toastify";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import Dashboard from  './adminDashbord'
import ViewArrayOutlinedIcon from '@mui/icons-material/ViewArrayOutlined';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';

class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            username:"",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);  
        this.handleChange = this.handleChange.bind(this)
    }
     
    handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "firstName" ) {
          // Remove non-alphabetic characters using regex
          const lettersOnly = /^[a-zA-Z]+$/.test(value);
          this.setState({ [name]: value, firstNameError: !lettersOnly  });
        }else if ( name === "lastName") {
            // Remove non-alphabetic characters using regex
            const lettersOnly = /^[a-zA-Z]+$/.test(value);
            this.setState({ [name]: value, lastNameError: !lettersOnly  });
          }else if (name === "username") {
            const startsWithLetter = /^[a-zA-Z]/.test(value);
            this.setState({ [name]: value, usernameError: !startsWithLetter });
          }else if (name === "email") {
            const startsWithLetter = /^[a-zA-Z]/.test(value);
            this.setState({ [name]: value, emailError: !startsWithLetter });
          }else if (name === "password") {
            const isPasswordValid = value.length >= 6;
            this.setState({ [name]: value, passwordError: !isPasswordValid });
          }  else {
          this.setState({ [name]: value });
        }
      }
    
      handleDashbordCliked =()=>{
      }
    async handleSubmit(event) {
        const { firstName,lastName,email,username, password} = this.state;

        const cashier = { firstName,lastName,email,username, password};
        this.props.cashierSignup(cashier)
      this.setState({
        firstName: "",
        lastName: "",
        email: "",
        username:"",
        password: "",
    });
    }


    render() {
        if (this.props.cashierSign.isLoading) {
            return(
                <div className="container">
                    <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>add cashier</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (this.props.cashierSign.errMess) {
            return(
                <div className="container">
                    <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>add cashier</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                    <div className="row">
                        <h4>{this.props.cashierADD.errMess}</h4>
                    </div>
                </div>
            )
        }
        else if (this.props.cashierSign.cashierADD){
            this.props.refreshState()
            toast.success("New cashier account has been add")
           
            
        }
        else{
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
                            <h1 style={{color:'#148010'}}>Create Account</h1>
                            <Control.text
                                type = "text"
                                name="firstName"
                                id = "firstName"
                                placeholder="First Name"
                                model=".firstName"
                                onChange={this.handleChange}
                                required
                                className={styles.input}
                            />
                            {this.state.firstNameError && <div className={styles.error}>firsNname must be only caracters</div>}
                           <Control.text
                                type="text"
                                name="lastName"
                                id="lastName"
                                placeholder="Last Name"
                                model=".lastName"
                                onChange={this.handleChange}
                                required
                                className={styles.input}
                            />
                            {this.state.lastNameError && <div className={styles.error}>lastName must be only caracters</div>}
                            <Control.text
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                model=".email"
                                onChange={this.handleChange}
                                required
                                className={styles.input}
                            />
                            {this.state.emailError && <div className={styles.error}>email must start with a letter</div>}
                            <Control.text
                                name="username"
                                type="text"
                                placeholder="username"
                                model=".username"
                                id="username"
                                onChange={this.handleChange}
                                required
                                className={styles.input}
                            />
                            {this.state.usernameError && <div className={styles.error}>Username must start with a letter</div>}
                            <Control.password
                                type="password"
                                name='password'
                                 id="password"
                                placeholder="Password"
                                model='.password'
                                onChange={this.handleChange}
                                required
                                className={styles.input}
                            /> 
                            {this.state.passwordError && <div className={styles.error}>Password must be at least 6 characters long</div>}
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

export default Signup;    
