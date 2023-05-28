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


const AllMonthlyFee= (props)=>{
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedFileType, setSelectedFileType] = useState(null);
    const handleFileClick = (fileSrc, fileType) => {
         setSelectedFile(fileSrc);
         setSelectedFileType(fileType);
         setIsModalOpen(true);
       }
    const columns = [
        {title:'Date',field:'date'},
        {title:'student Name',field:'fullName'},
        {title:'receipt',field:'receipt'},
        {
            title: 'Approved',
            field: 'present',
            render: (rowData) => (
              <span style={{ color: rowData.present ? 'green' : 'red' }}>
                {rowData.present.toString()}
              </span>
            ),
          },

      ];
      
      const data = props.allMonthlyFee?.allMonthlyFee.map((monthlyFee) => {

          return {
            date: new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(monthlyFee.date))),
            fullName: `${monthlyFee.studentId.firstName} ${monthlyFee.studentId.lastName}`,
            receipt: (
                <img src={baseUrl +monthlyFee.receipt} alt="Receipt" onClick={() => handleFileClick(baseUrl + monthlyFee.receipt, 'image')} style={{ width: '20%' }} />
              ),
            present: monthlyFee.approved
          }
        });
        const renderFileViewer = () => {
            switch (selectedFileType) {
                case 'jpg':
                case 'jpeg':
                case 'png':
                case 'gif':
                case 'image':
                    return <img src={selectedFile} alt="Selected File" style={{ maxWidth: '100%' }} />;
              
              default:
                return null;
            }
          }
      
      if(props.allMonthlyFee.isLoading){
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
    if(props.allMonthlyFee.errMess ){
        return (
            <div className="container">
                <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>classRoomGade </BreadcrumbItem>
                </Breadcrumb>
            </div>
                <div className="row">
                    <h4>{props.allMonthlyFee.errMess}</h4>
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
                     
            {props.allMonthlyFee.isLoading ?
                            (
                            
                                <div className="container">
                               
                                        <Loading />
                                   
                                </div>
                            )
                            : (console.log)
                        }
                        {props.allMonthlyFee.errMess ?
                            (
                                <div className="container">
                                    <h4>{this.props.allMonthlyFee.errMess}</h4>
                                </div>
                            )
                            : (console.log)
                        }
                        <div style={{ maxWidth: '70rem' ,margin:'30px'}}>
                        <MaterialTable title="Attendance" columns={columns} data={data} />;                            
                        </div>                      
            
            
            </Col>

            <Modal isOpen={isModalOpen} toggle={() => setIsModalOpen(false)}>
                <ModalHeader toggle={() => setIsModalOpen(false)}>File Viewer</ModalHeader>
                <ModalBody>{renderFileViewer()}</ModalBody>
            </Modal>
        </Row>
        
        
        </div>
            </div>
        )}
    }
    

  
  export default AllMonthlyFee;
  