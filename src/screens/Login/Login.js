import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="box-shadow login-form">
                <div className="d-flex flex-direction_column">

                    <input type="text" name="username" placeholder="username" id="username" required />
                    <input type="email" name="email" placeholder="email" id="email" required />
                    <input type="password" name="password" placeholder="password" id="password" />
                    <div className="d-flex justify-content_center"></div>
                    <button type="submit" id="login">Login</button>
                    

                        
                        
                </div>
            </div>
        </div>
    )
}

export default Login;