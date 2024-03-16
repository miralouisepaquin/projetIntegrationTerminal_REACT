import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../../Commons/Navbar/pageQuestionnaire";
import Footer from "../../Commons/Footer";
import formProgramme from '../../json/formProgramme.json';
import { motion } from "framer-motion";

let formProgrammeElements = formProgramme.map(item => (
    <div className="d-flex flex-column">
        <motion.h3 className="text-center text-danger"
        animate={{ x: [0, 150, 0], opacity: 1, scale: 1 }}
        transition={{
          duration: 5,
          delay: 0.3,
          ease: [0.5, 0.71, 1, 1.5],
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        whileHover={{ scale: 1.2 }}
      >
        {item.titre}
      </motion.h3>
      <div className="border border-dark">
        <h3 className="text-center px-3">{item.directive.titre}</h3>
        <p className="text-center p-5">{item.directive.objectifs}</p>
      </div>
      <p className="text-center px-3">{item.directive.but}</p>
    </div>
));

export default function accueilProgramme(){
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div className="d-flex flex-wrap w-100 px-5">
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 2 }} className="px-2 w-25">
                    <img src="../pictures/art2.jpg" alt="art1" className="img-fluid"/>
                </motion.div>
                <div className="align-self-center w-75">
                    {formProgrammeElements}
                    <form action="/formProgramme" method="get" className="d-flex flex-row-reverse">
                        <button type="Submit" className="btn btn-dark">Commencer</button>
                    </form>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}