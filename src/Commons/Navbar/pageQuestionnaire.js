import React from "react"

export default function Navbar(){
    return (
        <nav className="navbar navbar-light bg-secondary bg-opacity-10">
        <div className="container-fluid">
          <img src="./pictures/cegepLogo.png" alt="cegepLogo" width="20%"/>
          <form  action="/" method="get" className="d-flex align-self-center">
            <p className="me-4">xxxxxxx@cegeprdl.ca</p>
            <button type="submit" className="btn btn-md btn-dark">Déconnexion</button>
          </form>
        </div>
      </nav>
    )
}