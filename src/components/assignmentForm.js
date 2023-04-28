import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import styles from "./styles.module.css";
import {  Control,LocalForm } from 'react-redux-form';
//import RenderLeader from './RenderLeader'

class uploadAssignment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            subject: "",
            description: "",
            quationFile: "",
            quation:"",
            teacher: this.props.teacher._id,
            classRoom:this.props.classRoom._id
        };
        this.handleSubmit = this.handleSubmit.bind(this);  
    }
    handlFormback= ()=>{
        this.props.back()
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });

      }
    

    async handleSubmit(event) {
        /* const { subject,description,quationFile,teacher,classRoom,quation} = this.state;

        const child = { subject,description,quationFile,teacher,classRoom,quation};

        this.props.uploadMaterial(child)
        this.setState({
            subject: "",
            description: "",
            quationFile: "",
            quation:"",
            teacher:"",
            classRoom:""
        }); */
    }


    render() {
         
        
        return(
        <div className="container bg-f5f5f5">
           <div className="row">
                   
                </div>
            
            <div className="row row-content">
                <div className={styles.signup_container}>
                <div className={styles.signup_form_container}>
                    <div>                
                        <Button onClick={()=>this.handlFormback()}>back to the class room</Button>
                    </div>

                    <div className={styles.right}>
                     
                        <LocalForm enctype="multipart/form-data" className={styles.form_container} onSubmit={(values) => this.handleSubmit(values)}>
                            <h1 style={{color:'#f1d21c'}}>Upload material</h1>
                            <h3>{this.props.classRoom.className}</h3>
                            <Control.text
                                type = "text"
                                name="subject"
                                id = "firstName"
                                placeholder="subject name"
                                model=".firstName"
                                onChange={this.handleChange}
                                required
                                className={styles.input}
                            />
                           <Control.textarea
                                name="description"
                                id="description"
                                placeholder="write description the material "
                                model=".description"
                                onChange={this.handleChange}
                                required
                                className={styles.input}
                            />
                            <Control.textarea 
                                name="quation"
                                id="quation"
                                placeholder="write quation the for as a home work "
                                model=".quation"
                                onChange={this.handleChange}
                                className={styles.input}
                            />
                            <Control.file
                                type="file"
                                name="quationFile"
                                id="transcript"
                                placeholder="material quationFile"
                                model=".transcript"
                                onChange={(e) => {
                                    e.persist();
                                    this.setState({ quationFile: e.target.files[0] });
                                  }}
                                accept=".pdf,.png,.jpg,.jpeg,.gif" 
                                className={styles.input}
                            /> 
                                                       
                            <button type="submit" className={styles.green_btn}>
                                Upload
                            </button>
                        </LocalForm>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )}
        };


export default uploadAssignment;    
