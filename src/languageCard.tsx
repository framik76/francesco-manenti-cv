import React, {FC} from "react";

import './App.css';
interface LanguageCardProps {
    flag: string,
    description: string 
}

const LanguageCard: FC<LanguageCardProps> = (
    {
        flag,
        description
    }
) => {
    return (
        <div className="languageCard">
            <div className="flag"><img src={flag} alt={flag} width="100px" /></div>
            <div className="description">{description}</div>
        </div>
    );
}

export default LanguageCard;