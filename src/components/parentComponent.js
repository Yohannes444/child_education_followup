import React, { Component, useState } from 'react';
import { Table, Button,Breadcrumb, BreadcrumbItem, } from 'reactstrap';
import { Link } from 'react-router-dom';
import ClassRoomList from './classroomListP';
import ChildSignup from './chiledSignup';


const green = '#3bb19b';
const yellow ='#f1d21c';
const black = '#000000';

const ParentView= (props)=>{
    const [classRoo, setClassRoo] = useState(false);
   const [selectedClassRoom,setSelectedClassRoom]=useState()
   const [regstering, setregstering] = useState(false);

   
    const handleToggleAccount = () => {
        setClassRoo(!classRoo);
        
      }
        return(
            <div>
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem  ><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>paretnView</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>userView</h3>
                        <hr />
                    </div>
                    <Button
                        style={{ backgroundColor: yellow }}
                        onClick={() => handleToggleAccount()}>RIGSTER CHILD
                    </Button>
                    </div>
                    <p>this is from the paretn component</p>
                    {classRoo ? (
                            <ClassRoomList setregstering={setregstering}
                                regstering={regstering}
                                classRoo={classRoo}  
                                setClassRoo={setClassRoo} 
                                ClassRooms={props.ClassRooms} 
                                setSelectedClassRoom={setSelectedClassRoom} 
                                />
                        ) 
                        : 
                        (console.log(classRoo))
                    }
                    {regstering?
                        (<ChildSignup childSignup={props.childSignup} childFlag={props.childFlag} classRoom={selectedClassRoom}/>)
                        :
                        (console.log)
                    }

                                
            </div>
        )
    }
    

  
  export default ParentView;
  