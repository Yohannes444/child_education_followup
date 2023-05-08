import React, { Component, useState } from 'react';
import { Table, Button,Breadcrumb, BreadcrumbItem, } from 'reactstrap';
import { Link } from 'react-router-dom';
import ClassRoomList from './classroomListP';
import ChildSignup from './chiledSignup';
import {Loading} from "./loadingComponent"
import ChildList  from "./childListComponent"
import { toast } from "react-toastify";

const green = '#3bb19b';
const yellow ='#f1d21c';
const black = '#000000';

const ParentView= (props)=>{
    const [classRoo, setClassRoo] = useState(false);
   const [selectedClassRoom,setSelectedClassRoom]=useState()
   const [regstering, setregstering] = useState(false);
   const [isChildsClicked, setIsChildsClicked] = useState(false)
   const [child,setChild] = useState()
   const [ischildSelected,setIschildSelected] = useState(false)
   

    const handleToggleAccount = () => {
        setClassRoo(!classRoo);
        setSelectedClassRoom('')
        setregstering(false)
        setIsChildsClicked(false)
      }
      const handlChildButtonClick = () =>{
        setSelectedClassRoom('')
        setClassRoo(false);
        setIsChildsClicked(!isChildsClicked)
        setregstering(false)
        setClassRoo(false)
      }
      const handlSelectChild =(child)=>{
        setIsChildsClicked(false)
        props.childInfo(child)
        setIschildSelected(!ischildSelected)
        console.log(child)
        props.fetchChildInfo(child._id)
        setClassRoo(false)
      }
      
        return(
            <div>
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem  ><Link to='/home'>ዋና ገጽ</Link></BreadcrumbItem>
                        <BreadcrumbItem active>የአሳዳጊ ገጽ</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>አሳዳጊ ግጽ</h3>
                        <hr />
                    </div>
                    <Button
                        style={{ backgroundColor: yellow }}
                        onClick={() => handleToggleAccount()}>ልጅወን ለመመዝግቡ
                    </Button>
                    <Button
                        style={{ backgroundColor: yellow }}
                    onClick={() => handlChildButtonClick()}>ልጆች
                    </Button>
                    </div>
                    <p>ይህ የአሳዳጊ ገጽ ነው</p>
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
                        (console.log(''))
                    }
                    
                        {props.childFlag.isLoading ?
                            (
                            
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
                            : (console.log)
                        }
                        {props.childFlag.errMess ?
                            (
                                <div className="container">
                                    <div className="row">
                                    <Breadcrumb>
                                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                                        <BreadcrumbItem active>add </BreadcrumbItem>
                                    </Breadcrumb>
                                </div>
                                    <div className="row">
                                        <h4>{this.props.childFlag.errMess}</h4>
                                    </div>
                                </div>
                            )
                            : (console.log)
                        }
                       {props.childFlag.childADD ?(
                            props.refreshState(),
                            toast.success("ልጅዎ ተመዝግቧል ትሙርትበቱ ከተቀበለዎት በ EMAIL መልዕክት ይድርስዎታል። እባክዎ EMAIL አካውንትዎን ይከታተሉ በቅርቡ ከትምህርት ቤቱ መልክት የደርስዎታል")
                            
                             )
                              : (console.log)
                        }
                    {regstering&classRoo===false?
                        (<ChildSignup refreshState={props.refreshState} childSignup={props.childSignup} childFlag={props.childFlag} classRoom={selectedClassRoom}/>)
                        :
                        (console.log)}
                    {isChildsClicked? <ChildList  handlChildView={handlSelectChild} setIsChildsClicked={setIsChildsClicked}  childStore={props.childStore} /> :console.log("")}
                    {console.log(child,ischildSelected)}
                    
                                
            </div>
        )
    }
    

  
  export default ParentView;
  