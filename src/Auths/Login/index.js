import React from "react"
import Navbar from "../../Commons/Navbar/pageAcceuil.js"
import Footer from "../../Commons/Footer"
import "./style.css"

export default function Login(){
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div>
                <div className="d-flex flex-coloumn justify-content-center mt-4">
                    <div>
                        <img src="/pictures/loginLogo.jpg" className="d-flex justify-content-center mx-auto rounded-circle" alt="students1"/>
                        <h1 className="d-flex justify-content-center mx-auto">Connexion</h1>
                        <form action="/accueilProgramme" method="get">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Courriel</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" required/>
                            </div>
                            <div className="d-flex flex-row justify-content-center">
                                <p>Pas encore inscrit?</p><a className="ms-2" href="/signUp">Inscrivez-vous ici</a>
                            </div>
                            <button type="submit" class="btn btn-primary d-flex justify-content-center mx-auto">Connexion</button>
                        </form>
                    </div>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}