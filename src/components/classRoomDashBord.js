import React from 'react';
import { Table, Button,Breadcrumb, BreadcrumbItem, } from 'reactstrap';
import { Link } from 'react-router-dom';
import {Loading} from "./loadingComponent"
import MaterialTable from 'material-table';
import { TableDropdownColumn } from './TableDropdownColumn';

const Dashboard = (props) => {

    const columns = [
        { title: 'Class Name', field: 'className' },
        { title: 'Clas Size', field: 'clasSize' },
        { 
          title: 'teachersList List', 
          field: 'teachersListList', 
          render: rowData => {
          return <TableDropdownColumn options={rowData.teachersListList} />}
        },
        { 
          title: 'Students List', 
          field: 'StudentsList', 
          render: rowData => {
          return <TableDropdownColumn options={rowData.StudentsList} />}
        },
      ];
      const data = props.classRoomList.classRoomList.map((classRoom) => ({
        className: classRoom.className,
        clasSize: classRoom.clasSize,
        teachersListList: classRoom.teachersList.map((teacher) => teacher.firstName + ' ' + teacher.lastName),
        StudentsList: classRoom.StudentsList.map((student) =>student.firstName+ ' ' + student.lastName),
      }));
            

  const handleClassRoomView = (id) => {
    props.getClassRoom(id)
  };
  if (props.classRoomList.isLoading) {
  
    return(
        <div className="container">
            <Loading />
        </div>
    );
  }
  else if (props.classRoomList.errMess) {
      return(
          <div className="container">
              <div className="row">
              <Breadcrumb>
                  <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                  <BreadcrumbItem active>add cashier</BreadcrumbItem>
              </Breadcrumb>
          </div>
              <div className="row">
                  <h4>{props.classRoomList.errMess}</h4>
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
      <h1>List of Calass Room</h1>
      <MaterialTable title="Class Room List" columns={columns} data={data} />;
     
    </div>
  )}
};

export default Dashboard;
