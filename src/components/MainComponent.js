import React,{ Component } from 'react';
import Header from './headerComponent';
import User from './usercomponent'
import Footer from './footerComponent';
import Signup from './signUpcomponnet';
import SignupTeach from './teacherSignup'
import SignupCash from './cashierSignup';
import ChildSignup from './chiledSignup';
import CreatClassroom  from './CreateClassroomForm';
import HOME from './HomeComponent'
import { Switch, Route,withRouter,matchPath } from "react-router-dom";
import   Contact  from './contactComponent'
import  {connect}  from 'react-redux';
import About from './AboutComponent'
import { actions } from 'react-redux-form';
import { loginUser, parentSignup, cashierSignup, teacherSignup,  creatClassroom, logoutUser, postFeedback, fetchuser,refreshState, fetchOneChat ,fechOtherPersoneInfo,fetchUserChat,fetchFeedBack, deleteFeedBack } from '../redux/ActionCreaters';
import { fetchCashier,toggleCashierAccount,fetchTeacher ,toggleTeacherAccount, fetchClassRoomList,fetchAllParents} from '../redux/actions/adminActions'
import { postStudent,parentFetchClassRoom, fetchChildrens, fetchChildInfo, fetchMaterial, fetchAssignment, postMonthlyFee,fetchAttendace} from '../redux/actions/parentActions';
import { wightListsToggler,fetchWithList ,fetchMonthlyFeeListes ,MonthlyFeeListToggler ,fetchMonthlyFeeList,AllStudentList,fetchOneMonthlyFee} from '../redux/actions/cashierAction';
import { fetchTeacherClassRoom ,uploadMaterial, submitAttendance, uploadAssignment, handleSubmitGreed, fetchClassRoomGrade,fetchAttendaceTeacher} from '../redux/actions/teacherActions'
import {Transition, CSSTransition, TransitionGroup} from 'react-transition-group'
import CashierDashboard from './cashierDashbord'
import TeacherDashboard from './teacherDashbord'
import ChildView from "./childView"
import AssignmentView from "./AssignmentListComponent"
import MaterialList from "./MaterialListComponent"
import ChatComponent from "./Chat/Chat"
import ClassRoomGrade from "./classRoomGrade"
import ChaildAttendance from "./singleChildAttendace"
import {Loading} from "./loadingComponent"
import { toast } from "react-toastify";
import CassRoomAttendance from "./CassRoomAttendance"
import StudentMonthlyPaymetes from "./oneStudentMonthlyFee"

const mapStateToProps = state => {
  return {
    auth:state.auth,
    user:state.user,
    teacherSign:state.teacher,
    cashierSign:state.cashierSign,
    parent:state.parent,
    classRoom:state.classRoom,
    cashiers:state.cashiers,
    teachers:state.teachers,
    childFlag:state.childFlag,
    ClassRooms:state.ClassRooms,
    wightLists:state.wightLists,
    toggleWightList:state.toggleWightList,
    asignedClassRoom:state.asignedClassRoom,
    uploadState:state.uploadState,
    attendanceState:state.attendanceState,
    assignmentState:state.assignmentState,
    uploadGreedState:state.uploadGreedState,
    childStore:state.childLists,
    childInfor:state.childInfo,
    paymentState:state.paymentState,
    MonthlyFeeList:state.MonthlyFeeList,
    getMonthlyFeeState:state.getMonthlyFeeState,
    classRoomList:state.classRoomList,
    allChats:state.allChats,
    oneChats:state.oneChats,
    userInfo:state.userInfo,
    ClassRoomsGrade:state.ClassRoomsGrade,
    feedBack:state.feedBack,
    feedBackDelete:state.feedBackDelete,
    Attendances:state.Attendances,
    Attendanc:state.Attendanc,
    allMonthlyFee:state.allMonthlyFee,
    allstudents:state.allstudents ,
    oneMonthlyFee:state.oneMonthlyFee,
    allParents:state.allParents,

  }
  
}



