import React from 'react';
import Welcome from './Welcome/Welcome';
import LoginBox from './LoginBox/LoginBox';
import './Login.css';


const login = (props) => {

    return (
        <div className="Login row">
            {/* <div className=""> */}
                <div className="col-md-6 Welcome">
                    <Welcome />
                </div>
                <div className="col-md-6 LoginBox">
                    <LoginBox />
                </div>
            {/* </div> */}
            
        </div>
        
    ); 
}

export default login;