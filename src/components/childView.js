import React, { Component, useState } from 'react';
import {Table, Card, CardImg, CardImgOverlay, CardText, CardBody,CardSubtitle,
    CardTitle, CardHeader, Button, Row, Col ,Breadcrumb, BreadcrumbItem, Modal, ModalBody, ModalHeader} from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/beasURL';
import {FadeTransform, Fade, Stagger } from "react-animation-components"
import {Loading} from "./loadingComponent"

const green = '#3bb19b';
const yellow ='#f1d21c';
const black = '#000000';

const ParentView= (props)=>{

    const hasData = props.childStore.childList && props.childStore.childList.length > 0;

      if(props.childStore.isLoading){
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
    if(props.childStore.errMess ){
        return (
            <div className="container">
                <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>add </BreadcrumbItem>
                </Breadcrumb>
            </div>
                <div className="row">
                    <h4>{props.childStore.errMess}</h4>
                </div>
            </div>
        )
    }
    else{
        return(
            <div>
                  <Breadcrumb>
                    <BreadcrumbItem><Link to='/home'>ዋና ገጽ</Link></BreadcrumbItem>
                    <BreadcrumbItem active>የልጅ ጅጽ </BreadcrumbItem>
                </Breadcrumb>
            <h2>Student Details this is from child view components</h2>
            <Row>
            <FadeTransform in 
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(-50%)'
                        }}>

            
                {console.log(props.student)}
                {props.student ?  (
                <Col sm={6} md={4} key={props.student._id}>
                   <Card>
                        <CardImg top width="100%" src={baseUrl+props.student.photo} alt={`${props.student.firstName} ${props.student.lastName}`} />
                        <CardBody>
                        <CardTitle>{props.student.firstName} {props.student.lastName}</CardTitle>
                        <CardSubtitle>SectionId: {props.student.section}</CardSubtitle>
                        </CardBody>
                    </Card>
                </Col>
                ):(<h4 className="class-room-view">የተመዘገበ ልጅ የልዎትም</h4>)}
            
            </FadeTransform>
            <Button>Materials</Button>
            <Button>ASSIGNMENT</Button>
            <Table bordered>
                <thead>
                    <tr>
                    <th>quiz</th>
                    <th>midExam</th>
                    <th>assessment</th>
                    <th>finalExam</th>
                    </tr>
                </thead>
                <tbody>
                    {hasData &&
                    props.childStore.childList.map((student) => (
                        <tr key={student._id}>
                        <td>{student.quiz}</td>
                        <td>{student.midExam}</td>
                        <td>{student.assessment}</td>
                        <td>{student.finalExam}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            </Row>
            </div>
        )}
    }
    

  
  export default ParentView;
  