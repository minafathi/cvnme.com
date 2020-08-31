import React from 'react';
import './LoginBox.css';

import { NavLink } from 'react-router-dom';



const loginBox = (props) => {

    return (
        <div className="form-group LoginBoxIn">
            
            <input 
                type="email" 
                className="form-control" 
                placeholder="Username" 
                required />
            <input 
                type="password" 
                className="form-control" 
                placeholder="Password" 
                required />
            <NavLink to="/home" exact>
                <button 
                    className="btn btn-primary block full-width m-b LoginBtn">                
                        Login
                </button>
            </NavLink>
            <a href="#">
                <small className="Forgot">Forgot password?</small>
            </a>
            <p className="text-muted text-center">
                <small className="AccountQues">Do not have an account?</small>
            </p>
            <a className="btn btn-sm btn-white btn-block CreateBtn" href="register.html">Create an account</a>

            <p className="m-t">
                <small className="Ins">Inspinia we app framework base on Bootstrap 3 &copy; 2014</small>
            </p>
        </div>
    );
};

export default loginBox;