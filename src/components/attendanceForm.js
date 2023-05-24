import React, { useState } from 'react';
import { Table, Button,Breadcrumb, BreadcrumbItem, } from 'reactstrap';
import styles from "./styles.module.css";

const AttendanceForm = ({ classroomId, students, handleSubmit,back,user }) => {
  const [attendance, setAttendance] = useState({});

  const handleChange = (event, studentId) => {
    const { checked } = event.target;
    setAttendance({
      ...attendance,
      [studentId]: checked,
    });
  };

  const handleSubmitClick = (event) => {
    event.preventDefault();
    const data = {
      classroomId,
      date: new Date(),
      students: students.map((student) => ({
        studentId: student._id,
        teacherId:user._id,
        present: attendance[student._id] || false,
      })),
    };
    handleSubmit(data);
  };
  const handlFormback= ()=>{
    back()
}

  return (<div className="container bg-f5f5f5">
      <div className="row">
        <div className="row row-content">
        <div className={styles.signup_container}>
            <div className={styles.signup_form_container}>
        <div>                
            <Button onClick={()=>handlFormback()}>back to the class room</Button>
        </div>
        
   
    <div className={styles.right}>
    <form onSubmit={handleSubmitClick} className={styles.form_container} >
      <h2>Attendance</h2>
      <Table bordered>
          <thead>
          <tr>
            <th>full name</th>
            <th>id</th>
            <th>present</th>
          </tr>
        </thead>
        <tbody>
      {students.map((student) => (
        
          
          <tr key={student._id}>
          <td>{`${student.firstName} ${student.lastName}`}</td>
          <td>{student._id}</td>
          <td>  <input
                  className={styles.input}
                  type="checkbox"
                  checked={attendance[student._id] || false}
                  onChange={(event) => handleChange(event, student._id)}
                /></td>
                
              </tr>
           
          ))}
        </tbody>
      </Table>
      <Button type="submit">Save Attendance</Button>
    </form>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default AttendanceForm;
