import React from 'react';
import { Table, Button,Breadcrumb, BreadcrumbItem, } from 'reactstrap';
import { Link } from 'react-router-dom';
import {Loading} from "./loadingComponent"

const Dashboard = (props) => {

  const handleToggleAccount = async (id) => {
    props.activeToggler(id)
  };
  if (props.teachers.isLoading) {
    props.fetchTeacher()
    return(
        <div className="container">
            <div className="row">
            <Breadcrumb>
                <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>add teacher</BreadcrumbItem>
            </Breadcrumb>
        </div>
            <div className="row">
                <Loading />
            </div>
        </div>
    );
  }
  else if (props.teachers.errMess) {
      return(
          <div className="container">
              <div className="row">
              <Breadcrumb>
                  <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                  <BreadcrumbItem active>add cashier</BreadcrumbItem>
              </Breadcrumb>
          </div>
              <div className="row">
                  <h4>{props.teachers.errMess}</h4>
              </div>
          </div>
      )
  }
  
  else{
  return (
    
    <div>
      <Breadcrumb>
        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
        <BreadcrumbItem active>admins cashier Dashboard </BreadcrumbItem>
      </Breadcrumb>
      <h1>teachers</h1>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Enabled</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.teachers.teachers.map((teacher) => (
            <tr key={teacher._id}>
              <td>{`${teacher.firstName} ${teacher.lastName}`}</td>
              <td>{teacher.email}</td>
              <td>{teacher.active ? 'Yes' : 'No'}</td>
              <td>
                <Button
                  onClick={() =>
                    handleToggleAccount(teacher._id)
                  }
                >
                  {teacher.active ? 'Disable' : 'Enable'}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )}
};

export default Dashboard;
