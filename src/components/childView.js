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

    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => setIsOpen(!isOpen);
    const [file, setFile] = useState(null);

    const columns = [
        { title: 'quiz', field: 'quiz' },
        { title: 'midExam', field: 'midExam' },
        { title: 'assessment', field: 'assessment' },
        { title: 'finalExam', field: 'finalExam' },
      ];

    
      const data = props.childStore.childInfo.map((student) => ({
        quiz: student.quiz,
        midExam: student.midExam,
        assessment: student.assessment,
        finalExam: student.finalExam,
      }));
      const handleFileChange = (event) => {
        setFile(event.target.files[0]);
      };
    
      const handleSubmit = () => {
        // Handle submission logic here
        props.postMonthlyFee(file)
        console.log('File:', file);
        toggleModal();
      };
      
    const handleMatrialClicked = (student)=>{
        props.fetchMaterial(student._id)
        
    }
    const handleAssignmentClicked =(student)=>{
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
                {console.log(props.paymentState)}
            {props.paymentState.isLoading ?
                            (
                            
                                <div className="container">
                                    <div className="row">
                                    <Breadcrumb>
                                        <BreadcrumbItem><Link to='/home'>ዋና ገጽ</Link></BreadcrumbItem>
                                        <BreadcrumbItem active>የልጅ ጅጽ  </BreadcrumbItem>
                                    </Breadcrumb>
                                </div>
                                    <div className="row">
                                        <Loading />
                                    </div>
                                </div>
                            )
                            : (console.log)
                        }
                        {props.paymentState.errMess ?
                            (
                                <div className="container">
                                    <div className="row">
                                    <Breadcrumb>
                                        <BreadcrumbItem><Link to='/home'>ዋና ገጽ</Link></BreadcrumbItem>
                                        <BreadcrumbItem active>የልጅ ጅጽ  </BreadcrumbItem>
                                    </Breadcrumb>
                                </div>
                                    <div className="row">
                                        <h4>{this.props.paymentState.errMess}</h4>
                                    </div>
                                </div>
                            )
                            : (console.log)
                        }
                       {props.paymentState.success ?(
                            props.refreshState(),
                            toast.success(" ደረሰኙ ተልኳል የሂሳብ ባለሞያው አይተው  በ EMAIL መልዕክት ይድርስዎታል። እባክዎ EMAIL አካውንትዎን ይከታተሉ በቅርቡ ከትምህርት ቤቱ መልክት የደርስዎታል")
                            
                             )
                              : (console.log)
                        }
                


            <MaterialTable title="Student Progress" columns={columns} data={data} />;
            
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
    

  
  export default ParentView;
  