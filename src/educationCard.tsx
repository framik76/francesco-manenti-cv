import React, {FC} from "react";

import './App.css';

interface EducationCardProps {
    company: string,
    dates: string,
    description: string 
}

const EducationCard: FC<EducationCardProps> = (
    {
        company,
        dates, 
        description
    }
) => {
    return (
        <div className="educationCard">
            <div className="organization">{company}</div>
            <div className="edudates">{dates}</div>
            <div className="description">{description}</div>
        </div>
    );
}

export default EducationCard;