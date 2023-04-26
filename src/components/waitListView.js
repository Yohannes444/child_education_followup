import React, { Component, useState } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, CardHeader, Button, Row, Col ,Breadcrumb, BreadcrumbItem, Modal, ModalBody, ModalHeader} from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/beasURL';
import {FadeTransform, Fade, Stagger } from "react-animation-components"
import {Loading} from "./loadingComponent"
import { Document, Page, pdfjs } from 'react-pdf'; // import react-pdf for PDF viewer
import { Viewer } from '@react-pdf-viewer/core'; // import @react-pdf-viewer/core and @react-pdf-viewer/default for PPT viewer
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
const green = '#3bb19b';
const yellow ='#f1d21c';
const black = '#000000';

const ParentView= (props)=>{
     const [approve,setApprove]=useState()
     const [selectedFile, setSelectedFile] = useState(null);
     const [selectedFileType, setSelectedFileType] = useState(null);
     const [isModalOpen, setIsModalOpen] = useState(false);
    var approved
    const handleApproveClick = async (validator,id) => {
        if(validator){
            setApprove(true)
            const data = {approve: true, id};
            console.log(data)
            props.wightListsToggler(data)
          }else{
            setApprove(false)
            const data = {approve: false, id};
            console.log(data)
            props.wightListsToggler(data)
          }
      }
      
    
      const handleFileClick = (fileSrc, fileType) => {
        console.log(fileSrc, fileType)
        setSelectedFile(fileSrc);
        setSelectedFileType(fileType);
        setIsModalOpen(true);
      }

      const renderFileViewer = () => {
        switch (selectedFileType) {
            case 'jpg':
            case 'jpeg':
            case 'png':
            case 'gif':
            case 'image':
            return <img src={selectedFile} alt="Selected File" style={{ width: '100%' }} />;
          case 'pdf':
            pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
            return (
              <Document file={selectedFile}>
                <Page pageNumber={1} />
              </Document>
            );
          case 'ppt':
            const plugins = [defaultLayoutPlugin];
            return (
              <Viewer fileUrl={selectedFile} plugins={plugins} />
            );
          default:
            return null;
        }
      }
      if(props.wightLists.isLoading){
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
    if(props.wightLists.errMess ){
        return (
            <div className="container">
                <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>add </BreadcrumbItem>
                </Breadcrumb>
            </div>
                <div className="row">
                    <h4>{this.props.wightLists.errMess}</h4>
                </div>
            </div>
        )
    }
    else{
        return(
            <div>
                <div >
                   
                    <div >
                    
                        <h3>validate student regstration</h3>
                        <hr />
                    </div>
                    
                    <FadeTransform in 
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(-50%)'
                        }}>

                        <Row>
                            {props.wightLists.wightLists.map((wightlist) => (
                                <Col key={wightlist._id} sm="4">
                                    <Card>
                                        <CardHeader>{`${wightlist.firstName} ${wightlist.lastName}`}</CardHeader>
                                        <CardBody>
                                            <CardText style={{ backgroundColor: yellow }}  >transcript</CardText>
                                            <div onClick={() => handleFileClick(baseUrl + wightlist.transcript, wightlist.transcript.substring(wightlist.transcript.lastIndexOf('.') + 1))}>
                                                {wightlist.transcript.substring(wightlist.transcript.lastIndexOf('.') + 1) === 'pdf' ? (
                                                <img src="assets/images/Icon_pdf_file.svg.png" alt="PDF Icon" style={{ width: '100%' }} />
                                                ) : (
                                                <img src={baseUrl + wightlist.transcript} alt="Transcript" style={{ width: '100%' }} />
                                                )}
                                            </div>
                                            <CardText style={{ backgroundColor: yellow }}>receipt</CardText>
                                            <img src={baseUrl + wightlist.receipt} alt="Receipt" onClick={() => handleFileClick(baseUrl + wightlist.receipt, 'image')} style={{ width: '100%' }} />
                                        </CardBody>
                                        <div className="d-flex justify-content-end p-3">
                                            <Button color="success" className="mx-3" onClick={() =>{ 
                                                approved=true
                                                 handleApproveClick(approved, wightlist._id)
                                                }}>
                                                Approve
                                            </Button>
                                            <Button color="danger" onClick={() =>{
                                                approved=false  
                                                 handleApproveClick(approved, wightlist._id)
                                                }}>
                                                Reject
                                            </Button>
                                        </div>
                                    </Card>
                                </Col>
                            ))}
                            
                        </Row>

                        <Modal isOpen={isModalOpen} toggle={() => setIsModalOpen(false)}>
                            <ModalHeader toggle={() => setIsModalOpen(false)}>
                                File Viewer
                            </ModalHeader>
                            <ModalBody>
                                {renderFileViewer()}
                            </ModalBody>
                        </Modal>
                    </FadeTransform>
                </div>
                <p>this is from the paretn component</p>
            </div>
        )}
    }
    

  
  export default ParentView;
  