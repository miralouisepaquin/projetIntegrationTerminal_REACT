import React from "react"
import Navbar from "../../Commons/Navbar/pageAcceuil.js"
import Footer from "../../Commons/Footer"
import CarouselSignUp from "./carouselSignUp.js"
import styles from "../index.module.css"

export default function SignUp(){
    //mettre le js ici!
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div className="d-flex flex-wrap h-auto">
                <div className={styles.backGroundCaroussel}>
                    <div className="w-50 p-5">
                        <CarouselSignUp/>
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-center">
                    <div>
                        <div className="container mx-5">
                            <form className="mx-auto mt-20" action="/login" method="get">
                                <div className={styles.titre}>
                                    <h1>Veuillez vous inscrire!</h1>
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
                                <div className="d-flex justify-content-around mt-2">
                                    <button type="submit" className={styles.boutonCegep}>S'inscrire</button>
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