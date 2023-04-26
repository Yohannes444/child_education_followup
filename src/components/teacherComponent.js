import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,Table,Button } from 'reactstrap';
import { Link } from 'react-router-dom';



const Teacher = (props) => {
    const handleToggleAccount = (id) => {};
  
    return (
      <div>
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>TeacherView</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>userView</h3>
            <hr />
          </div>
        </div>
        <p>this is from the Teacher component</p>
        <h1>teachers</h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: "75%" }}>
            <Table bordered>
              <thead>
                <tr>
                  <th>className</th>
                  <th>clasSize</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {props.asignedClassRoom.classroomlist.map((teacher) => (
                  <tr key={teacher._id}>
                    <td>{teacher.className}</td>
                    <td>{teacher.clasSize}</td>
                    <td>
                      <Button onClick={() => handleToggleAccount(teacher._id)}>
                        view class room
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <div style={{ width: "25%", textAlign: "center" }}>
            <img src="assets/images/followUP.png" alt="placeholder" width="500"/>
          </div>
        </div>
      </div>
    );
  };
  
  export default Teacher;
  