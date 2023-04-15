import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';



const ParentView= (props)=>{
    
    
        return(
            <di>
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem  ><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>paretnView</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>userView</h3>
                        <hr />
                    </div>
                </div>
                <p>this is from the paretn component</p>
            </di>
        )
    }
    

  
  export default ParentView;
  