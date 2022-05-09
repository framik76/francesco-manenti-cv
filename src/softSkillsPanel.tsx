import React from "react";
import SoftSkillCard from "./softSkillCard";
import './App.css';

const SoftSkillsPanel = () => {
    return (
        <div className="softSkillContainer">
            <div className="section-title">Soft skills</div>
            <SoftSkillCard description="Education" />
            <SoftSkillCard description="Kindness" />
            <SoftSkillCard description="Respect" />
            <SoftSkillCard description="Collaboration" />
            <SoftSkillCard description="Propention to help" />
            <SoftSkillCard description="Desire to learn" />
        </div>
    );
}

export default SoftSkillsPanel;