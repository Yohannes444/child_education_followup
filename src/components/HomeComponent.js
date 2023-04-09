import React, { Component } from 'react';
import User from './usercomponent'



class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
           
        };
        
    }
    
    // check the user account type and render the appropriate component
    render(){
        return(
        <div> 
            <p>this is from home page</p>
            {/* <User user={this.props.user} /> */}
                
              
        </div>
     )}
    
  };
  
  export default Home;
  