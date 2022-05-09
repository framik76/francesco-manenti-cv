import React, {FC} from "react";

import './App.css';
interface HobbyCardProps {
    description: string 
}

const HobbyCard: FC<HobbyCardProps> = (
    {
        description
    }
) => {
    return (
        <div className="hobbyCard">
            <div className="hobbyDescription">{description}</div>
        </div>
    );
}

export default HobbyCard;