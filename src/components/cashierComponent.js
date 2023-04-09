import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';



const Cashier= (props)=>{

    
        return(
            <di>
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>CashierView</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>userView</h3>
                        <hr />
                    </div>
                </div>
                <p>this is from the Cashier component</p>
            </di>
        )
    }
    

  
  export default Cashier;
  