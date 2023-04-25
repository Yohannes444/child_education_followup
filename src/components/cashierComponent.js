import React, { Component, useState } from 'react';
import { Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import WightList from './wightListView'
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
                    {isWatchWightList ?(
                        <WightList wightLists ={props.wightLists} wightListsToggler={props.wightListsToggler}/>
                    )
                    :(console.log)
                }
                </div>
                </div>
            </div>
        )
    }
    

  
  export default Cashier;
  