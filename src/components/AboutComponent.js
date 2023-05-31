import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseURL } from "../shared/beasURL";
import {Loading} from "./loadingComponent"

//import RenderLeader from './RenderLeader'

  

    function About(props) {

   /*  const leaders = props.leaders.map((leader) => {
        return (
            <p>Leader {leader.name}</p>
        );
    }); */

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>In 2023, our organization began a transformative journey in child education. With a shared vision of empowering children through knowledge, we pioneered innovative approaches and cutting-edge technologies. Our short yet impactful history is marked by inspiring moments of growth as children discover their potential, develop essential skills, and embrace a love for learning. Looking ahead, we are committed to shaping the future of education, adapting to emerging trends, and building a generation that will shape the world with brilliance and compassion. Together, let's create a brighter future for every child.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">3 Feb. 2023</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">HK temene follow_up.</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$1,250,375</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">40</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">education is not for life education is life itself.</p>
                                <footer className="blockquote-footer">Yogi Berra,
                                <cite title="Source Title">parents are major players in children's life parents shuld be infolved in thir child's education</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Corporate Leadership</h2>
                </div>
                <div className="col-12">
 
                </div>
            </div>
        </div>
    );
}

export default About;    
