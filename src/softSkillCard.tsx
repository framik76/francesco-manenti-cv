import React, {FC} from "react";

import './App.css';
interface SoftSkillCardProps {
    description: string 
}

const SoftSkillCard: FC<SoftSkillCardProps> = (
    {
        description
    }
) => {
    return (
        <div className="softSkillCard">
            <div className="softDescriptionSkill">{description}</div>
        </div>
    );
}

export default SoftSkillCard;