const mapDispatchToProps  = (dispatch) => ({
  
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  postFeedback: (feedback) => dispatch(postFeedback(feedback)),
  loginUser: (creds) => dispatch(loginUser(creds)),
  logoutUser: () => dispatch(logoutUser()),
  parentSignup: (parent) => dispatch(parentSignup(parent)),
  childSignup:(child)=> dispatch(postStudent(child)),
  cashierSignup:(cashier)=>dispatch(cashierSignup(cashier)),
  teacherSignup:(teacher)=>dispatch(teacherSignup(teacher)),
  creatClassroom:(classRoom)=>dispatch(creatClassroom(classRoom)),
  refreshState:()=>dispatch(refreshState()),
  fetchuser:()=>dispatch(fetchuser()),
  fetchCashier:()=>dispatch(fetchCashier()),
  fetchTeacher:()=>dispatch(fetchTeacher()),
  parentFetchClassRoom:()=>dispatch(parentFetchClassRoom()),
  toggleCashierAccount:(cashier)=>dispatch(toggleCashierAccount(cashier)),
  toggleTeacherAccount: (teacher)=> dispatch(toggleTeacherAccount(teacher)),
  wightListsToggler:(data)=> dispatch(wightListsToggler(data)),
  fetchWithList:()=>dispatch(fetchWithList()),
  fetchTeacherClassRoom:()=>dispatch(fetchTeacherClassRoom()),
  uploadMaterial:(data)=>dispatch(uploadMaterial(data)),
  handleAttendanceSubmit:(data)=>dispatch(submitAttendance(data)),
  uploadAssignment:(data)=>dispatch(uploadAssignment(data)),
  handleSubmitGreed:(data)=>dispatch(handleSubmitGreed(data)),
  fetchChildrens:() =>dispatch(fetchChildrens()),
  fetchChildInfo:(studentId)=>dispatch(fetchChildInfo(studentId)),
  fetchMaterial:(studentId)=>dispatch(fetchMaterial(studentId)),
  fetchAssignment:(studendtId)=>dispatch(fetchAssignment(studendtId)),
  postMonthlyFee:(recept)=>dispatch(postMonthlyFee(recept)),
  monthlyFeeListes:()=>dispatch(fetchMonthlyFeeListes()),
  MonthlyFeeListToggler:(data)=>dispatch(MonthlyFeeListToggler(data)),
  fetchClassRoomList:()=>dispatch(fetchClassRoomList()),
  fetchOneChat:(userId) =>dispatch(fetchOneChat(userId)),
  fetchUserChat:(userId) =>dispatch(fetchUserChat(userId)),
  fechOtherPersoneInfo:(userId)=>dispatch(fechOtherPersoneInfo(userId)),
  fetchClassRoomGrade:(classId)=>dispatch(fetchClassRoomGrade(classId)),
  postFeedback: (feedback) => dispatch(postFeedback(feedback)),
  fetchFeedBack:()=>dispatch(fetchFeedBack()),
  deleteFeedBack:(feedbackId)=>dispatch(deleteFeedBack(feedbackId)),
  fetchAttendace:(childId)=>dispatch(fetchAttendace(childId)),
  fetchAttendaceTeacher:(classRoomId)=>dispatch(fetchAttendaceTeacher(classRoomId)),
  fetchMonthlyFeeList:()=>dispatch(fetchMonthlyFeeList()),
  AllStudentList:()=>dispatch(AllStudentList()),
  fetchOneMonthlyFee:(studentId)=>dispatch(fetchOneMonthlyFee(studentId)),
  fetchAllParents:()=>dispatch(fetchAllParents())

});

