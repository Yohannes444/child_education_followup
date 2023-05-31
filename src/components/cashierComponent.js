import React, { Component, useState } from 'react';
import { Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import WightList from './waitListView'
import {Loading} from "./loadingComponent"
import { toast } from "react-toastify";
import MonthlyFeeList from "./monthlyFeeListComponent"
import AllMonthlyFeeList from './allMonthlyFee'
import MaterialTable from 'material-table';

const green = '#3bb19b';
const yellow ='#f1d21c';
const black = '#dda610';

const Cashier= (props)=>{
    const [isWatchWightList,setIsWatchWightList]= useState(false)
    const [isMonthlyFeeClickd,setIsMonthlyFeeClickd] =useState(false)
    const [isAllMonthlyFeeOpen,setIsAllMonthlyFeeOpen]=useState(false)
       const handlWightListView= ()=>{
            setIsWatchWightList(!isWatchWightList)
            setIsMonthlyFeeClickd(false)
       }
       const handleMonthlyFeeClickd = () =>{
            setIsWatchWightList(false)
            setIsMonthlyFeeClickd(!isMonthlyFeeClickd)
       }
       const handleAllMonthlyFeeClickd=()=>{
        setIsAllMonthlyFeeOpen(!isAllMonthlyFeeOpen)
       }
       const handleViewPyament=(studentId)=>{
            props.fetchOneMonthlyFee(studentId)
       }
       const columns = [
        {title:'student name',field:'studentName'},
        {title:'class Room Name',field:'classroom'},
        {title:'receipt',field:'receipt'},
        {
            title: 'view payment',
            field: 'payment',
            render: student =>{
              
            return (  <Link to="studnet/monthlyfee"  > <Button style={{color:"rgb(255,255,255)"}} color="success" className="mx-3" onClick={() =>{ 
               handleViewPyament(student.payment._id)
              }}>
              view payment
          </Button></Link>)}
            
            
          }
      ];
      
      const data = props.allstudents?.allstudents.map((student) => {
          return {
            studentName: `${student.firstName} ${student.lastName}`,
            classroom: student.section.className,
            payment: student
          }
        });
    
        return(
            <div>
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>CashierView</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>userView</h3>
                        <Button color="warning" style={{ marginRight: "10px" ,color:"rgb(0,0,0)"}} onClick={() => handlWightListView()}>WATCH Wait List</Button>
                        <Button color="warning" style={{ marginRight: "10px" ,color:"rgb(0,0,0)"}} onClick={() => handleMonthlyFeeClickd()}>WATCH NEW MONTHLY FEE LIST</Button>
                        <Button color="warning" style={{ color:"rgb(0,0,0)"}}  onClick={() => handleAllMonthlyFeeClickd()}>WATCH ALL MONTHLY FEE LIST</Button>

                    </div>
                </div>
                <p>this is from the Cashier component</p>
                <div className='row'>
                    <div >
                    {props.toggleWightList.isLoading ?
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
                        {props.toggleWightList.errMess ?
                            (
                                <div className="container">
                                    <div className="row">
                                    <Breadcrumb>
                                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                                        <BreadcrumbItem active>add </BreadcrumbItem>
                                    </Breadcrumb>
                                </div>
                                    <div className="row">
                                        <h4>{this.props.toggleWightList.errMess}</h4>
                                    </div>
                                </div>
                            )
                            : (console.log)
                        }
                       {props.toggleWightList.success ?(
                            props.refreshState(),
                            
                            toast.success("your opration has been done success fuly ")
                             )
                              : (console.log)
                        }
                    
                </div>
                </div>
                {props.MonthlyFeeList.isLoading || props.getMonthlyFeeState.isLoading ?
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
                        {props.MonthlyFeeList.errMess ?
                            (
                                <div className="container">
                                    <div className="row">
                                    <Breadcrumb>
                                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                                        <BreadcrumbItem active>add </BreadcrumbItem>
                                    </Breadcrumb>
                                </div>
                                    <div className="row">
                                        <h4>{this.props.MonthlyFeeList?.errMess}</h4>
                                    </div>
                                </div>
                            )
                            : (console.log)
                        }
                        {props.getMonthlyFeeState.errMess ?
                            (
                                <div className="container">
                                    <div className="row">
                                    <Breadcrumb>
                                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                                        <BreadcrumbItem active>add </BreadcrumbItem>
                                    </Breadcrumb>
                                </div>
                                    <div className="row">
                                        <h4>{this.props.getMonthlyFeeState.errMess}</h4>
                                    </div>
                                </div>
                            )
                            : (console.log)
                        }
                       {props.getMonthlyFeeState.success?(
                          props.refreshState(),
                          props.fetchMonthlyFeeListes(),
                          toast.success("your opration hase ended success fully")
                             )
                              : (console.log)
                        }
                {isWatchWightList ?(<WightList refreshState={props.refreshState} wightLists ={props.wightLists} wightListsToggler={props.wightListsToggler}/>):(console.log)}
                {isMonthlyFeeClickd? <MonthlyFeeList MonthlyFeeList={props.MonthlyFeeList} refreshState={props.refreshState} MonthlyFeeListToggler={props.MonthlyFeeListToggler} /> :console.log("")}
                {isAllMonthlyFeeOpen? <AllMonthlyFeeList allMonthlyFee={props.allMonthlyFee}/>:console.log('')}


                <MaterialTable title="MonthlyFee" columns={columns} data={data} />;                            

            </div>
        )
    }
    

  
  export default Cashier;
  