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
    const [file, setFile] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => setIsOpen(!isOpen);
    const columns = [
        {title:'ቀን',field:'date'},
        {title:'ሙሉ ስም',field:'fullName'},
        { title: 'መገኘት', field: 'present' },

      ];
      const handleSubmit = () => {
        // Handle submission logic here
        const studentId=props.student._id
        const receipt=file
        const date= new Date()
        const info={studentId,receipt,date}
        props.postMonthlyFee(info)
        toggleModal();
      };
      
      const data = props.Attendances?.Attendances.map((Attendance) => {
        return {
          date:new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(Attendance.date))),
          fullName: [Attendance.present.studentId.firstName, ' ', Attendance.present.studentId.lastName],
          present: Attendance.present.present
        };
      })
      const handleFileChange = (event) => {
        setFile(event.target.files[0]);
      };
    const handleAttendaceClicked = ()=>{
        props.fetchAttendace(props.student._id)
    }
    const handleMatrialClicked = (student)=>{
        props.fetchMaterial(student._id)
    }
    const handleAssignmentClicked =(student)=>{
        props.fetchAssignment(student._id)
    }
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
        <Col sm={4}>
            <animated.div>
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
                    <CardSubtitle>Grade:{ props.student.section}</CardSubtitle>
                    </CardBody>
                </Card>
                </animated.div>
            </Col>
            <Col sm={8}>
            <div className="d-flex justify-content-end mb-2">
            <Link
                outline
                color="success"
                className="btn btn-success mr-2"
                style={{ backgroundColor: 'rgb(65, 141, 65)' }}
                to="/childInfo"
                >
                ውጤት
            </Link>
            <Link
                outline
                color="success"
                className="btn btn-success mr-2"
                style={{ backgroundColor: 'rgb(255, 255, 255)' ,color:'rgb(0,0,0)' }}
                to="/childInfor/attendance"
                >
                መገኘት
            </Link>

            <Link
                outline
                color="success"
                className="btn btn-success mr-2"
                onClick={() => handleMatrialClicked(props.student)}
                style={{ backgroundColor: 'rgb(65, 141, 65)' }}
                to="/childInfor/materials"
                >
                የትምህርት ግብአቶች
            </Link>

            <Link
                outline
                color="success"
                className="btn btn-success mr-2"
                onClick={() => handleAssignmentClicked(props.student)}
                style={{ backgroundColor: 'rgb(65, 141, 65)' }}
                to="/childInfor/assignemt"
                >
                የቤት ስራወች
            </Link>
            
              <Button color="primary" style={{ backgroundColor: 'rgb(65, 141, 65)' }} onClick={toggleModal}>የትምህርት ቤት ክፍያ</Button>

            </div>
          
                     
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

            <Modal isOpen={isOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>የወር ክፍያ</ModalHeader>
                <ModalBody>
                <label>ደረሰኝ</label>
                <br />
                <Button startIcon={<AttachFile />} component="label">
                    ደረሰኙን ይምረጡ
                    <input name="file" type="file" style={{ position: 'absolute', left: '200px' }} onChange={handleFileChange} />
                </Button>
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={handleSubmit}>ለመላክ</Button>
                <Button color="secondary" onClick={toggleModal}>ለመሰረዝ</Button>
                </ModalFooter>
            </Modal>
          
        </Row>
        
        
        </div>
            </div>
        )}
    }
    

  
  export default AttendaceView;
  