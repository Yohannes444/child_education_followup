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


const ClassRoomAttendaceView= (props)=>{

    const columns = [
        {title:'Date',field:'date'},
        {title:'Full Name',field:'fullName'},
        {
            title: 'present',
            field: 'present',
            render: (rowData) => (
              <span style={{ color: rowData.present ? 'green' : 'red' }}>
                {rowData.present.toString()}
              </span>
            ),
          },

      ];
      
      const data = props.Attendances?.Attendanc.map((attendance) => {
        return attendance.present.map((record) => {
          return {
            date: new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(attendance.date))),
            fullName: `${record.studentId.firstName} ${record.studentId.lastName}`,
            present: record.present
          };
        });
      }).flat();
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
                    <BreadcrumbItem><Link to='/home'>home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>attendace</BreadcrumbItem>
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
                        <MaterialTable title="Attendance" columns={columns} data={data} />;                            
                        </div>                      
            
            
            </Col>

          
        </Row>
        
        
        </div>
            </div>
        )}
    }
    

  
  export default ClassRoomAttendaceView;
  