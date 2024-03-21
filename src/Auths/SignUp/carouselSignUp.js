import React from "react"

export default function CarouselSignUp(){
    return (
        <div className="d-flex w-100">              
            <div id="carouselExampleFade" className="carousel slide carousel-fade w-100 p-2" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="5000">
                        <img src="/pictures/80frontenac.jpg" className="d-block" alt="80frontenac"/>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img src="/pictures/bibliotheque.jpg" className="d-block" alt="bibliotheque"/>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img src="/pictures/carefour.jpg" className="d-block" alt="carefour"/>
                    </div>
                </div>
            </div>
        </div>
    )
}