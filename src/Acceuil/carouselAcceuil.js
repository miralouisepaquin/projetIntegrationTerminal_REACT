import React from "react"
import styles from "./index.module.css"

export default function CarouselAcceuil(){
    return (
        <div className={styles.backGroundCaroussel}>
            <div className="d-flex">
                <div className="d-flex flex-column align-self-center w-50 p-5">
                    <h1 className="text-center">Mon programme d'études est-il un choix significatif pour moi?</h1>
                    <p className="text-center">Viens découvrir si ton choix de programme te conviens et quelles sont les ressources adapté à ta situation.</p>              
                    <form action="/Login" method="get" className="d-flex justify-content-center">
                        <button type="submit" className={styles.boutonCegep}>Commencer</button>
                    </form>
                </div>              
                <div id="carouselExampleFade" className="carousel slide carousel-fade w-50 p-4" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="5000">
                            <img src="/pictures/students1.jpg" className="d-block rounded-pill w-100" alt="students1"/>
                        </div>
                        <div className="carousel-item" data-bs-interval="5000">
                            <img src="/pictures/students2.jpg" className="d-block rounded-pill w-100" alt="students2"/>
                        </div>
                        <div className="carousel-item" data-bs-interval="5000">
                            <img src="/pictures/students3.jpg" className="d-block rounded-pill w-100" alt="students3"/>
                        </div>
                        <div className="carousel-item" data-bs-interval="5000">
                            <img src="/pictures/students4.jpg" className="d-block rounded-pill w-100" alt="students4"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}