import React from "react"
import Navbar from "../Commons/Navbar/pageAcceuil.js"
import Footer from "../Commons/Footer/indexAcceuil.js"
import FAQ from './faq.js'
import CarouselAcceuil from './carouselAcceuil.js'
import Cegep from './cegep.js'


export default function Acceuil(){
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div className="position-relative">
                <CarouselAcceuil/>
                <FAQ/>
                <Cegep/>
            </div>
            <div className="position-relative">
                <Footer/>
            </div>
        </div>
    )
}