import React from "react";
import EducationCard from "./educationCard";
import './App.css';

const EducationPanel = () => {
    return (
        <div className="educationContainer">
            <div className="section-title">Education & training</div>
            <EducationCard
                company={"Metaprog GmbH"}
                dates="Jan 2008"
                description="Scrum master certification"
            />
            <EducationCard
                company={"Università degli Studi di Milano"}
                dates="Feb 2000"
                description="BA, Diploma universitario in informatica"
            />
            <EducationCard
                company={"Liceo Scientifico “G. Galilei”, Palazzolo sull’Oglio (BS)"}
                dates="Jul 1995"
                description="Diploma di maturità scientifica"
            />
        </div>
    );
}

export default EducationPanel;