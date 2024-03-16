import React from "react";
import Navbar from "../../Commons/Navbar/pageQuestionnaire";
import Footer from "../../Commons/Footer";
import formEtudes from '../../json/formEtudes.json';
import { motion } from "framer-motion";

let formEtudesElements = formEtudes.map(item => (
    <div className="d-flex flex-column">
      <motion.h3 className="text-center text-primary"
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
        <h3 className="text-center px-5">{item.directive.titre}</h3>
        <p className="text-center m-5">{item.directive.objectifs}</p>
      </div>
      <p className="text-center px-5">{item.directive.but}</p>
    </div>
));

export default function FormEtudes(){
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div className="d-flex flex-wrap w-100 px-5">
                <div  className="align-self-center w-75 mt-5">
                    {formEtudesElements}
                    <form action="/formEtudes" method="get" className="d-flex flex-row-reverse">
                        <button type="Submit" className="btn btn-dark">Commencer</button>
                    </form>
                </div>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 2 }} className="px-2 w-25">
                    <img src="../pictures/streetArt.png" alt="art1" className="img-fluid"/>
                </motion.div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}