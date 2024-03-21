import React from "react"

export default function FAQ(){
    return (
        <div className="container mx-auto">
            <h1 className="text-center mt-3">FAQ</h1>
            <div className="accordion mb-5" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button bg-danger bg-opacity-75" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        À quoi sert ce questionnaire?
                    </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>Découvrir si ton choix de programme te conviens et quelles sont les ressources adapté à ta situation. </strong> 
                        Les séries de questions permettent de cibler quelles sont les ressources du cégep les mieux adapté aux différentes situations de chacun. 
                        On parle autant de ressources humaines que matérielles, selon le besoin.
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button bg-danger bg-opacity-75 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Quelles sont les ressources disponibles au cégep?
                    </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>On retrouve entre autre le personnel du cégep, ainsi que certain livres. </strong> 
                        On parle ici d'infimier, psychologue, professeurs et autres intervenants. 
                        Pour ce qui est des receuilles, ils sont disponibles soit à la bibliothèques ou directement chez l'un des intervenants.
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button bg-danger bg-opacity-75 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Pouvons-nous quitter et reprendre le questionnaire plus tard?
                    </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>Oui! </strong> 
                        Les séries de questions peuvent être sauvegarder et terminées plus tard.
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}