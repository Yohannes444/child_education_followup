import React, { Component, useState } from 'react';
import { Table, Button,Breadcrumb, BreadcrumbItem, } from 'reactstrap';
import { Link } from 'react-router-dom';

const green = '#3bb19b';
const yellow ='#f1d21c';
const black = '#000000';

const ParentView= (props)=>{
     

    const handleToggleAccount = async (SelectedClassRoom) => {
        props.setSelectedClassRoom(SelectedClassRoom)
        props.setregstering(!props.regstering)
        props.setClassRoo(!props.classRoo)
      }
        return(
            <div>
                <div className="row">
                   
                    <div className="col-12">
                    
                        <h3>select class room to rigster</h3>
                        <hr />
                    </div>
                    <Table>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Enabled</th>
                        
                        </tr>
                        </thead>
                        <tbody>
                            {props.ClassRooms.ClassRooms.map((classRoom) => (
                                <tr key={classRoom._id}>
                                <td>{`${classRoom.className}`}</td>
                                <td>{classRoom.clasSize}</td>
                                <td>
                                    <Button  style={{backgroundColor: black}}
                                    onClick={() =>{
                                        handleToggleAccount(classRoom)}
                                    }
                                    >
                                    Rigster Child
                                    </Button>
                                </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
                <p>this is from the paretn component</p>
            </div>
        )
    }
    

  
  export default ParentView;
  