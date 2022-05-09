import React from "react";
import HobbyCard from "./hobbyCard";
import './App.css';

const HobbiesPanel = () => {
    return (
        <div className="hobbiesContainer">
            <div className="section-title">Hobbies</div>
            <HobbyCard description="Cooking" />
            <HobbyCard description="Good food" />
            <HobbyCard description="Fitness" />
            <HobbyCard description="Travel" />
            <HobbyCard description="Horses" />
            <HobbyCard description="Mindfulness" />
        </div>
    );
}

export default HobbiesPanel;