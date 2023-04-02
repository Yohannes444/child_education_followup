import React,{ Component } from 'react';
import Header from './headerComponent';
import Footer from './footerComponent';
import Signup from './signUpcomponnet';
import HOME from './HomeComponent'
import { Switch, Route,withRouter } from "react-router-dom";
import   Contact  from './contactComponent'
import  {connect}  from 'react-redux';
import About from './AboutComponent'
import { actions } from 'react-redux-form';
import {  handleChange,loginUser, parentSignup, logoutUser ,postFeedback} from '../redux/ActionCreaters';
import {Transition, CSSTransition, TransitionGroup} from 'react-transition-group'

const mapStateToProps = state => {
  return {
    
  }
}

const mapDispatchToProps = dispatch => ({
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  postFeedback: (feedback) => dispatch(postFeedback(feedback)),
  loginUser: (creds) => dispatch(loginUser(creds)),
  logoutUser: () => dispatch(logoutUser()),
  handleChange:()=> dispatch(handleChange()),
  handleSubmit:()=> dispatch(parentSignup())

});

class  Main extends Component {
   
componentDidMount(){
  
}
  render(){
    const HomePage = ()=>{
      return(
        <HOME/>
      )
    }
  

    return (

      <div className="App">
            
         <Header/>
          <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
         <Switch>
            <Route path='/home'  component={()=><HomePage/>} />
            <Route exact path='/contactus' component={()=><Contact resetFeedbackForm={this.props.resetFeedbackForm}/>  }/>
            <Route path='/signup' component={()=> <Signup/>} />
            <Route path="/aboutus" component={()=> <About/>}/>
          
        </Switch> 
        </CSSTransition>
        </TransitionGroup>
       
        <Footer/>
        
        
      </div>
    );
  }
  
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
