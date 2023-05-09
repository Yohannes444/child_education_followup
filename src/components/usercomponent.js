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
                    <h4>{props.user.errMess}</h4>
                </div>
            </div>
        )
    }
    else if (props.user.user) {

      if (props.user.user.admin) {
        return (
          <div className='container'>
            
          <AdminView classRoomList={props.classRoomList}  />
          </div>
          );
      } else if (props.user.user.teacher) {
        return (
          <div className='container'>
          
          <TeacherView uploadGreedState={props.uploadGreedState} handleSubmitGreed={props.handleSubmitGreed} assignmentState={props.assignmentState} uploadAssignment={props.uploadAssignment} attendanceState={props.attendanceState} handleAttendanceSubmit={props.handleAttendanceSubmit} uploadState={props.uploadState} user={props.user.user} uploadMaterial={props.uploadMaterial} asignedClassRoom={props.asignedClassRoom} refreshState={props.refreshState} />
          </div>
          );
      } else if (props.user.user.cashier) {
        return (
          <div className='container'>

          <CashierView fetchMonthlyFeeListes={props.fetchMonthlyFeeListes} getMonthlyFeeState={props.getMonthlyFeeState} MonthlyFeeListToggler={props.MonthlyFeeListToggler} MonthlyFeeList={props.MonthlyFeeList} refreshState={props.refreshState} toggleWightList={props.toggleWightList} wightLists={props.wightLists} wightListsToggler={props.wightListsToggler} />
          </div>
          );
      } else if (props.user.user.parent) {
        return(
          <div className='container'>
          
          <ParentView childInfo={props.childInfo} fetchChildInfo={props.fetchChildInfo} childStore={props.childStore} refreshState={props.refreshState} ClassRooms={props.ClassRooms} childSignup={props.childSignup} childFlag={props.childFlag} />
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