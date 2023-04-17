import React from 'react';
import { Table, Button,Breadcrumb, BreadcrumbItem, } from 'reactstrap';
import { Link } from 'react-router-dom';
import {Loading} from "./loadingComponent"

const Dashboard = (props) => {

  const handleToggleAccount = async (id) => {
    props.activeToggler(id)
  };
  if (props.cashiers.isLoading) {
    return(
        <div className="container">
            <div className="row">
            <Breadcrumb>
                <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>add cashier</BreadcrumbItem>
            </Breadcrumb>
        </div>
            <div className="row">
                <Loading />
            </div>
        </div>
    );
  }
  else if (props.cashiers.errMess) {
      return(
          <div className="container">
              <div className="row">
              <Breadcrumb>
                  <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                  <BreadcrumbItem active>add cashier</BreadcrumbItem>
              </Breadcrumb>
          </div>
              <div className="row">
                  <h4>{props.cashiers.errMess}</h4>
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
      <h1>Cashiers</h1>
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
          {props.cashiers.cashiers.map((cashier) => (
            <tr key={cashier._id}>
              <td>{`${cashier.firstName} ${cashier.lastName}`}</td>
              <td>{cashier.email}</td>
              <td>{cashier.active ? 'Yes' : 'No'}</td>
              <td>
                <Button
                  onClick={() =>
                    handleToggleAccount(cashier._id)
                  }
                >
                  {cashier.active ? 'Disable' : 'Enable'}
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
