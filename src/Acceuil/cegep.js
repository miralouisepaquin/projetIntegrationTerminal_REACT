import React from "react"
import styles from "./index.module.css"

export default function Cegep(){
    return (
        <div className={styles.backGroundCegep}>
            <div className="d-flex justify-content-center">
                <div className="d-flex flex-column m-4 p-4">
                    <div className="d-flex justify-content-center">
                        <h1>Visitez le site du cégep!</h1>
                    </div>                
                    <p>Tu recherches plus d'informations sur nos services et installations, visite le site officiel du cégep de Rivière-du-Loup!</p>
                    <form className="d-flex justify-content-center mx-auto" action="https://www.cegeprdl.ca/" method="get">
                        <button type="submit" className={styles.boutonCegep}>Visitez</button>
                    </form>                                  
                </div> 
            </div>
        </div>        
    )
}