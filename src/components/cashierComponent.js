import React, { Component, useState } from 'react';
import { Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import WightList from './waitListView'
import {Loading} from "./loadingComponent"

const green = '#3bb19b';
const yellow ='#f1d21c';
const black = '#000000';

const Cashier= (props)=>{
    const [isWatchWightList,setIsWatchWightList]= useState(false)
       const handlWightListView= ()=>{
            setIsWatchWightList(!isWatchWightList)
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
                            alert("your opration has been done success fuly ")
                             )
                              : (console.log)
                        }
                    {isWatchWightList ?(
                        <WightList refreshState={props.refreshState} wightLists ={props.wightLists} wightListsToggler={props.wightListsToggler}/>
                    )
                    :(console.log)
                }
                </div>
                </div>
            </div>
        )
    }
    

  
  export default Cashier;
  