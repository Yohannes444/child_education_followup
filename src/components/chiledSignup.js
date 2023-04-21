import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import styles from "./styles.module.css";
import {  Control,LocalForm } from 'react-redux-form';
import {Loading} from "./loadingComponent"
//import RenderLeader from './RenderLeader'

class childSignup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            transcript: "",
            receipt: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);  
    }
     
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      }
    

    async handleSubmit(event) {
        const { firstName,lastName,transcript,receipt} = this.state;

        const child = { firstName,lastName,transcript,receipt};
        this.props.childSignup(child)
      this.setState({
        firstName: "",
        lastName: "",
        transcript: "",
        receipt:""
    });
    }


    render() {
         if (this.props.childFlag.isLoading) {
            return(
                <div className="container">
                    <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>add </BreadcrumbItem>
                    </Breadcrumb>
                </div>
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (this.props.childFlag.errMess) {
            return(
                <div className="container">
                    <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>add </BreadcrumbItem>
                    </Breadcrumb>
                </div>
                    <div className="row">
                        <h4>{this.props.childFlag.errMess}</h4>
                    </div>
                </div>
            )
        }
        else if (this.props.childFlag.childADD){
            this.props.refreshState()
            var alertInterval = setInterval(function() {
                alert("New  account has been add");
              }, 1000); // display alert every second
              setTimeout(function() {
                clearInterval(alertInterval); // stop displaying alerts
              }, 1000); 
            return(
                <div className="container">
                    <div className="row">
                        <h4> account has been add</h4>
                    </div>
                </div>
            )
        }
        else{ 
        return(
        <div className="container bg-f5f5f5">
           <div className="row">
                   
                </div>
            
            <div className="row row-content">
                <div className={styles.signup_container}>
                <div className={styles.signup_form_container}>
                   
                    <div className={styles.right}>
                     
                        <LocalForm className={styles.form_container} onSubmit={(values) => this.handleSubmit(values)}>
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
                                onChange={E=>this.setState({transcript:[E.target.files[0]]})}
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
                                onChange={E=>this.setState({receipt:[E.target.files[0]]})}
                                required
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
}

export default childSignup;    
