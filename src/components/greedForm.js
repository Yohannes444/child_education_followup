import React, { useState } from 'react';
import { Table, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import { Control } from 'react-redux-form';
import ReplyAllOutlinedIcon from '@mui/icons-material/ReplyAllOutlined';
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import GradingOutlinedIcon from '@mui/icons-material/GradingOutlined';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';

const GradeForm = (props) => {
  const [semester, setSemester] = useState('');
  const [subject, setSubject] = useState('');
  const [assessment, setAssessment] = useState([]);
  const [quiz, setQuiz] = useState([]);
  const [midExam, setMidExam] = useState([]);
  const [finalExam, setFinalExam] = useState([]);

  const [assessmentError, setAssessmentError] = useState(false);
  const [quizError, setQuizError] = useState(false);
  const [midExamError, setMidExamError] = useState(false);
  const [finalExamError, setFinalExamError] = useState(false);

  const handleFormBack = () => {
    props.back();
  };

  const handleViewGrade =(classRoomId)=>{
    props.fetchClassRoomGrade(classRoomId)

 }
  const handleAttendance = (classRoomId)=>{
      props.fetchAttendaceTeacher(classRoomId)

 }
  const handlUploadAssignment = (classRoomInfo) =>{
    props.setUploadTo(classRoomInfo)
    props.setIsClassRoomClicked(false)
    props.setIsUploeading(false)
    props.setisUploadingAssignment(! props.isUploadingAssignment)
    props.setattendaceIsOpen(false)
   
 }
  const handleUploadMaterial = (classRoomInfo)=>{
    props.setUploadTo(classRoomInfo)
    props.setIsUploeading(! props.isUploading)
    props.setIsClassRoomClicked(false)
    props.setisUploadingAssignment(false)
    props.setattendaceIsOpen(false)

 }
  const handlattendance = (classRoomInfo) =>{
    props.setUploadTo(classRoomInfo)
    props.setIsClassRoomClicked(false)
    props.setIsUploeading(false)
    props.setattendaceIsOpen(! props.attendaceIsOpen)
    props.setgreadIsClicked(false)

 }
  const handlGreed = (classRoomInfo)=>{
    props.setUploadTo(classRoomInfo)
    props.setIsUploeading(false)
    props.setIsClassRoomClicked(false)
    props.setattendaceIsOpen(false)
    props.setgreadIsClicked(! props.greadIsClicked)
 }
  const handleSubmit = (e) => {
    e.preventDefault();

    
    
    // Validation checks
    let hasError = false;
    if (assessment.some((value) => value > 30)) {
      setAssessmentError(true);
      hasError = true;
    } else {
      setAssessmentError(false);
    }

    if (quiz.some((value) => value > 5)) {
      setQuizError(true);
      hasError = true;
    } else {
      setQuizError(false);
    }

    if (midExam.some((value) => value > 15)) {
      setMidExamError(true);
      hasError = true;
    } else {
      setMidExamError(false);
    }

    if (finalExam.some((value) => value > 50)) {
      setFinalExamError(true);
      hasError = true;
    } else {
      setFinalExamError(false);
    }

    if (hasError) {
      return; // Prevent form submission if there are errors
    }

    const classroomId = props.classRoom._id;
    const gradeData = {
      semester,
      classroomId,
      student: props.classRoom.StudentsList.map((studentId, index) => ({
        studentId: studentId._id,
        subject: subject,
        assessment: assessment[index],
        quiz: quiz[index],
        midExam: midExam[index],
        finalExam: finalExam[index],
      })),
      date: new Date(),
    };

    console.log(gradeData);
    props.handleSubmitGreed(gradeData);
  };

  const handleGradeChange = (index, field, value) => {
    let newValue = value;
    if (field === 'assessment') {
      newValue = Math.min(value, 30); // Limit assessment value to 30
    } else if (field === 'quiz') {
      newValue = Math.min(value, 5); // Limit quiz value to 5
    } else if (field === 'midExam') {
      newValue = Math.min(value, 15); // Limit midExam value to 15
    } else if (field === 'finalExam') {
      newValue = Math.min(value, 50); // Limit finalExam value to 50
    }

    if (field === 'assessment') {
      setAssessment((prevAssessment) => {
        const updatedAssessment = [...prevAssessment];
        updatedAssessment[index] = newValue;
        return updatedAssessment;
      });
    } else if (field === 'quiz') {
      setQuiz((prevQuiz) => {
        const updatedQuiz = [...prevQuiz];
        updatedQuiz[index] = newValue;
        return updatedQuiz;
      });
    } else if (field === 'midExam') {
      setMidExam((prevMidExam) => {
        const updatedMidExam = [...prevMidExam];
        updatedMidExam[index] = newValue;
        return updatedMidExam;
      });
    } else if (field === 'finalExam') {
      setFinalExam((prevFinalExam) => {
        const updatedFinalExam = [...prevFinalExam];
        updatedFinalExam[index] = newValue;
        return updatedFinalExam;
      });
    }
  };

  return (
    <div >
       <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
                <Sidebar style={{ height: "100vh" }}>
                  <Menu >
                    <MenuItem
                      icon={<MenuOutlinedIcon />}
                      onClick={() => {
                        console.log("opps");
                      }}
                      style={{ textAlign: "center" }}
                    >
                      {" "}
                      <h2>Teacher G</h2>
                      </MenuItem>
                      <MenuItem style={{backgroundColor: "#e9ca1b"}} icon={<GradingOutlinedIcon />}onClick={""} > <Button style={{backgroundColor: "#e9ca1b",color: "#5888b9", border: "none"} }  onClick={()=>"handlGreed(props.classroomview)"} >add grade</Button></MenuItem>
                    <MenuItem icon={<PlaylistAddOutlinedIcon />}> <Button style={{backgroundColor: "rgb(249, 249, 249, 0.7)",color: "#5888b9", border: "none"} } onClick={()=>handlattendance(props.classroomview)}>track attendance</Button></MenuItem>
                    <MenuItem icon={<DriveFolderUploadOutlinedIcon  />}><Button style={{backgroundColor: "rgb(249, 249, 249, 0.7)",color: "#5888b9", border: "none"} } onClick={()=>handleUploadMaterial(props.classroomview)}>upload material</Button></MenuItem>
                    <MenuItem icon={<AssignmentOutlinedIcon />}> <Button style={{backgroundColor: "rgb(249, 249, 249, 0.7)",color: "#5888b9", border: "none"} } onClick={()=>handlUploadAssignment(props.classroomview)}>upload assignment</Button></MenuItem>
                    <MenuItem icon={<FactCheckOutlinedIcon />}> <Link to='/classRoomGade'><Button style={{backgroundColor: "rgb(249, 249, 249, 0.7)",color: "#5888b9", border: "none"} }  onClick={() =>{ return handleViewGrade(props.classroomview._id)}}> view students grade</Button></Link>  </MenuItem>
                    <MenuItem icon={<ListAltOutlinedIcon />}> <Link to='/childInfor/attendanc'><Button style={{backgroundColor: "rgb(249, 249, 249, 0.7)",color: "#5888b9", border: "none"} }  onClick={() =>{ return handleAttendance(props.classroomview._id)}}> view class attendance</Button></Link></MenuItem>
                 </Menu>
                </Sidebar>
                <main>
                
                <div>
      <div>
        <ReplyAllOutlinedIcon onClick={handleFormBack}/>
      </div>
      <div >
        <h2>Add Grade</h2>
        <form onSubmit={handleSubmit}  >
          <div>
            <label htmlFor="semester">Semester:</label>
            <input
              type="text"
              placeholder="1st "
              id="semester"
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
            />
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              placeholder="maths "
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <Table bordered>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>ID</th>
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
                  <td>{`TMN-${ Intl.DateTimeFormat('en-US', { year: 'numeric'}).format(new Date(Date.parse(studentId.createdAt))).substring(4, 2)}/${studentId._id.substring(0, 6)}`}</td>
                  <td>
                    <input
                      type="number"
                      id={`assessment-${studentId._id}`}
                      value={assessment[index]}
                      onChange={(e) =>
                        handleGradeChange(
                          index,
                          'assessment',
                          e.target.value
                        )
                      }
                    />
                    {assessmentError && (
                      <span className={styles.error}>Invalid assessment value</span>
                    )}
                  </td>
                  <td>
                    <input
                      type="number"
                      id={`quiz-${studentId._id}`}
                      value={quiz[index]}
                      onChange={(e) =>
                        handleGradeChange(index, 'quiz', e.target.value)
                      }
                    />
                    {quizError && (
                      <span className={styles.error}>Invalid quiz value</span>
                    )}
                  </td>
                  <td>
                    <input
                      type="number"
                      id={`midExam-${studentId._id}`}
                      value={midExam[index]}
                      onChange={(e) =>
                        handleGradeChange(index, 'midExam', e.target.value)
                      }
                    />
                    {midExamError && (
                      <span className={styles.error}>Invalid mid exam value</span>
                    )}
                  </td>
                  <td>
                    <input
                      type="number"
                      id={`finalExam-${studentId._id}`}
                      value={finalExam[index]}
                      onChange={(e) =>
                        handleGradeChange(index, 'finalExam', e.target.value)
                      }
                    />
                    {finalExamError && (
                      <span className={styles.error}>Invalid final exam value</span>
                    )}
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
        </main>
      </div>
    </div>
  );
};

export default GradeForm;
