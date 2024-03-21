import React from "react";
import{ BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "../Auths/Login"
import SignUp from "../Auths/SignUp"
import Acceuil from "../Acceuil"
import AccueilProgramme from "../Forms/FormProgramme/accueilProgramme"
import FormProgramme from "../Forms/FormProgramme/formProgramme"
import AccueilEtudes from "../Forms/formEtudes/accueilEtudes"
import FormEtudes from "../Forms/formEtudes/formEtudes"
import FormReussir from "../Forms/formReussir"

export default function Router(){
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Acceuil/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signUp" element={<SignUp/>}/>
                    <Route path="/accueilProgramme" element={<AccueilProgramme/>}/>
                    <Route path="/formProgramme" element={<FormProgramme/>}/>
                    <Route path="/accueilEtudes" element={<AccueilEtudes/>}/>
                    <Route path="/formEtudes" element={<FormEtudes/>}/>
                    <Route path="/formReussir" element={<FormReussir/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}