import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import styles from "./styles.module.css";
import {  Control,LocalForm } from 'react-redux-form';
import { Loading } from './loadingComponent'
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
        
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      }
    

    async handleSubmit(event) {
        const { className,clasSize,teachersList,StudentsList} = this.state;

        const classRoom = { className,clasSize: parseInt(clasSize, 10),teachersList,StudentsList};
        console.log(classRoom)
      this.props.creatClassroom(classRoom);
      
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
            var alertInterval = setInterval(function() {
                alert("New class room has been added");
              }, 1000); // display alert every second
              setTimeout(function() {
                clearInterval(alertInterval); // stop displaying alerts
              }, 1000); 
            
            return(
                <div className="container">
                <div className="row">
                    <h4> new clas room has been add</h4>
                </div>
                
            </div>
            )
                
        }
        else{
       
        return(
        <div className="container bg-f5f5f5">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>create class room</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>                
            </div>
            
            <div className="row row-content">
                <div className={styles.signup_container}>
                <div className={styles.signup_form_container}>
            
                    <div className={styles.right}>
                     
                        <LocalForm className={styles.form_container} onSubmit={(values) => this.handleSubmit(values)}>
                            <h1 style={{color:'#f1d21c'}}>Create Account</h1>
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
                            placeholder="class size = 30"
                            model=".clasSize"
                            onChange={this.handleChange}
                            required
                            className={styles.input}
                            step={1}
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

export default creatClassroom;    
