import { useState } from "react";
import PropTypes from "prop-types";

// Définit le composant SearchBar
const SearchBar = ({ onSearch }) => {
  const [ville, setVille] = useState(""); // Déclare une variable d'état pour la ville

  // Définit la fonction pour gérer le changement de l'input
  function handleInputChange(e) {
    setVille(e.target.value); // Met à jour la ville avec la saisie utilisateur
  }

  // Définit la fonction pour gérer la recherche
  function handleSearch() {
    if (ville.trim() !== "") {
      onSearch(ville); // Appelle la fonction handleSearch dans App.jsx
      setVille(""); // Réinitialise la valeur de l'input après la recherche
    } else {
      alert("Veuillez entrer une ville !");
    }
  }

  return (
    // Retourne un champ de saisie et un bouton pour rechercher la météo
    <>
      <input
        type="text"
        value={ville}
        onChange={handleInputChange} // Appelle la fonction handleInputChange lors de la saisie
        placeholder="Entrez une ville"
      />
      <button onClick={handleSearch}>Search</button>
    </>
  );
};
// Définit les types des props pour le composant SearchBar
SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired, // La prop onSearch doit être une fonction requise
};

export default SearchBar;
