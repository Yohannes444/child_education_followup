import React, { useState } from 'react';
import { Table, Button } from 'reactstrap';
import styles from "./styles.module.css";
import {  Control } from 'react-redux-form';

const AttendanceForm = (props) => {
  const [semester, setSemester] = useState('');
  const [subject,setSubject] = useState('')
  const [grades, setGrades] = useState({});
  const [assessment, setAssessment] = useState([]);
  const [quiz, setQuiz] = useState([]);
  const [midExam, setMidExam] = useState([]);
  const [finalExam, setFinalExam] = useState([]);

  const handlFormback= ()=>{
    props.back()
}

const handleSubmit = (e) => {
  e.preventDefault();
  const gradeData = {
    semester,
    student: props.classRoom.StudentsList.map((studentId) => ({
      studentId: studentId._id,
      subject:subject,
      assessment: grades[studentId._id].assessment,
      quiz: grades[studentId._id].quiz,
      midExam: grades[studentId._id].midExam,
      finalExam: grades[studentId._id].finalExam,
    })),
    date: new Date(),
  };
  console.log(gradeData)
  props.handleSubmitGreed(gradeData);
};


const handleGradeChange = (studentId, field, value) => {
  setGrades((prevGrades) => ({
    ...prevGrades,
    [studentId]: {
      ...prevGrades[studentId],
      [field]: value,
    },
  }));
};


        
  return (
    <div>  
    <div>                
      <Button onClick={()=>handlFormback()}>back to the class room</Button>
    </div>  
    <div>
      <h2>Add Grade</h2>
      <form onSubmit={handleSubmit}>
      <div>
          <label htmlFor="semester"> Semester:</label>
          <input
            type="text"
            id="semester"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
          />
          <label htmlFor="subject"> subject :</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <Table bordered>
          <thead>
            <tr>
              <th>full name</th>
              <th>id</th>
              <th>Assessment</th>
              <th>Quiz</th>
              <th>Mid Exam</th>
              <th>Final Exam</th>
            </tr>
          </thead>
          <tbody>
           
            {props.classRoom.StudentsList.map((studentId, index) => (
              <tr key={studentId._id}>
                <td>{`${studentId.firstName} ${studentId.lastName}`}</td>
                <td>{studentId._id}</td>
                <td>
                  <input
                    type="text"
                    id={`assessment-${studentId._id}`}
                    value={assessment[index]}
                    onChange={(e) =>
                      handleGradeChange(
                        studentId._id,
                        'assessment',
                        e.target.value
                      )
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    id={`quiz-${studentId._id}`}
                    value={quiz[index]}
                    onChange={(e) =>
                      handleGradeChange(studentId._id, 'quiz', e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    id={`midExam-${studentId._id}`}
                    value={midExam[index]}
                    onChange={(e) =>
                      handleGradeChange(studentId._id, 'midExam', e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    id={`finalExam-${studentId._id}`}
                    value={finalExam[index]}
                    onChange={(e) =>
                      handleGradeChange(studentId._id, 'finalExam', e.target.value)
                    }
                  />
                </td>
              </tr>
            ))}

        </tbody>
      </Table>
      <div className="submit-buttons">
        <Button type="submit">Submit</Button>
      </div>
    </form>
    </div>
  </div>
  );
};

export default AttendanceForm;
