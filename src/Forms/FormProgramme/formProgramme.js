import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../../Commons/Navbar/pageQuestionnaire";
import Footer from "../../Commons/Footer";
import questions from '../../json/questions.json';
import styles from "../index.module.css";

let groupedQuestions = questions.reduce((acc, question) => {
    const titre = question.titre;
    if (!acc[titre]) {
      acc[titre] = [];
    }
    acc[titre].push(question);
    return acc;
}, {});

export default function FormProgramme(){
    const [currentSection, setCurrentSection] = useState(0);
    const [progress, setProgress] = useState(0);

    // Fonction pour passer à la section suivante
    const showNextSection = () => {
        setCurrentSection(prevSection => {
            const nextSection = prevSection + 1;
            return nextSection < Object.keys(groupedQuestions).length ? nextSection : prevSection;
        });
    };

    // Fonction pour passer à la section précédente
    const showLastSection = () => {
        setCurrentSection(prevSection => {
            return prevSection > 0 ? prevSection - 1 : prevSection;
        });
    };

    // Fonction pour mettre à jour la progression de la barre
    const answerClick = () => {
        setProgress(prevProgress => {
            const newProgress = prevProgress + (1 / questions.length) * 100;
            return newProgress < 0 ? 0 : newProgress > 100 ? 100 : newProgress;
        });
    };

    const questionsElements = Object.entries(groupedQuestions).map(([titre, questionsArray], index) => (
        <div key={titre} style={{ display: index === currentSection ? 'block' : 'none' }} className="w-75">
            <div className="d-flex flex-wrap">
                <h3 className="text-center w-50">{titre}</h3>
                <h3 className="text-center w-25">Vrai</h3>
                <h3 className="text-center w-25">Faux</h3>
            </div>
            {questionsArray.map(question => (
                <div key={question.numQuestion}>
                    <div className="d-flex flex-wrap justify-content-between">
                        <p className="w-50">{question.description}</p>
                        <div className="d-flex flex-wrap justify-content-around w-50">
                            <input type="radio" size="lg" name={`radio_${question.numQuestion}`} value="1" required onClick={answerClick}/>
                            <input type="radio" name={`radio_${question.numQuestion}`} value="0" required onClick={answerClick}/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    ));

    return (
        <div>
            <Navbar/>
            <div className="d-flex justify-content-center">
                <img src="../pictures/choix.jpg" alt="choix" className="mt-2 rounded-pill"/>
            </div>
            <div className="d-flex align-self-center h-100 m-4 p-4">
                <form className="d-flex flex-column mx-4 w-100" action="/accueilEtudes">
                    <div className="d-flex flex-wrap justify-content-center">
                        {questionsElements}
                    </div>
                    <div className="d-flex flex-wrap align-self-center mt-4 pt-4 w-75">
                        <div className="d-flex flex-wrap justify-content-around w-75">
                            <button type="button" className={styles.boutonProgramme} onClick={showLastSection} disabled={currentSection === 0}>Précédent</button>  
                            <div className="align-self-center progress w-50">
                                <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: `${progress}%`}} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between w-25">
                            <button type="button" className={styles.boutonProgramme} onClick={showNextSection} disabled={currentSection === Object.keys(groupedQuestions).length - 1}>Suivant</button>
                            <button type="Submit" className={styles.boutonProgramme} disabled={currentSection !== Object.keys(groupedQuestions).length - 1}>Envoyer</button>
                        </div>                        
                    </div>                 
                </form>
            </div>
            <Footer/>
        </div>
    );
}
