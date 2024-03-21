import React from "react"
import styles from "./index.module.css"

export default function Footer(){
    return (
        <div className={styles.backGround}>
            <div class="d-flex justify-content-center navbar navbar-inverse navbar-fixed-bottom w-100">
                    <p class="navbar-text text-center">&copy; Mira Paquin</p>
            </div> 
        </div>   
    )
}