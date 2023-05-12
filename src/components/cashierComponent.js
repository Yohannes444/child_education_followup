import React, { Component, useState } from 'react';
import { Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import WightList from './waitListView'
import {Loading} from "./loadingComponent"
import { toast } from "react-toastify";
import MonthlyFeeList from "./monthlyFeeListComponent"
const green = '#3bb19b';
const yellow ='#f1d21c';
const black = '#000000';

const Cashier= (props)=>{
    const [isWatchWightList,setIsWatchWightList]= useState(false)
    const [isMonthlyFeeClickd,setIsMonthlyFeeClickd] =useState(false)
       const handlWightListView= ()=>{
            setIsWatchWightList(!isWatchWightList)
            setIsMonthlyFeeClickd(false)
       }
       const handleMonthlyFeeClickd = () =>{
            setIsWatchWightList(false)
            setIsMonthlyFeeClickd(!isMonthlyFeeClickd)
       }
    
        return(
            <div>
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>CashierView</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>userView</h3>
                        <Button  style={{ backgroundColor: black }} onClick={() =>handlWightListView()} >WATCH WIGHTlISTS</Button>
                        <Button  style={{ backgroundColor: black }} onClick={() =>handleMonthlyFeeClickd()} >WATCH MONTHLY FEE LIST</Button>
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
                                        <h4>{this.props.MonthlyFeeList.errMess}</h4>
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

            </div>
        )
    }
    

  
  export default Cashier;
  