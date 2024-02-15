import React from "react";

class App extends React.Component {
  state = {
    message: ""
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/users/findAllUsers")
        .then(res => {
            if (!res.ok) {
                throw new Error('Erreur réseau: ' + res.status);
            }
            return res.json();
        })
        .then(data => {
            // Vérifiez que des données ont été retournées
            if (data.length > 0) {
                // Accédez au nom du premier utilisateur dans le tableau
                const firstUser = data[0];
                this.setState({ message: firstUser.nom });
            } else {
                // Si aucun utilisateur n'est retourné, affichez un message d'erreur
                this.setState({ message: "Aucun utilisateur trouvé" });
            }
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données:', error);
            this.setState({ message: "Erreur lors de la récupération des données" });
        });
}

  

  render() {
    return (
      <h1>Hello {this.state.message}!</h1>
    )
  }
}

export default App;
