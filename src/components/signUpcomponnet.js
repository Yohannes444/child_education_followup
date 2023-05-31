import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import styles from "./styles.module.css";
import {  Control,LocalForm } from 'react-redux-form';
import { Loading } from './loadingComponent'
//import RenderLeader from './RenderLeader'
import { toast } from "react-toastify";
class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "firstName" ) {
          // Remove non-alphabetic characters using regex
          const lettersOnly = /^[a-zA-Z]+$/.test(value);
          this.setState({ [name]: value, firstNameError: !lettersOnly  });
        }else if ( name === "lastName") {
            // Remove non-alphabetic characters using regex
            const lettersOnly = /^[a-zA-Z]+$/.test(value);
            this.setState({ [name]: value, lastNameError: !lettersOnly  });
          }else if (name === "username") {
            const startsWithLetter = /^[a-zA-Z]/.test(value);
            this.setState({ [name]: value, usernameError: !startsWithLetter });
          }else if (name === "email") {
            const startsWithLetter = /^[a-zA-Z]/.test(value);
            this.setState({ [name]: value, emailError: !startsWithLetter });
          }else if (name === "password") {
            const isPasswordValid = value.length >= 6;
            this.setState({ [name]: value, passwordError: !isPasswordValid });
          }  else {
          this.setState({ [name]: value });
        }
      }
    

    async handleSubmit(event) {
        const { firstName,lastName,email,username, password} = this.state;

        const parent = { firstName,lastName,email,username, password};
      console.log(parent)
        
      this.props.parentSignup(parent);
        this.setState({
            firstName: "",
            lastName: "",
            email: "",
            username:"",
            password: "",
        });
    }

   
    
    render() {
        if (this.props.parentSign.isLoading) {
            return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>add parent account </BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (this.props.parentSign.errMess) {
          toast.error(this.props.parentSign.errMess)
          this.props.refreshState()
           
        }
        else if (this.props.parentSign.parentADD){
            this.props.refreshState()
            toast.success("New parent account has been add  please confirm your email")
           
        }
        else{
        return(
        <div className="container bg-f5f5f5">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>signup</BreadcrumbItem>
                </Breadcrumb>
            </div>
            
            <div className="row row-content">
                <div className={styles.signup_container}>
                <div className={styles.signup_form_container}>
                    <div className={styles.left}>
                        <h1 style={{color:'#f1d21c'}}>Welcome</h1>
                        
                    </div>
                    <div className={styles.right}>
                     
                        <LocalForm className={styles.form_container} onSubmit={(values) => this.handleSubmit(values)}>
                    <h1 style={{ color: '#f1d21c' }}>Create Account</h1>
                    <Control.text
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="First Name"
                      model=".firstName"
                      value={this.state.firstName}
                      onChange={this.handleChange}
                      required
                      className={styles.input}
                    />
                    {this.state.firstNameError && <div className={styles.error}>firsNname must be only caracters</div>}

                    <Control.text
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Last Name"
                      model=".lastName"
                      value={this.state.lastName}
                      onChange={this.handleChange}
                      required
                      className={styles.input}
                    />
                    {this.state.lastNameError && <div className={styles.error}>lastName must be only caracters</div>}

                    <Control.text
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      model=".email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      required
                      className={styles.input}
                    />
                    {this.state.emailError && <div className={styles.error}>email must start with a letter</div>}
                    <Control.text
                      name="username"
                      type="text"
                      placeholder="Username"
                      model=".username"
                      value={this.state.username}
                      onChange={this.handleChange}
                      required
                      className={styles.input}
                    />
                    {this.state.usernameError && <div className={styles.error}>Username must start with a letter</div>}

                    <Control.password
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      model=".password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      required
                      className={styles.input}
                    />
                    {this.state.passwordError && <div className={styles.error}>Password must be at least 6 characters long</div>}

                    <button type="submit" className={styles.green_btn}>
                      Sign Up
                    </button>
                  </LocalForm>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )}
        };
}

export default Signup;    
 
