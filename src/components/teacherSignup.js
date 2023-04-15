import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseURL } from "../shared/beasURL";
import {Loading} from "./loadingComponent"
import { useState } from "react";
import styles from "./styles.module.css";
import { Input } from "reactstrap"
import {  Control,LocalForm } from 'react-redux-form';

//import RenderLeader from './RenderLeader'

class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      }
    
  

    async handleSubmit(event) {
        const { firstName,lastName,email,username, password} = this.state;

        const teacher = { firstName,lastName,email,username, password};
      this.props.teacherSignup(teacher)
      this.setState({
        firstName: "",
        lastName: "",
        email: "",
        username:"",
        password: "",
    });
    }

    
    
    render() {
        if (this.props.teacherSign.isLoading) {
            return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>add teacher </BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (this.props.teacherSign.errMess) {
            return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>add teacher </BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div className="row">
                        <h4>{this.props.teacherSign.errMess}</h4>
                    </div>
                </div>
            )
        }
        else if (this.props.teacherSign.teacherADD){
            this.props.refreshState()
            var alertInterval = setInterval(function() {
                alert("New teacher account has been add");
              }, 1000); 
              // display alert every second
              setTimeout(function() {
                clearInterval(alertInterval); // stop displaying alerts
              }, 1000); 
            return(
                <div className="container">
                    
                <div className="row">
                    <h4> teacher account has been add</h4>
                </div>
            </div>
            )
        }
        else{
        return(
        <div className="container bg-f5f5f5">
            <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>add teacher </BreadcrumbItem>
                    </Breadcrumb>
                </div>
            
            <div className="row row-content">
                <div className={styles.signup_container}>
                <div className={styles.signup_form_container}>
                   
                    <div className={styles.right}>
                     
                        <LocalForm className={styles.form_container} onSubmit={(values) => this.handleSubmit(values)}>
                            <h1 style={{color:'#f1d21c'}}>Create Account</h1>
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
                             <div >this is sopust to be an error</div>
                            <button type="submit" className={styles.green_btn}>
                                Sing Up
                            </button>
                        </LocalForm>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )}
        };
}

export default Signup;    
