import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../../Commons/Navbar/pageQuestionnaire";
import Footer from "../../Commons/Footer";
import formEtudes from '../../json/formEtudes.json';
import styles from "./index.module.css"

let groupedId = formEtudes.reduce((acc, section) => {
    const questions = section.questions;
    questions.forEach(question => {
        const id = question.id;
        if (!acc[id]) {
            acc[id] = [];
        }
        acc[id].push(question);
    });
    return acc;
}, {});

export default function FormEtudes(){
    const [currentSection, setCurrentSection] = useState(0);

    // Fonction pour passer à la section suivante
    const showNextSection = () => {
        setCurrentSection(prevSection => {
            const nextSection = prevSection + 1;;
            return nextSection < Object.keys(groupedId).length ? nextSection : prevSection;
        });
    };

    // Fonction pour passer à la section précédente
    const showLastSection = () => {
        setCurrentSection(prevSection => {
            return prevSection > 0 ? prevSection - 1 : prevSection;
        });
    };

    const questionsElements = Object.entries(groupedId).map(([id, questionsArray], index) => (
        <div key={id} style={{ display: index === currentSection ? 'block' : 'none' }} className="w-75">
            {questionsArray.map(question => (
                <div key={question.id}>
                    <div className="d-flex justify-content-center mb-3 w-100">
                        <div className={styles.title}>
                            <h1 className="fw-bolder">{question.titre}</h1>
                            <h4 className="text-center fw-bolder">{question.sousTitre}</h4>
                        </div>
                    </div>
                    <div>
                        {question.questions.map(subQuestion => (
                            <div key={subQuestion.id}>
                                <p className="text-center">{subQuestion.enonce}</p>
                                <textarea className="form-control mb-3" required></textarea>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    ));
    
    

    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div className="d-flex flex-wrap justify-content-between m-4 p-4">
                <form className="d-flex flex-column mx-4 w-100" action="/formReussir">
                    <div className="d-flex flex-wrap justify-content-center">
                        {questionsElements}
                    </div>
                    <div className="d-flex flex-wrap align-self-center mt-4 pt-4 w-75">
                        <div className="d-flex flex-wrap justify-content-around w-75">
                            <button type="button" className="btn btn-dark" onClick={showLastSection} disabled={currentSection === 0}>Précédent</button>  
                            <div class="align-self-center progress w-50">
                                <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: "10%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between w-25">
                            <button type="button" className="btn btn-dark ms-5" onClick={showNextSection} disabled={currentSection === Object.keys(groupedId).length - 1}>Suivant</button>
                            <button type="Submit" className="btn btn-dark" disabled={currentSection !== Object.keys(groupedId).length - 1}>Envoyer</button>
                        </div>                        
                    </div>                 
                </form>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}