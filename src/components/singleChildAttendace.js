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


const AttendaceView= (props)=>{

    const columns = [
        {title:'ቀን',field:'date'},
        {title:'ሙሉ ስም',field:'fullName'},
        { title: 'መገኘት', field: 'present' },

      ];
      
      const data = props.Attendances?.Attendances.map((Attendance) => {
        return {
          date:new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(Attendance.date))),
          fullName: [Attendance.present.studentId.firstName, ' ', Attendance.present.studentId.lastName],
          present: Attendance.present.present
        };
      })
  
      if(props.Attendances.isLoading){
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
    if(props.Attendances.errMess ){
        return (
            <div className="container">
                <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>classRoomGade </BreadcrumbItem>
                </Breadcrumb>
            </div>
                <div className="row">
                    <h4>{props.Attendances.errMess}</h4>
                </div>
            </div>
        )
    }
    else{
        return(
            <div>
                  <Breadcrumb>
                    <BreadcrumbItem><Link to='/home'>ዋን</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to='/childInfo'>የልጅ ጅጽ</Link></BreadcrumbItem>
                    <BreadcrumbItem active>የተማሪ መገኘት</BreadcrumbItem>
                </Breadcrumb>
            <h2>Student Details this is from child view components</h2>
            <div>
        <Row>
            <Col>
                     
            {props.Attendances.isLoading ?
                            (
                            
                                <div className="container">
                               
                                        <Loading />
                                   
                                </div>
                            )
                            : (console.log)
                        }
                        {props.Attendances.errMess ?
                            (
                                <div className="container">
                                    <h4>{this.props.Attendances.errMess}</h4>
                                </div>
                            )
                            : (console.log)
                        }
                        <div style={{ maxWidth: '70rem' ,margin:'30px'}}>
                        <MaterialTable title="የተማሪው መገኘት" columns={columns} data={data} />;                            
                        </div>                      
            
            
            </Col>

          
        </Row>
        
        
        </div>
            </div>
        )}
    }
    

  
  export default AttendaceView;
  