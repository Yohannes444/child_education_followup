import React, { Component } from 'react';
import './homePage.css'
import { Jumbotron ,Container,Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';



const Home=(props)=> {
    
    
     
        return(
        <div> 
 
                <Jumbotron style={{backgroundColor: '#3bb19baf',backgroundImage: `url('assets/images/ppp_7_1500x700.png')`}}>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Child Education Follow-up System</h1>
                                <p> We're here to provide parents with valuable resources and information to support their child's education journey. Our goal is to empower you with the tools and knowledge to foster your child's growth and development.</p>
                                
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                  <section>
        <Container className="row">
          <h2>Recent Activities and Updates</h2>
          {/* Display recent activities and updates */}
        </Container>
      </section>

      <section>
       <div>
      <h2 className="section-header">A Brief Overview of the System's Features</h2>
      <h3 className="section-header">
        Our system offers a range of features designed to support parents in their child's education journey. Here are some key functionalities:
      </h3>

      <div>
      <div className="card-container">
        <Card className="card-itself">
          <CardImg top src='assets/images/Screenshot 2023-05-31 023830.png' alt="Attendance" />
          <CardBody>
            <CardTitle>View Student Attendance</CardTitle>
            <CardText>Easily track your child's attendance records and stay informed about their presence in school.</CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg top src='assets/images/Screenshot 2023-05-31 025118.png' alt="Education Materials" />
          <CardBody>
            <CardTitle>Access Educational Materials</CardTitle>
            <CardText>Explore a wide range of educational resources to support your child's learning and development.</CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg top src='assets/images/Screenshot 2023-05-31 023830.png' alt="Assignments and Grades" />
          <CardBody>
            <CardTitle>Manage Assignments and Grades</CardTitle>
            <CardText>Stay updated on your child's assignments, exams, and grades to monitor their progress.</CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg top src='assets/images/ppp_7_1500x700.png' alt="Monthly Fee Payments" />
          <CardBody>
            <CardTitle>Make Monthly Fee Payments</CardTitle>
            <CardText>Conveniently pay your child's monthly fees online, ensuring a seamless financial process.</CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg top src='assets/images/ppp_7_1500x700.png' alt="Child Registration" />
          <CardBody>
            <CardTitle>Register Your Child</CardTitle>
            <CardText>Complete the registration process for your child, providing necessary details and information.</CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg top src='assets/images/ppp_7_1500x700.png' alt="Contact Teachers" />
          <CardBody>
            <CardTitle>Contact Teachers</CardTitle>
            <CardText>Establish direct communication channels with your child's teachers to address any concerns or inquiries.</CardText>
          </CardBody>
        </Card>
      </div>
    </div>
      
    </div>
      </section>

      <section>
        <Container>
          <h2>News and Announcements</h2>
          {/* Display news and announcements */}
        </Container>
      </section>

      <section>
        <Container>
          <h2>Frequently Asked Questions</h2>
          {/* Add a section with frequently asked questions and their answers */}
        </Container>
      </section>

      <section>
        <Container>
          <h2>User Feedback</h2>
          {/* Add a section for users to provide feedback */}
        </Container>
      </section>
            <p>this is from home page wwwwwwwwwwwwwww</p>
        </div>
     )
    
  };
  
  export default Home;
  