import React, { Component, useState } from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter,Button, Card, CardImg, CardImgOverlay, CardText, CardBody,CardSubtitle,
    CardTitle, CardHeader, Butto, Row ,Breadcrumb, BreadcrumbItem, Col, ButtonGroup} from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/beasURL';
import {Loading} from "./loadingComponent"
import { motion } from 'framer-motion';
import { useSpring, animated } from 'react-spring';
import MaterialTable from 'material-table';
import { AttachFile, Payment } from '@material-ui/icons';
import './ClassRoomView.css';
import { toast } from "react-toastify";


const ParentView= (props)=>{

    const columns = [
        {title:'subject',field:'subject'},
        {title:'full Name',field:'fullName'},
        { title: 'quiz', field: 'quiz' },
        { title: 'midExam', field: 'midExam' },
        { title: 'assessment', field: 'assessment' },
        { title: 'finalExam', field: 'finalExam' },

      ];
      const data = props.ClassRoomsGrade?.ClassRoomsGrade.map((student) => ({
        subject:student.subject,
        fullName:[student.studentId.firstName,"  ",student.studentId.lastName],
        quiz: student.quiz,
        midExam: student.midExam,
        assessment: student.assessment,
        finalExam: student.finalExam,
      
      }));
      console.log(props.ClassRoomsGrade)


      if(props.ClassRoomsGrade.loadClassRoomGrade === true){
        console.log(props.ClassRoomsGrade)

      }
 
  
      if(props.ClassRoomsGrade.isLoading){
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
        )
    }
    if(props.ClassRoomsGrade.errMess ){
        return (
            <div className="container">
                <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>classRoomGade </BreadcrumbItem>
                </Breadcrumb>
            </div>
                <div className="row">
                    <h4>{props.ClassRoomsGrade.errMess}</h4>
                </div>
            </div>
        )
    }
    else{
        return(
            <div>
                  <Breadcrumb>
                    <BreadcrumbItem><Link to='/home'>home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>classRoomGade</BreadcrumbItem>
                </Breadcrumb>
            <h2>Student Details this is from child view components</h2>
            <div>
        <Row>
            <Col>
                     
            {props.ClassRoomsGrade.isLoading ?
                            (
                            
                                <div className="container">
                                    <div className="row">
                                    <Breadcrumb>
                                        <BreadcrumbItem><Link to='/home'>home</Link></BreadcrumbItem>
                                        <BreadcrumbItem active>classRoomGade</BreadcrumbItem>
                                    </Breadcrumb>
                                </div>
                                    <div className="row">
                                        <Loading />
                                    </div>
                                </div>
                            )
                            : (console.log)
                        }
                        {props.ClassRoomsGrade.errMess ?
                            (
                                <div className="container">
                                    <div className="row">
                                    <Breadcrumb>
                                        <BreadcrumbItem><Link to='/home'>home</Link></BreadcrumbItem>
                                        <BreadcrumbItem active>classRoomGade</BreadcrumbItem>
                                    </Breadcrumb>
                                </div>
                                    <div className="row">
                                        <h4>{this.props.ClassRoomsGrade.errMess}</h4>
                                    </div>
                                </div>
                            )
                            : (console.log)
                        }
                        <div style={{ maxWidth: '70rem' ,margin:'30px'}}>
                        <MaterialTable title="Students Grade" columns={columns} data={data} />;                            
                        </div>                      
            
            
            </Col>

          
        </Row>
        
        
        </div>
            </div>
        )}
    }
    

  
  export default ParentView;
  