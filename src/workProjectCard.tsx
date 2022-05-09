import React, {FC} from "react";
import parse from 'html-react-parser';

import './App.css';

interface WorkProjectCardProps {
    company: string,
    dates: string,
    projectDescription: string,
    role: string
}

const WorkProjectCard: FC<WorkProjectCardProps> = (
    {
        company,
        dates, 
        projectDescription,
        role
    }
) => {
    return (
        <div className="workCard">
            <div className="company">{company}</div>
            <div className="dates">{dates}</div>
            <div className={role !== "" ? "projectDescription" : "coursesDescription"}>{parse(projectDescription)}</div>
            <div className="role">{role}</div>
        </div>
    );
}

export default WorkProjectCard;