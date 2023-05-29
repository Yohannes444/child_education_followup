import React, { Component, useState } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardSubtitle,
    CardTitle, CardHeader, Button, Row, Col ,Breadcrumb, BreadcrumbItem, Modal, ModalBody, ModalHeader} from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/beasURL';
import {FadeTransform, Fade, Stagger } from "react-animation-components"
import {Loading} from "./loadingComponent"

const green = '#3bb19b';
const yellow ='#f1d21c';
const black = '#000000';



const imgStyle = {
    width: '100%',
    height: '100%',
    maxWidth: '100%',
  }
const ParentView= (props)=>{
   const handlSelectChild = (student) =>{
    const section=student.section.className
    const { _id, firstName, lastName, photo,createdAt } = student;
    const childData = { _id, firstName, lastName, photo,createdAt,section };
    props.handlChildView(childData);
   }

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
            <h2>Student Details</h2>
            <FadeTransform in 
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(-50%)'
                        }}>

            <Row>
                {props.childStore.childLists.length > 0?  (props.childStore.childLists.map((student) =>(
                <Col sm={6} md={4} key={student._id}>
                   <Card>
                        <CardImg top width="100%" style={imgStyle} src={baseUrl+student.photo} alt={`${student.firstName} ${student.lastName}`} />
                        <CardBody>
                        <CardTitle>{student.firstName} {student.lastName}</CardTitle>
                        <CardSubtitle>Grade: {student.section.className}</CardSubtitle>
                        <Link outline 
                        className="btn btn-border"
                        onClick={() =>{
                            return (handlSelectChild(student))
                        }} 
                        style={{backgroundColor: yellow}} to='/childInfo'>
                        <span  className="fa fa-sign-un fa-lg "></span> ለመመልከት
                    </Link>
                        </CardBody>
                    </Card>
                </Col>
                ))):(<h4 className="class-room-view">የተመዘገበ ልጅ የልዎትም</h4>)}
            </Row>
            </FadeTransform>
            </div>
        )}
    }
    

  
  export default ParentView;
  