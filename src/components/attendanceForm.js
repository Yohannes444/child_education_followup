import React, { useState } from 'react';
import { Table, Button,Breadcrumb, BreadcrumbItem, } from 'reactstrap';

const AttendanceForm = ({ classroomId, students, handleSubmit,back }) => {
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
        present: attendance[student._id] || false,
      })),
    };
    handleSubmit(data);
  };
  const handlFormback= ()=>{
    back()
}

  return (<div>
    <div>                
        <Button onClick={()=>handlFormback()}>back to the class room</Button>
    </div>
    <form onSubmit={handleSubmitClick}>
      <h2>Attendance</h2>
      {students.map((student) => (
        <div key={student._id}>
          <label>
            <input
              type="checkbox"
              checked={attendance[student._id] || false}
              onChange={(event) => handleChange(event, student._id)}
            />
            {`${student.firstName} ${student.lastName}`}
          </label>
        </div>
      ))}
      <button type="submit">Save Attendance</button>
    </form>
    </div>
  );
};

export default AttendanceForm;
