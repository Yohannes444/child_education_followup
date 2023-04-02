import React from 'react';
import {Loading} from "./loadingComponent"
import { baseURL } from "../shared/beasURL";
import { FadeTransform } from 'react-animation-components'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';



 function Home(props) {
    
    return(
        <div className="container">
            <div className="row align-items-start">
                This is from the home component
            </div>
        </div>
    );
}

export default Home;