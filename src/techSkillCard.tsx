import React, {FC} from "react";

import './App.css';
interface TechSkillCardProps {
    logo: string,
    description: string 
}

const TechSkillCard: FC<TechSkillCardProps> = (
    {
        logo,
        description
    }
) => {
    return (
        <div className="techSkillCard">
            <div className="logoSkill"><img src={logo} alt={logo} width="100px" /></div>
            <div className="descriptionSkill">{description}</div>
        </div>
    );
}

export default TechSkillCard;