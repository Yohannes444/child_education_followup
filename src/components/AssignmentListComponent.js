import React, { Component, useState } from 'react';
import {Table, Card, CardImg, CardImgOverlay, CardText, CardBody,CardSubtitle,
    CardTitle, CardHeader, Button, Row ,Breadcrumb, BreadcrumbItem, Col,  ModalHeader, ModalBody, ModalFooter
    } from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/beasURL';
import {Loading} from "./loadingComponent"
import MaterialTable from 'material-table';
import { makeStyles } from '@material-ui/core/styles';
import Modal from 'react-modal';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { AttachFile, Payment } from '@material-ui/icons';
import styles from './materialTable.css';

const green = '#3bb19b';
const yellow ='#f1d21c';
const black = '#000000';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

const AssignmetnView= (props)=>{

    const [selectedFile, setSelectedFile] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);
  const classes = useStyles();

  const columns = [
    { title: 'Subject', field: 'subject' },
    { title: 'Description', field: 'description' },
    { title: 'quation', field: 'quation' },
    {
      title: 'quationFile',
      field: 'quationFile',
      render: (rowData) => (
        <button onClick={() => handleFileClick(rowData.quationFile)}>
          <i className="fa fa-file-o"></i>
        </button>
      ),
    },
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

  const handleFileClick = (file) => {
    setSelectedFile(file);
    setIsModalOpen(true);
  };

  const data = props.assignmentState.assignmentlList.map((material) => ({
    subject: material.subject,
    description: material.description,
    quation:material.quation,
    quationFile:material.quationFile
  }));
    
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
  
      if(props.assignmentState.isLoading){
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
    if(props.assignmentState.errMess ){
        return (
            <div className="container">
                <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>add </BreadcrumbItem>
                </Breadcrumb>
            </div>
                <div className="row">
                    <h4>{props.assignmentState.errMess}</h4>
                </div>
            </div>
        )
    }
    else{
        return(
            <div>
                  <Breadcrumb>
                    <BreadcrumbItem><Link to='/home'>ዋና ገጽ</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to='/childInfo'>የልጅ ጅጽ</Link></BreadcrumbItem>
                    <BreadcrumbItem active>የቤት ስራወች </BreadcrumbItem>
                    
                </Breadcrumb>
            <div>
        <Row>
            <Col sm={4}>
                <Card style={{ boxShadow: "0 4px 18px 0 rgba(0,0,0,0.8)" }}>
                <CardImg
                    width="100%"
                    src={baseUrl + props.student.photo}
                    alt={`${props.student.firstName} ${props.student.lastName}`} />
                    <CardBody>
                    <CardTitle>{props.student.firstName} {props.student.lastName}</CardTitle>

                    <CardSubtitle>Grade:{ props.student.section}</CardSubtitle>
                    </CardBody>
                </Card>
              
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
                onClick={() => handleAttendaceClicked(props.student)}
                style={{ backgroundColor: 'rgb(65, 141, 65)' }}
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
                style={{ backgroundColor: 'rgb(255, 255, 255)' ,color:'rgb(0,0,0)'}}
                to="/childInfor/assignemt"
                >
                የቤት ስራወች
            </Link>
            
              <Button color="primary" style={{ backgroundColor: 'rgb(65, 141, 65)' }} onClick={toggleModal}>የትምህርት ቤት ክፍያ</Button>

            </div>
           
          
            <MaterialTable style={{  zIndex: 0 }} title="የተማሪው መገኘት" columns={columns} data={data}  className={styles.custom_table} />
            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                className={classes.modal}
                ariaHideApp={false}
            >
                 <div className={classes.closeButton}>
                    <IconButton  style={{ backgroundColor: 'rgb(255, 0, 0)' }} onClick={() => setIsModalOpen(false)}>
                    <CloseIcon />
                    </IconButton>
                </div>
                {selectedFile && (
                <div className={classes.paper}>
                    {selectedFile.endsWith('.pdf') && (
                    <embed src={baseUrl+selectedFile} type="application/pdf" width="100%" height="500px" />
                    )}
                    {selectedFile.endsWith('.ppt') && (
                    <iframe src={baseUrl+selectedFile} width="100%" height="500px"></iframe>
                    )}
                    {selectedFile.endsWith('.jpg') || selectedFile.endsWith('.jpeg') || selectedFile.endsWith('.png') ? (
                    <img src={baseUrl+selectedFile} alt="file" style={{ maxWidth: '100%', maxHeight: '500px' }} />
                    ) : null}
                </div>
                )}
            </Modal>
            
            </Col>
            <Modal style={{  zIndex:10 }} isOpen={isOpen} toggle={toggleModal}>
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
    

  
  export default AssignmetnView;
  