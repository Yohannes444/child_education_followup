import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from './loadingComponent';
import AdminView from './adminComponent';
import TeacherView from './teacherComponent'
import CashierView from './cashierComponent';
import ParentView from './parentComponent';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';



const User = (props) => {

    if (props.user.isLoading) {
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.user.errMess) {
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.favorites.errMess}</h4>
                </div>
            </div>
        )
    }
    else if (props.user.user) {

      if (props.user.user.admin) {
        return (
          <div className='container'>
            <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>userView</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>userView</h3>
                        <hr />
                    </div>
                </div>
          <AdminView />
          </div>
          );
      } else if (props.user.user.teacher) {
        return (
          <div className='container'>
            <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>My Favorites</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>My Favorites</h3>
                        <hr />
                    </div>
                </div>
          <TeacherView />
          </div>
          );
      } else if (props.user.user.cashier) {
        return (
          <div className='container'>
            <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>My Favorites</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>My Favorites</h3>
                        <hr />
                    </div>
                </div>
          <CashierView />
          </div>
          );
      } else if (props.user.user.parent) {
        return(
          <div className='container'>
            <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>My Favorites</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>My Favorites</h3>
                        <hr />
                    </div>
                </div>
          <ParentView />
          </div>
          );
      } else {
        return null;
      }
    }
    else {
        return(
            <div className="container">
                <div className="row">
                    <h4>You have not user</h4>
                </div>
            </div>
        )
    }
}

export default User;