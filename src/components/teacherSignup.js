import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import {Loading} from "./loadingComponent"
import styles from "./styles.module.css";
import {  Control,LocalForm } from 'react-redux-form';
import { toast } from "react-toastify";

//import RenderLeader from './RenderLeader'

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
        console.log(this.props.teacherSign.isLoading)
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
            toast.success("New teacher account has been add");
              
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
    )}
        };
}

export default Signup;    
