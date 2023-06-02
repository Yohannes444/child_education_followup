import React from 'react';
import './homePage.css';
import { Jumbotron, Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

const Home = (props) => {
  return (
    <div>
      <Jumbotron style={{ backgroundImage: `url('assets/images/ppp_7_15001x700.jpg')` }}>
        <div className="container">
          <div className="row row-welcome-message">
            <div className="col-12 col-sm-6">
              <h1 className="section-header-2">Child Education Follow-up System</h1>
              <p>We provide valuable resources and support to empower parents in fostering their child's growth and development.</p>
            </div>
          </div>
        </div>
      </Jumbotron>
      <div className="container">
  <div className="row align-items-center">
    <div className="col-md-6">
      <div className="left-content">
        <h2 className="section-header">Child Education Follow-up System</h2>
        <p className="section-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla ex ac tincidunt eleifend. Integer ullamcorper, odio a finibus commodo, elit odio tincidunt massa, vitae dignissim ligula lacus vel nisl. Quisque posuere libero ut nunc varius mollis. Curabitur euismod turpis ac interdum fermentum. Ut vestibulum convallis quam, ac gravida nisl vulputate eu. Nam et placerat lectus, at consequat mi. In nec consequat sapien. Proin ac massa quis est lacinia dignissim. Proin ultricies arcu velit, at posuere mi efficitur eu. Integer feugiat tellus neque, at dignissim odio commodo sit amet. Curabitur vehicula nisi quis sagittis fermentum.


        </p>
      </div>
    </div>
    <div className="col-md-6 d-flex justify-content-end">
    <div className="right-content">
  <img className="pulsating-image" src="assets/images/logo.png" width="150px" alt="Image" />
</div>
    </div>
  </div>
</div>


      <section className="py-10">
        <div className="container">
          <h2 className="section-header">A Brief Overview of the System's Features</h2>
          <h3 className="section-header">Our system offers a variety of services designed to support your child's education. The services they offer include</h3>

          <Container>
            <Row>
              <Col md={6}>
                <Card className="card-itself">
                  <CardImg top src="assets/images/Screenshot 2023-05-31 023830.png" alt="Attendance" />
                  <CardBody>
                    <CardTitle>View Student Attendance</CardTitle>
                    <CardText>Easily track your child's attendance records and stay informed about their presence in school.</CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="card-itself">
                  <CardImg top src="assets/images/Screenshot 2023-05-31 220046.png" alt="Education Materials" />
                  <CardBody>
                    <CardTitle>Access Educational Materials</CardTitle>
                    <CardText>Explore a wide range of educational resources to support your child's learning and development.</CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md={8}>
                <Card className="card-itself">
                  <CardImg top src="assets/images/Screenshot 2023-05-31 025118.png" alt="Assignments and Grades" />
                  <CardBody>
                    <CardTitle>Manage Assignments and Grades</CardTitle>
                    <CardText>Stay updated on your child's assignments, exams, and grades to monitor their progress.</CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="card-itself">
                  <CardImg top src="assets/images/Screenshot 2023-05-30 203426.png" alt="Monthly Fee Payments" />
                  <CardBody>
                    <CardTitle>Make Monthly Fee Payments</CardTitle>
                    <CardText>Conveniently pay your child's monthly fees online, ensuring a seamless financial process.</CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Card className="card-itself">
                  <CardImg top src="assets/images/Screenshot 2023-05-30 220535.png" alt="Child Registration" />
                  <CardBody>
                    <CardTitle>Register Your Child</CardTitle>
                    <CardText>Complete the registration process for your child, providing necessary details and information.</CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="card-itself">
                  <CardImg top src="assets/images/Screenshot 2023-05-31 142826.png" alt="Contact Teachers" />
                  <CardBody>
                    <CardTitle>Contact Teachers</CardTitle>
                    <CardText>Establish direct communication channels with your child's teachers to address any concerns or inquiries.</CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* Remaining sections */}
      <style jsx>{`
        .card-itself:hover {
          transform: scale(1.1);
          transition: transform 0.2s ease-in-out;
        }

        .section-header {
          /* Add your custom styles for section headers */
        }

        .section-header-2 {
          /* Add your custom styles for the second section header */
        }
      `}</style>
    </div>
  );
};

export default Home;
