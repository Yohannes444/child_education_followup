import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import { Chat } from '@material-ui/icons';
import { Link } from 'react-router-dom';


//const green = '#171d33';
const green ='#5888b9'
const yellow ='#dda610';
const black = '#000000';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false,
            isChatLoaded:false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handlChatClicked = this.handlChatClicked.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handlChatClicked(){
       
        this.setState({
            isChatLoaded: false
        })

    }
    handleLogin(event) {
        this.toggleModal();
        this.props.loginUser({username: this.username.value, password: this.password.value});
        event.preventDefault();
    }
    
    handleLogout() {
        this.props.logoutUser();
    }
   

    render() {
        return(
            <div>
            <React.Fragment >
                <Navbar style={{backgroundColor: green}} dark expand="md">
                    <div  className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand  href="/">
                            <img src="assets/images/logo.png"  width="20"
                                alt="Ristorante Con Fusion" />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"></span> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-info fa-lg"></span> About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card fa-lg"></span> Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    { !this.props.auth.isAuthenticated ?
                                        <div>
                                          <Button outline className="btn" style={{backgroundColor: yellow}} onClick={this.toggleModal}>
                                            <span className="fa fa-sign-in fa-lg"></span> Login
                                            {this.props.auth.isFetching ?
                                                <span className="fa fa-spinner fa-pulse fa-fw" ></span>
                                                : null
                                            }
                                        </Button>
                                        <NavLink outline className="btn btn-border" style={{backgroundColor: yellow}} to='/signup'>
                                            <span  className="fa fa-sign-un fa-lg "></span> Signup
                                            
                                        </NavLink>
                                        </div>
                                        :
                                        <div>
                                           {this.props.user.user && (this.props.user.user.teacher || this.props.user.user.parent) && (
                                                <Button  style={{backgroundColor: green, border: "none"}}  onClick={ this.handlChatClicked}>
                                                 <Link to="/chat"><Chat   style={{color: yellow}} /></Link> 
                                                </Button>
                                            )}

                                            
                                            <div style={{color: yellow}} className="navbar-text mr-3">{this.props.auth.user.username}</div>

                                            <Button style={{backgroundColor: yellow}}  outline onClick={this.handleLogout}>
                                                <span  className="fa fa-sign-out fa-lg"></span> Logout
                                                {this.props.auth.isFetching ?
                                                     <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                                    : null
                                                }
                                            </Button>
                                        </div>
                                    }

                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                
                <Modal style={{color: black}}  isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username" required
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"required
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                          
                            <Button type="submit" value="submit"  active={true} color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
            </div>
        );
    }
}

export default Header;