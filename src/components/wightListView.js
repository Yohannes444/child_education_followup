import React, { Component, useState } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, CardHeader, Button, Row, Col } from 'reactstrap';import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/beasURL';
import {FadeTransform, Fade, Stagger } from "react-animation-components"

const green = '#3bb19b';
const yellow ='#f1d21c';
const black = '#000000';

const ParentView= (props)=>{
     const [approve,setApprove]=useState()
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
                                            <CardText style={{ backgroundColor: yellow }}>transcript</CardText>
                                            <CardImg src={baseUrl + wightlist.transcript} alt="Transcript" />
                                            <CardText style={{ backgroundColor: yellow }}>receipt</CardText>
                                            <CardImg src={baseUrl + wightlist.receipt} alt="Receipt" />
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

                        
                    </FadeTransform>
                </div>
                <p>this is from the paretn component</p>
            </div>
        )
    }
    

  
  export default ParentView;
  