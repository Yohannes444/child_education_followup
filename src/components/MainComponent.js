import React,{ Component } from 'react';
import Header from './headerComponent';
import User from './usercomponent'
import Footer from './footerComponent';
import Signup from './signUpcomponnet';
import SignupTeach from './teacherSignup'
import SignupCash from './cashierSignup';
import CreatClassroom  from './CreateClassroomForm';
import HOME from './HomeComponent'
import { Switch, Route,withRouter,matchPath } from "react-router-dom";
import   Contact  from './contactComponent'
import  {connect}  from 'react-redux';
import About from './AboutComponent'
import { actions } from 'react-redux-form';
import { loginUser, parentSignup, cashierSignup, teacherSignup, creatClassroom, logoutUser , postFeedback, fetchuser,refreshState} from '../redux/ActionCreaters';
import {Transition, CSSTransition, TransitionGroup} from 'react-transition-group'


const mapStateToProps = state => {
  return {
    auth:state.auth,
    user:state.user,
    teacherSign:state.teacher,
    cashierSign:state.cashier,
    parent:state.parent,
    classRoom:state.classRoom
  }
  
}

const mapDispatchToProps  = (dispatch) => ({
  
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  postFeedback: (feedback) => dispatch(postFeedback(feedback)),
  loginUser: (creds) => dispatch(loginUser(creds)),
  logoutUser: () => dispatch(logoutUser()),
  parentSignup: (parent) => dispatch(parentSignup(parent)),
  cashierSignup:(cashier)=>dispatch(cashierSignup(cashier)),
  teacherSignup:(teacher)=>dispatch(teacherSignup(teacher)),
  creatClassroom:(classRoom)=>dispatch(creatClassroom(classRoom)),
  refreshState:()=>dispatch(refreshState()),
  fetchuser:()=>dispatch(fetchuser())

});

class  Main extends Component {
  
componentDidMount(){
  this.props.fetchuser()
}

  render(){
  
    console.log(this.props.user)
   
    return (

      <div className="App">
            
         <Header auth={this.props.auth} 
            loginUser={this.props.loginUser} 
            logoutUser={this.props.logoutUser}
             />

          <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
         <Switch>
            <Route exact path='/contactus' component={()=><Contact resetFeedbackForm={this.props.resetFeedbackForm}/>  }/>
            <Route path='/signup' component={()=> <Signup  parentSign={this.props.parent} parentSignup={this.props.parentSignup} refreshState={this.props.refreshState}/>} />
            <Route path= '/signupCashier' component={()=><SignupCash cashierSignup={this.props.cashierSignup} cashierSign={this.props.cashierSign} refreshState={this.props.refreshState}/>}/>
            <Route path='/signupTeacher' component={()=> <SignupTeach teacherSignup={this.props.teacherSignup} teacherSign={this.props.teacherSign} refreshState={this.props.refreshState}/>}/>
            <Route path='/creatClassRoom' component={()=><CreatClassroom classRoom={this.props.classRoom} creatClassroom={this.props.creatClassroom} refreshState={this.props.refreshState} />}/>
            <Route path="/aboutus" component={()=> <About/>}/>
            <Route path='/home' auth={this.props.auth}   
              component={()=>this.props.auth.isAuthenticated ?  
                <User user={this.props.user}
                  teacherSign={this.props.teacherSign}
                  cashierSign={this.props.cashierSign}
                /> 
                :
                <HOME   user={this.props.user}/>} 
            />
            <Route path='/users'   render={()=> <User user={this.props.user} />}/>

          
        </Switch> 
        </CSSTransition>
        </TransitionGroup>
       
        <Footer/>
        
        
      </div>
    );
  }
  
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
