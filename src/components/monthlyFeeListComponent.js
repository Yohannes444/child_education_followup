import React, { Component, useState } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, CardHeader, Button, Row, Col ,Breadcrumb, BreadcrumbItem, Modal, ModalBody, ModalHeader} from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/beasURL';
import {FadeTransform, Fade, Stagger } from "react-animation-components"
import {Loading} from "./loadingComponent"
import { toast } from "react-toastify";
import MaterialTable from 'material-table';

const ParentView= (props)=>{
     const [approve,setApprove]=useState()
     const [selectedFile, setSelectedFile] = useState(null);
     const [selectedFileType, setSelectedFileType] = useState(null);
     const [isModalOpen, setIsModalOpen] = useState(false);
    var approved
    const handleApproveClick = async (validator,id) => {

        if(validator){
            setApprove(true)
            const data = {approved, id};
          
            props.MonthlyFeeListToggler(data)
          }else{
            setApprove(false)
            const data = {approve: false, id};
          
            props.MonthlyFeeListToggler(data)
          }
      }
      
    
      const handleFileClick = (fileSrc, fileType) => {
        setSelectedFile(fileSrc);
        setSelectedFileType(fileType);
        setIsModalOpen(true);
      }
      

      const columns = [
        { title: 'Full Name', field: 'fullName' },
        { title: 'Receipt', field: 'receipt' },
        {
          title: 'approve',
          field: 'approveButton',
          render: MonthlyFeeList =>
            <Button
                variant="contained"
                color="primary"
                onClick={() =>{
                    approved=true 
                    return handleApproveClick(approved, MonthlyFeeList.approveButton._id)
                }}
            >
                Approve
            </Button>
          
          
        },
        {
          title: 'reject',
          field: 'rejectButton',
          render: MonthlyFeeList =>
             <Button
                variant="contained"
                color="danger"
                onClick={() =>{
                    approved=false
                    return handleApproveClick(approved, MonthlyFeeList.rejectButton._id)
                }}
              >
                Reject
              </Button>}
            
      ];
      const data = props.MonthlyFeeList.MonthlyFeeList.map((MonthlyFeeList) => ({
        fullName: `${MonthlyFeeList.studentId.firstName} ${MonthlyFeeList.studentId.lastName}`,
        receipt: (
          <img src={baseUrl + MonthlyFeeList.receipt} alt="Receipt" onClick={() => handleFileClick(baseUrl + MonthlyFeeList.receipt, 'image')} style={{ width: '20%' }} />
        ),
        approveButton: MonthlyFeeList,
        rejectButton: MonthlyFeeList
      }));
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
  
        return(
            <div >                   
                <div >
                
                    <h3>validate student regstration</h3>
                    <hr />
                </div>
                
                <FadeTransform in transformProps={{exitTransform: 'scale(0.5) translateY(-50%)' }}>
                    <Row>
                        <Col xs={12}>
                        <MaterialTable
                            title="Monthly Fee List"
                            columns={columns}
                            data={data}
                        />
                        </Col>
                    </Row>

                    <Modal isOpen={isModalOpen} toggle={() => setIsModalOpen(false)}>
                        <ModalHeader toggle={() => setIsModalOpen(false)}>File Viewer</ModalHeader>
                        <ModalBody>{renderFileViewer()}</ModalBody>
                    </Modal>
                </FadeTransform>

        
        </div>
        )
    }
    

  
  export default ParentView;
  