class  Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childInfo: '',
      receiverId:null,
      isChatsLoaded:false,
      isFirstTime:false
    };
    this.setChildInfo = this.setChildInfo.bind(this);
    this.setReceiverId = this.setReceiverId.bind(this)
  }
  setReceiverId(value){
    this.setState({
      receiverId:value
    })
  }
  setChildInfo(value) {
    this.setState({
      childInfo: value,
    })};
  
  UNSAFE_componentWillMount(){
  this.props.fetchuser()
  this.props.fetchCashier()
  this.props.fetchTeacher()
  this.props.parentFetchClassRoom()
  this.props.fetchWithList()
  this.props.fetchTeacherClassRoom()
  this.props.fetchChildrens()
  this.props.monthlyFeeListes()
  this.props.fetchClassRoomList()
  this.props.fetchFeedBack()
  this.props.fetchMonthlyFeeList()
  this.props.AllStudentList()
  this.props.fetchAllParents()
}
 fetchUserChats =()=>{
  if(this.props.user?.user && this.state.isChatsLoaded === false){
    const userId = this.props.user.user._id
    this.props.fetchUserChat(userId)
    this.setState({
      isChatsLoaded:true
    })
}}

  render(){

    this.fetchUserChats()
console.log(this.props.allChats)
console.log(this.state.receiverId)

if(this.props.auth.errMess !==null && !this.props.auth.isAuthenticated){
  toast.error(this.props.auth.errMess)
}
if(this.props.user.isLoading){
  return(
  
      <div>
        
          <Header auth={this.props.auth} 
            loginUser={this.props.loginUser} 
            logoutUser={this.props.logoutUser}
            user={this.props.user}
             />
          <div className="row">
              <Loading />
          </div>
          <Footer/>

      </div>
  )
}



   else{ 
    
    return (

      <div className="App">
         <Header auth={this.props.auth} 
            loginUser={this.props.loginUser} 
            logoutUser={this.props.logoutUser}
            user={this.props.user}
            
             />
          <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
         <Switch>
            <Route exact path='/contactus' component={()=><Contact postFeedback={this.props.postFeedback} resetFeedbackForm={this.props.resetFeedbackForm}/>  }/>
            <Route path='/signup' component={()=> <Signup  parentSign={this.props.parent} parentSignup={this.props.parentSignup} refreshState={this.props.refreshState}/>} />
            <Route path= '/signupCashier' component={()=>this.props.auth.isAuthenticated && this.props.user.user.admin ? <SignupCash cashierSignup={this.props.cashierSignup} cashierSign={this.props.cashierSign} refreshState={this.props.refreshState}/>:<HOME   user={this.props.user}/>}/>
            <Route path='/signupTeacher' component={()=>this.props.auth.isAuthenticated && this.props.user.user.admin  ?  <SignupTeach teacherSignup={this.props.teacherSignup} teacherSign={this.props.teacherSign} refreshState={this.props.refreshState}/>:<HOME   user={this.props.user}/>}/>
            <Route path='/creatClassRoom' component={()=>this.props.auth.isAuthenticated && this.props.user.user.admin  ? <CreatClassroom fetchTeacher={this.props.fetchTeacher} teachers={this.props.teachers.teachers} classRoom={this.props.classRoom} creatClassroom={this.props.creatClassroom} refreshState={this.props.refreshState} />:<HOME   user={this.props.user}/>}/>
            <Route path= '/cashierDashbord' component={()=>this.props.auth.isAuthenticated && this.props.user.user.admin  ? <CashierDashboard  cashiers={this.props.cashiers} activeToggler={this.props.toggleCashierAccount}/>:<HOME   user={this.props.user}/>}/>
            <Route path= '/teacherDashbord' component = {()=>this.props.auth.isAuthenticated && this.props.user.user.admin  ? <TeacherDashboard  teachers={this.props.teachers} activeToggler = {this.props.toggleTeacherAccount}/>:<HOME   user={this.props.user}/>}/>
            <Route path= '/childInfo' component={()=>this.props.auth.isAuthenticated && this.props.user.user.parent ? <ChildView fetchAttendace={this.props.fetchAttendace} setReceiverId={this.setReceiverId} paymentState={this.props.paymentState} postMonthlyFee={this.props.postMonthlyFee} fetchAssignment={this.props.fetchAssignment} fetchMaterial={this.props.fetchMaterial} student={this.state.childInfo}  childStore={this.props.childInfor} refreshState={this.props.refreshState} />:<HOME   user={this.props.user}/>}/>
            <Route path= '/childInfor/materials' component={()=>this.props.auth.isAuthenticated && this.props.user.user.parent ? <MaterialList  uploadState={this.props.uploadState} student={this.state.childInfo} fetchAssignment={this.props.fetchAssignment} fetchMaterial={this.props.fetchMaterial} fetchAttendace={this.props.fetchAttendace} postMonthlyFee={this.props.postMonthlyFee} /> :<HOME   user={this.props.user}  />}/>
            <Route path= '/childInfor/assignemt' component={()=>this.props.auth.isAuthenticated && this.props.user.user.parent ? <AssignmentView assignmentState={this.props.assignmentState} student={this.state.childInfo} fetchAssignment={this.props.fetchAssignment} fetchMaterial={this.props.fetchMaterial} fetchAttendace={this.props.fetchAttendace} postMonthlyFee={this.props.postMonthlyFee}  /> :<HOME user={this.props.user} />}  />
            <Route path= '/childInfor/attendance' component={()=>this.props.auth.isAuthenticated && this.props.user.user.parent ? <ChaildAttendance Attendances={this.props.Attendances} student={this.state.childInfo} fetchAssignment={this.props.fetchAssignment} fetchMaterial={this.props.fetchMaterial} fetchAttendace={this.props.fetchAttendace} postMonthlyFee={this.props.postMonthlyFee} /> :<HOME user={this.props.user} />}  />
            <Route path= '/childInfor/attendanc' component={()=>this.props.auth.isAuthenticated && this.props.user.user.teacher ? <CassRoomAttendance Attendances={this.props.Attendanc} /> :<HOME user={this.props.user} />}  />
            <Route path= '/chat' component={()=>this.props.auth.isAuthenticated && (this.props.user.user.parent ||this.props.user.user.teacher) ? <ChatComponent setReceiverId={this.setReceiverId} receiverId={this.state.receiverId} userInfo ={this.props.userInfo} fetchOtherPersonInfo={this.props.fechOtherPersoneInfo} allChats={this.props.allChats} user={this.props.user}  /> :<HOME user={this.props.user} />}  />
            <Route path= '/classRoomGade' component={()=>this.props.auth.isAuthenticated ?<ClassRoomGrade refreshState={this.props.refreshState} ClassRoomsGrade={this.props.ClassRoomsGrade} /> :<HOME user={this.props.user} /> }/>
            <Route path= '/studnet/monthlyfee' component={()=>this.props.auth.isAuthenticated && this.props.user.user.cashier?<StudentMonthlyPaymetes  oneMonthlyFee={this.props.oneMonthlyFee} /> :<HOME user={this.props.user} /> }/>
            <Route path="/aboutus" component={()=> <About/>}/>
            <Route path='/home' auth={this.props.auth}   
              component={()=>this.props.auth.isAuthenticated ?  
                <User ClassRooms={this.props.ClassRooms}  
                      user={this.props.user} 
                      feedBack={this.props.feedBack}
                      childFlag={this.props.childFlag} 
                      childSignup={this.props.childSignup}
                      refreshState={this.props.refreshState}
                      wightLists= {this.props.wightLists}
                      wightListsToggler={this.props.wightListsToggler}
                      toggleWightList={this.props.toggleWightList}
                      asignedClassRoom={this.props.asignedClassRoom}
                      uploadMaterial={this.props.uploadMaterial}
                      uploadState={this.props.uploadState}
                      handleAttendanceSubmit= {this.props.handleAttendanceSubmit}
                      attendanceState={this.props.attendanceState}
                      uploadAssignment={this.props.uploadAssignment}
                      assignmentState={this.props.assignmentState}
                      handleSubmitGreed={this.props.handleSubmitGreed}
                      uploadGreedState={this.props.uploadGreedState}  
                      childStore={this.props.childStore}    
                      fetchChildInfo={this.props.fetchChildInfo}   
                      childInfo={this.setChildInfo}
                      setReceiverId={this.setReceiverId}
                      MonthlyFeeList={this.props.MonthlyFeeList}
                      MonthlyFeeListToggler={this.props.MonthlyFeeListToggler}
                      getMonthlyFeeState={this.props.getMonthlyFeeState}
                      fetchMonthlyFeeListes={this.props.monthlyFeeListes}
                      classRoomList={this.props.classRoomList}
                      fetchClassRoomGrade={this.props.fetchClassRoomGrade} 
                      feedBackDelete={this.props.deleteFeedBack}
                      fetchFeedBack={this.props.fetchFeedBack}
                      fetchAttendaceTeacher={this.props.fetchAttendaceTeacher}
                      allMonthlyFee={this.props.allMonthlyFee}
                      allstudents={this.props.allstudents}
                      fetchOneMonthlyFee={this.props.fetchOneMonthlyFee}
                      allParents={this.props.allParents}
                      
                /> 
                :
                <HOME   user={this.props.user}/>} 
            />
            <Route path='/users'    render={()=> <User user={this.props.user} />}/>

          
        </Switch> 
        </CSSTransition>
        </TransitionGroup>
       
        <Footer/>
        
        
      </div>
    );}
  }
  
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
