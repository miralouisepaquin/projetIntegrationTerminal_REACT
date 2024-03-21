import React from "react"
import styles from "./index.module.css"

export default function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary bg-opacity-10">
            <div className="navbar-brand ms-4">
                <img src="./pictures/cegepLogo.png" alt="cegepLogo" width="20%"/>
                <a href="/" className={styles.lien}>Accueil</a>
            </div>
            <div class="collapse navbar-collapse me-3">
                <p></p>
            </div>
            <form action="/Login" method="get" className="me-4">
                <button type="submit" className={styles.boutonCegep}>Connexion</button>
            </form>     
        </nav>
    )
}