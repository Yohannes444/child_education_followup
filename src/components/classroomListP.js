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
                    
                        <h3>መማሪያ ክፍል ይምረጡ</h3>
                        <hr />
                    </div>
                    <Table>
                        <thead>
                        <tr>
                            <th>የመማሪያ ክፍል ስም</th>
                            <th>ክፍሉ ሚይዘው የተማሪ መጠን </th>
                            <th>ለመመዝገብ </th>
                        
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
                                    ይመዝግቡ
                                    </Button>
                                </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
    

  
  export default ParentView;
  