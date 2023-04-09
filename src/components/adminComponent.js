import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import {Button,Form, FormGroup, Input, Label } from 'reactstrap';
const green = '#3bb19b';
const yellow ='#f1d21c';
const black = '#000000';

const  AdminView =()=> {

        return(
            <di>
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem active>home</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                    <div className="col-12">
                    <Link outline 
                        className="btn btn-border" 
                        style={{backgroundColor: yellow}} to='/signupCashier'>
                        <span  className="fa fa-sign-un fa-lg "></span> ADD CASHIER
                    </Link>
                    <p> </p>
                    <Link outline 
                        className="btn btn-border" 
                        style={{backgroundColor: green}} to='/signupTeacher'>
                        <span  className="fa fa-sign-un fa-lg "></span> ADD TEACHER
                    </Link>
                        <h3>userView</h3>
                        <hr />
                    </div>
                
                <p>this is from the admin component</p>
            </di>
        )
    
    
  };
  
  export default AdminView;
  