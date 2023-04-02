import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseURL } from "../shared/beasURL";
import {Loading} from "./loadingComponent"
import { useState } from "react";
import styles from "./styles.module.css";

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
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
	

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    }
    

    async handleSubmit(event) {
        event.preventDefault();
        const { firstName, lastName, email, password } = this.state;
        // You can now use the form data to make API requests or update the state of the component
        console.log(firstName, lastName, email, password);
        // Reset the form inputs
        this.setState({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        });
    }

    

    render() {
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
                        <form className={styles.form_container} onSubmit={this.handleSubmit}>
                            <h1 style={{color:'#f1d21c'}}>Create Account</h1>
                            <input
                                type = "text"
                                placeholder="First Name"
                                name="firstName"
                                onChange={this.handleChange}
                                value='yared'
                                required
                                className={styles.input}
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                name="lastName"
                                onChange={this.handleChange}
                                value='Mekonen'
                                required
                                className={styles.input}
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                onChange={this.handleChange}
                                value="loremEpsom@gmail.com"
                                required
                                className={styles.input}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={this.handleChange}
                                value="......"
                                required
                                className={styles.input}
                            />
                             <div >this is sopust to be an error</div>
                            <button type="submit" className={styles.green_btn}>
                                Sing Up
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
        };
}

export default Signup;    
