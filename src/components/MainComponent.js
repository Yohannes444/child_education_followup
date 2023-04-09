import React,{ Component } from 'react';
import Header from './headerComponent';
import User from './usercomponent'
import Footer from './footerComponent';
import Signup from './signUpcomponnet';
import SignupTeach from './teacherSignup'
import SignupCash from './cashierSignup';
import HOME from './HomeComponent'
import { Switch, Route,withRouter,matchPath } from "react-router-dom";
import   Contact  from './contactComponent'
import  {connect}  from 'react-redux';
import About from './AboutComponent'
import { actions } from 'react-redux-form';
import { loginUser, parentSignup,cashierSignup,teacherSignup, logoutUser ,postFeedback,fetchuser} from '../redux/ActionCreaters';
import {Transition, CSSTransition, TransitionGroup} from 'react-transition-group'

const mapStateToProps = state => {
  return {
    auth:state.auth,
    user:state.user
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
  fetchuser:()=>dispatch(fetchuser())

});

class  Main extends Component {
  
componentDidMount(){
  this.props.fetchuser()
}

  render(){
    const userView = () => {
      return(
        <User user={this.props.user}/>
      );
    }
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
            <Route path='/signup' component={()=> <Signup  parentSignup={this.props.parentSignup}/>} />
            <Route path= '/signupCashier' component={()=><SignupCash cashierSignup={this.props.cashierSignup}/>}/>
            <Route path='/signupTeacher' component={()=> <SignupTeach teacherSignup={this.props.teacherSignup}/>}/>
            <Route path="/aboutus" component={()=> <About/>}/>
            <Route path='/home' auth={this.props.auth}   component={()=>this.props.auth.isAuthenticated ?  <User user={this.props.user}/> :<HOME  user={this.props.user}/>} />
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
