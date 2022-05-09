import React from 'react';
import {FaRegRegistered} from 'react-icons/fa';
import photo from './photo.jpg';
import './App.css';
import PersonalInfo from './personalInfoCard';
import WorkExperiences from './workExperiencesPanel';
import EducationPanel from './educationPanel';
import LanguagesPanel from './languagesPanel';
import TechSkillsPanel from './techSkillsPanel';
import SoftSkillsPanel from './softSkillsPanel';
import HobbiesPanel from './hobbiesPanel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='headerCv'>
          <div className="App-name">
            Francesco Manenti<br /><span className='subtitle'>Full stack software architect</span>
          </div>
          <img src={photo} width={"150px"} height={"150px"} className="App-photo" alt='Francesco Manenti' />
        </div>
      </header>
      <div className='mainSection'>
        <div className='presentation'>
          <p>I have many years experience working as a software engineer and architect and have completed various projects for different customer industries.</p> 
          <p>I am a Certified Scrum Master and obtained this qualification in 2008. I work in self-organized teams with an innovative approach to work culture.</p>
          <p>Every day I work to satisfy customers and to help them understand and describe what they need for their business.</p>
        </div>
        <div className='personalInfo'>
          <PersonalInfo />
        </div>
        <div className='languages'>
          <LanguagesPanel />
        </div>
        <div className='skills'>
          <TechSkillsPanel />
        </div>
        <div className='skills'>
          <SoftSkillsPanel />
        </div>
        <div className='workExperiences'>
          <WorkExperiences />
        </div>
        <div className='education'>
          <EducationPanel />
        </div>
        <div className='hobbies'>
          <HobbiesPanel />
        </div>
      </div>
      <footer className='App-footer'>
        <div className='footerCv'>
          <div className='footer-description'>
            <span><FaRegRegistered /></span>
            <span>All rights reserved</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
