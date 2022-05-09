import React from "react";
import { FaAddressCard, FaBirthdayCake, FaPhone, FaEnvelope, FaFlag, FaLinkedin, FaGithub, FaLink } from "react-icons/fa";
import './App.css';

function PersonalInfo () {
    return (
        <div>
            <div className="section-title">Personal informations</div>
            <div>
                <FaBirthdayCake />
                <span>26 October 1976</span>
            </div>
            <div>
                <FaAddressCard className="icon" />
                <span>Via Beato Luigi Palazzolo, 31 - 24064 Grumello del Monte (BG)</span>
            </div>
            <div>
                <FaFlag />
                <span>Italian</span>
            </div>
            <div>
                <FaPhone />
                <span>+39 347 0546607</span>
            </div>
            <div>
                <FaEnvelope />
                <span>francesco@manenti.net</span>
            </div>
            <div>
                <FaLink />
                <span>www.manenti.net</span>
            </div>
            <div>
                <FaLinkedin />
                <span>https://www.linkedin.com/in/fmanenti/</span>
            </div>
            <div>
                <FaGithub />
                <span>https://github.com/framik76</span>
            </div>
            <div> 
                <span></span>
            </div>
        </div>
    );
}

export default PersonalInfo;