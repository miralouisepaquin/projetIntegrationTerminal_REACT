import React from "react";
import Navbar from "../Commons/Navbar/pageQuestionnaire";
import Footer from "../Commons/Footer";
import formReussir from '../json/formReussir.json';
import actions from '../json/actions.json';
import ressources from "../json/ressources.json";
import { motion } from "framer-motion";

let formReussirElements = formReussir.map(item => (
    <div className="d-flex flex-column w-75">
        <motion.h3 className="text-center text-danger mx-5"
        animate={{ x: [0, 150, 0], opacity: 1, scale: 1 }}
        transition={{
          duration: 5,
          delay: 0.3,
          ease: [0.5, 0.71, 1, 1.5],
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        whileHover={{ scale: 1.2 }}>{item.titre}</motion.h3>
        <p className="text-center mx-5">{item.directive}</p>
        <div className="align-self-center bg-secondary bg-opacity-75 rounded-pill w-75">
            <p className="text-center text-white mt-2">{item.instruction[0]}</p>
            <p className="text-center text-white">{item.instruction[1]}</p>
        </div>
    </div>
));

// Function to get actions for a specific question
const getActionsForQuestion = (questionActions) => {
    return questionActions.map(actionId => {
        const action = actions.find(action => action.id === actionId);
        return (
            <div key={action.id} className="d-flex flex-wrap justify-content-around">
                <input className="align-self-baseline" type="checkbox" name={`radio_${action.id}`} autoComplete="off"></input>
                <p className="align-self-baseline lh-2 w-75">{action.action}</p>
            </div>
        );
    });
};

// Function to get ressources for a specific question
const getRessourcesForQuestion = (questionRessources) => {
    return questionRessources.map(actionId => {
        const action = ressources.find(action => action.id === actionId);
        return (
            <div key={action.id} className="d-flex flex-wrap justify-content-around">
                <input className="align-self-baseline" type="checkbox" name={`radio_${action.id}`} autoComplete="off"></input>
                <p className="align-self-baseline lh-2 w-75">{action.action}</p>
            </div>
        );
    });
};

let groupedFacteur = formReussir.reduce((acc, section) => {
    const questions = section.questions;
    questions.forEach(question => {
        const facteur = question.facteur;
        if (!acc[facteur]) {
            acc[facteur] = [];
        }
        acc[facteur].push(question);
    });
    return acc;
}, {});

export default function FormReussir() {
    const reussirElements = Object.entries(groupedFacteur).map(([facteur, questionsArray], index) => (
        <div key={facteur} className="w-75">
            <div>
                {questionsArray.map(question => (
                    <div key={question.facteur} className="d-flex flex-wrap justify-content-center">
                        <div className="d-flex flex-wrap justify-content-center mt-2 pt-2 bg-primary rounded-top-3 bg-opacity-50 w-100">
                            <h5 className="text-center mx-2">{question.facteur}</h5>
                            <h6 className="align-self-center text-center mx-2">{question.titre}</h6>
                        </div>
                        <div className="d-flex flex-wrap w-100 mb-2">
                            <div className="d-flex flex-column border w-50">
                                <h6 className="text-center border">Actions personnelles</h6>
                                {getActionsForQuestion(question.actions)}                              
                            </div>
                            <div className="border w-50">
                                <h6 className="text-center border">Action du collège</h6>                                
                                {getRessourcesForQuestion(question.ressources)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>           
        </div>
    ));

    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div className="d-flex flex-wrap justify-content-between m-4 p-4">
                <form className="d-flex flex-column mx-4 w-100" action="/">
                    <div className="d-flex flex-wrap justify-content-center">
                        {formReussirElements}
                        {reussirElements}
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="Submit" className="btn btn-dark w-50">Envoyer</button>                      
                    </div>                 
                </form>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}