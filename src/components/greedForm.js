import React, { useState } from 'react';
import { Table, Button } from 'reactstrap';
import styles from './styles.module.css';
import { Control } from 'react-redux-form';

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
    <div>
      <div>
        <Button onClick={handleFormBack}>Back to the class room</Button>
      </div>
      <div>
        <h2>Add Grade</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="semester">Semester:</label>
            <input
              type="text"
              id="semester"
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
            />
            <label htmlFor="subject">Subject:</label>
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
                  <td>{studentId._id}</td>
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
  );
};

export default GradeForm;
