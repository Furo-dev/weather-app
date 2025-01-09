// Code: App.jsx
// Importe les composants depuis les fichiers correspondants
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import liaisonAPI from "./utils/api";
import WeatherInfo from "./components/WeatherInfo";

// Définit le composant App
const App = () => {
  const [weatherData, setWeatherData] = useState(null); // Déclare une variable d'état pour les données météo

  // Définit la fonction handleSearch qui prend en paramètre une ville
  const handleSearch = async (ville) => {
    try {
      const data = await liaisonAPI(ville); // Appelle la fonction liaisonAPI avec la ville
      setWeatherData(data); // Met à jour les données météo avec la réponse de l'API
    } catch (error) {
      console.error("Erreur :", error);
    }
  };

  // Affiche le composant SearchBar et WeatherInfo
  return (
    <div>
      <h1>Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      <WeatherInfo data={weatherData} />
    </div>
  );
};

export default App;
