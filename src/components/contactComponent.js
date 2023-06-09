import React,{ Component} from 'react';
import {Breadcrumb,BreadcrumbItem,Button,Label,Col ,Row}from 'reactstrap'
import { Link } from 'react-router-dom'
import { Control, Form, Errors, actions } from 'react-redux-form';

const required = (val) => val && val.length
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber= (val) => !isNaN(Number(val))
const validEmail = (val)=>/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)

class  Contact extends Component{
    constructor(props){
        super(props)
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(Values) {
        console.log('Current State is: ' + JSON.stringify(Values));
        this.props.postFeedback(Values);
        this.props.resetFeedbackForm(Values.firstName,Values.lastName,Values.phoneNumber,Values.email,Values.reference,Values.contact,Values.feedBack)
        
    }
    

   
    render(){

        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home" >home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>contactus</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            04, gonder ber Road<br />
                            Debre Tabore<br />
                            <i className="fa fa-phone"></i>: +251 9794 5862<br />
                            <i className="fa fa-fax"></i>: +251 9794 5862<br />
                            <i className="fa fa-envelope"></i>: <a href="#">childfollow-up@gmail.com</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+251979458662"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info" href='#'><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="#"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className='row row-content'>
                    <div className='col-12'>
                        <h3>send us your feedback</h3>
                    </div>
                    <div className='col-12 col-md-9'>
                    <Form model="feedback" onSubmit={(values)=>this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstName" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstName"  id="firstName" name="firstName"
                                        placeholder="First Name"
                                        className='form-control'
                                        validators={{
                                            required, minLength: minLength(3),maxLength:maxLength(15)
                                        }}
                                        />
                                        <Errors 
                                        className='text-danger'
                                        model=".firstName"
                                        show='touched'
                                        messages={{
                                            required: 'Required',
                                            minLength: "must be greater than 2 characters",
                                            maxLength:"must be 15 characters or less"
                                        }}
                                         />
                                        
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastName" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastName" id="lastName" name="lastName"
                                        placeholder="LastName"
                                        className='form-control'                                        
                                        validators={{
                                            required, minLength: minLength(3),maxLength:maxLength(15)
                                        }}
                                        />
                                        <Errors 
                                        className='text-danger'
                                        model=".lastName"
                                        show='touched'
                                        messages={{
                                            required: 'Required',
                                            minLength: "must be greater than 2 characters",
                                            maxLength:"must be 15 characters or less"
                                        }}
                                         />
                                        

                                </Col>                        
                            </Row>
                            <Row className="form-group">
                            <Label htmlFor="phoneNumber" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.text model=".phoneNumber" id="phoneNumber" name="phoneNumber"
                                        placeholder="Tel. number"
                                        className='form-control'
                                        validators={{
                                            required, minLength: minLength(3),maxLength:maxLength(15),isNumber
                                        }}
                                        />
                                        <Errors 
                                        className='text-danger'
                                        model=".phoneNumber"
                                        show='touched'
                                        messages={{
                                            required: 'Required',
                                            minLength: "must be greater than 2 nubers",
                                            maxLength:"must be 15 numbers or less",
                                            isNumber:"must be a number"
                                        }}
                                         />
                                        
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className='form-control'
                                        validators={{
                                            required,validEmail
                                        }}
                                         />
                                         <Errors 
                                        className='text-danger'
                                        model=".email"
                                        show='touched'
                                        messages={{
                                            required: 'Required',
                                            validEmail:'invalid email addres'
                                        }}
                                         />
                                        
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 6, offset: 2}}>
                                    <div className='form-check'>
                                        <Label check>
                                            <Control.checkbox model=".contact"
                                                name="contact"
                                                className='form-check.input'
                                                 /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Control.select model=".reference" name="reference"
                                            className='form-control'
                                            >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="feedBack" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".feedBack" id="feedBack" name="feedBack"
                                        rows="12"
                                        className='form-control'/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Contact;