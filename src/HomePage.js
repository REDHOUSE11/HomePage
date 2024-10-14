import React from 'react';
import './HomePage.css'; // Import your CSS file
import logo from './logo.png'; // Adjust the path as necessary
import videoSource from './VIDEO MP4.mp4'; // Adjust the path as necessary
import signUpIcon from './Copy of PIC (1).png'; // Adjust the path as necessary

const HomePage = () => {
    return (
        <div>
            <div className="header">
                <div className="signup">
                    <img src={signUpIcon} alt="Sign Up Icon" className="sign-up-icon" />
                    <span>SIGN UP</span>
                </div>
            </div>

            <div className="main-content">
                <video autoPlay muted loop className="background">
                    <source src={videoSource} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="overlay">
                    <div className="content">
                        <img src={logo} alt="Illinois Health Care Logo" className="main-logo" />
                        <h1>ILLINOIS HEALTH CARE</h1>
                        <p>TRAINING CENTRE</p>
                    </div>
                </div>
            </div>

            <div className="scroll-down">
                <i className="fas fa-chevron-down"></i>
            </div>
        </div>
    );
};

export default HomePage;
