import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import styles from "./styles.module.css";
import {  Control,LocalForm } from 'react-redux-form';
//import RenderLeader from './RenderLeader'

class createMatereal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            subject: "",
            description: "",
            file: "",
            teacher: this.props.teacher._id,
            classRoom:this.props.classRoom._id
        };
        this.handleSubmit = this.handleSubmit.bind(this);  
    }
    handlFormback= ()=>{
        this.props.handlFormback()
    }

    handleChange = (e) => {
         const { name, value } = e.target;
         if (name === "description") {
          let wordCount = value.split(' ').length;
         this.setState({ [name]: value, descriptionError: wordCount>50 });
         } else {
          this.setState({ [name]: value });
         }
        }
        
 

    async handleSubmit(event) {
        const { subject,description,file,teacher,classRoom} = this.state;

        const child = { subject,description,file,teacher,classRoom};

        this.props.uploadMaterial(child)
        this.setState({
            subject: "",
            description: "",
            file: "",
            teacher:"",
            classRoom:""
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
                                id = "subject"
                                placeholder="subject name"
                                model=".subject"
                                onChange={this.handleChange}
                                required
                                className={styles.input}
                            />
                           <Control.textarea
                                name="description"
                                id="description"
                                placeholder="write description of the material 
                                less than 50 wordes"
                                model=".description"
                                onChange={this.handleChange}
                                required
                                className={styles.input}
                            />
                            {this.state.descriptionError && <div className={styles.error}>description shuld be less than 50 words</div>}
                            <Control.file
                                type="file"
                                name="file"
                                id="transcript"
                                placeholder="material file"
                                model=".transcript"
                                onChange={(e) => {
                                    e.persist();
                                    this.setState({ file: e.target.files[0] });
                                  }}
                                required
                                accept=".pdf,.png,.jpg,.jpeg,.gif,.pdf,.ppt" 
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


export default createMatereal;    
