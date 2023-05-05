import React, { Component, useState } from 'react';
import {Table, Card, CardImg, CardImgOverlay, CardText, CardBody,CardSubtitle,
    CardTitle, CardHeader, Button, Row ,Breadcrumb, BreadcrumbItem, Col, ButtonGroup} from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/beasURL';
import {Loading} from "./loadingComponent"
import { motion } from 'framer-motion';
import { useSpring, animated } from 'react-spring';
import MaterialTable from 'material-table';
import { makeStyles } from '@material-ui/core/styles';
import './ClassRoomView.css';
const green = '#3bb19b';
const yellow ='#f1d21c';
const black = '#000000';

const ParentView= (props)=>{

    const columns = [
        { title: 'quiz', field: 'quiz' },
        { title: 'midExam', field: 'midExam' },
        { title: 'assessment', field: 'assessment' },
        { title: 'finalExam', field: 'finalExam' },
      ];

      {console.log(props.childStore.childInfo)}
      
      const data = props.childStore.childInfo.map((student) => ({
        quiz: student.quiz,
        midExam: student.midExam,
        assessment: student.assessment,
        finalExam: student.finalExam,
      }));
      
    const handleMatrialClicked = (student)=>{
        props.fetchMaterial(student._id)
        
    }
    const handlAssignmentClicked =(student)=>{
        props.fetchAssignment(student._id)
    }
    const fadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 2000 },
      });
  
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
            <div>
        <Row>
            <Col sm={4}>
            <animated.div style={fadeIn}>
                <Card style={{ boxShadow: "0 4px 18px 0 rgba(0,0,0,0.8)" }}>
                <motion.img
                    top
                    width="100%"
                    src={baseUrl + props.student.photo}
                    alt={`${props.student.firstName} ${props.student.lastName}`}
                    initial={{ scale: 0.5, y: 50 }}
                    animate={{ scale: 1, y: 0 }}
                    transition={{ duration: 1, type: 'spring', stiffness: 100 }}
                    />
                    <CardBody>
                    <CardTitle>{props.student.firstName} {props.student.lastName}</CardTitle>
                    <CardSubtitle>SectionId: {props.student.section}</CardSubtitle>
                    </CardBody>
                </Card>
                </animated.div>
            </Col>
            <Col sm={8}>
            <div className="d-flex justify-content-end mb-2">
                <Link outline 
                     color="success" className="mr-2"
                    onClick={()=>handleMatrialClicked(props.student)}
                    style={{backgroundColor: yellow}} to='/childInfor/materials'>
                    <span  className="btn  "></span> የትምህርት ግብአቶች
                </Link>
                <Link outline 
                     color="success" className="mr-2"
                    onClick={()=>handlAssignmentClicked(props.student)}
                    style={{backgroundColor: yellow}} to='/childInfor/assignemt'>
                    <span  className="btn  "></span> የቤት ስራወች
                </Link>
        
            </div>
          
              {/*   <Table border>
                    <thead>
                    <tr>
                        <th>quiz</th>
                        <th>midExam</th>
                        <th>assessment</th>
                        <th>finalExam</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.childStore.childList.map((student) => (
                        <tr key={student._id}>
                        <td>{student.quiz}</td>
                        <td>{student.midExam}</td>
                        <td>{student.assessment}</td>
                        <td>{student.finalExam}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>  */}

                


<MaterialTable title="Student Progress" columns={columns} data={data} />;
            
            </Col>
        </Row>
        
        
        </div>
            </div>
        )}
    }
    

  
  export default ParentView;
  