import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import styles from "./styles.module.css";
import {  Control,LocalForm } from 'react-redux-form';
import { Loading } from './loadingComponent'
//import RenderLeader from './RenderLeader'
import { toast } from "react-toastify";
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
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      }
    

    async handleSubmit(event) {
        const { firstName,lastName,email,username, password} = this.state;

        const parent = { firstName,lastName,email,username, password};
      console.log(parent)
        
      this.props.parentSignup(parent);
        this.setState({
            firstName: "",
            lastName: "",
            email: "",
            username:"",
            password: "",
        });
    }

   
    
    render() {
        if (this.props.parentSign.isLoading) {
            return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>add parent account </BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (this.props.parentSign.errMess) {
            return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>add parent account </BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div className="row">
                        <h4>{this.props.parentSign.errMess}</h4>
                    </div>
                </div>
            )
        }
        else if (this.props.parentSign.parentADD){
            this.props.refreshState()
            toast.success("New parent account has been add  please confirm your email")
           
        }
        else{
        return(
        <div className="container bg-f5f5f5">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>signup</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>                
            </div>
            
            <div className="row row-content">
                <div className={styles.signup_container}>
                <div className={styles.signup_form_container}>
                    <div className={styles.left}>
                        <h1 style={{color:'#f1d21c'}}>Welcome</h1>
                        
                    </div>
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
                                placeholder="UserName"
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
