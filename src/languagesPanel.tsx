import React from "react";
import LanguageCard from "./languageCard";
import './App.css';
import itaflag from './ita.png';
import ukflag from './uk.png';

const LanguagesPanel = () => {
    return (
        <div className="languageContainer">
            <div className="section-title">Languages</div>
            <LanguageCard
                flag={itaflag}
                description="Mother tongue"
            />
            <LanguageCard
                flag={ukflag}
                description="B1 intermediate level"
            />
        </div>
    );
}

export default LanguagesPanel;