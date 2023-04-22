import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import styles from "./styles.module.css";
import {  Control,LocalForm } from 'react-redux-form';
//import RenderLeader from './RenderLeader'

class childSignup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            transcript: "",
            receipt: "",
            selectedClassRoom:this.props.classRoom._id
        };
        this.handleSubmit = this.handleSubmit.bind(this);  
    }
     
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });

      }
    

    async handleSubmit(event) {
        const { firstName,lastName,transcript,receipt,selectedClassRoom} = this.state;

        const child = { firstName,lastName,transcript,receipt,selectedClassRoom};

        this.props.childSignup(child)
        this.setState({
            firstName: "",
            lastName: "",
            transcript: "",
            receipt:"",
            selectedClassRoom:""
        });
    }


    render() {
         
        
        return(
        <div className="container bg-f5f5f5">
           <div className="row">
                   
                </div>
            
            <div className="row row-content">
                <div className={styles.signup_container}>
                <div className={styles.signup_form_container}>
                   
                    <div className={styles.right}>
                     
                        <LocalForm enctype="multipart/form-data" className={styles.form_container} onSubmit={(values) => this.handleSubmit(values)}>
                            <h1 style={{color:'#f1d21c'}}>Create Account</h1>
                            <h3>{this.props.classRoom.className}</h3>
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
                            <Control.file
                                type="file"
                                name="transcript"
                                id="transcript"
                                placeholder="enter your child transcript"
                                model=".transcript"
                                onChange={(e) => {
                                    e.persist();
                                    this.setState({ transcript: e.target.files[0] });
                                  }}
                                required
                                accept=".pdf,.png,.jpg,.jpeg,.gif" 
                                className={styles.input}
                            />
                            <Control.file
                                name="receipt"
                                type="file"
                                placeholder="enter your receipt form paing the rigstration fee "
                                accept=".pdf,.png,.jpg,.jpeg,.gif" 
                                model=".receipt"
                                id="receipt"
                                onChange={(e) => {
                                    e.persist();
                                    this.setState({ receipt: e.target.files[0] });
                                  }}                                required
                                className={styles.input}
                            />
                            
                           
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


export default childSignup;    
