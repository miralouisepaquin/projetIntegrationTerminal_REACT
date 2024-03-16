import React from "react"
import Navbar from "../../Commons/Navbar/pageAcceuil.js"
import Footer from "../../Commons/Footer"
import CarouselSignUp from "./carouselSignUp.js"

export default function SignUp(){
    //mettre le js ici!
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div className="d-flex flex-wrap h-auto">
                <div className="justify-content-center bg-white w-50">
                    <CarouselSignUp/>
                </div>
                <div className="d-flex flex-column justify-content-center ms-5">
                    <div>
                        <div className="container">
                            <form className="mx-auto mt-20" action="/login" method="get">
                                <div className="text-3xl text-success">
                                    <h2>Veuillez vous inscrire!</h2>
                                </div>
                                <div>
                                    <label htmlFor="">Nom: </label>
                                    <input type="text" className="form-control" required/>
                                </div>
                                <div>
                                    <label htmlFor="">Prénom: </label>
                                    <input type="text" className="form-control" required/>
                                </div>
                                <div>
                                    <label htmlFor="">#DA: </label>
                                    <input type="text" className="form-control" required/>
                                </div>
                                <div className="mb-20">
                                    <label htmlFor="">Mail: </label>
                                    <input type="email" className="form-control" required/>
                                </div>
                                <div className="d-grid d-md-flex justify-content-md-end mt-2">
                                    <button type="submit" className="btn btn-lg btn-primary">S'inscrire</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}