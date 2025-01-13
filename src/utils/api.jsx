// Fonction qui permet de récupérer les données météo d'une ville donnée
const liaisonAPI = async (ville) => {
  // Définit la fonction liaisonAPI avec la ville en paramètre
  const apiKey = "your api key";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${apiKey}&units=metric`; // Définit l'URL de l'API météo
  try {
    // Gère les erreurs potentielles
    const response = await fetch(url); // Récupère les données météo depuis l'API
    if (!response.ok) {
      throw new Error("Erreur HTTP : " + response.status);
    }
    const data = await response.json(); // Convertit les données en JSON
    console.log(data);
    return data; // Retourne les données météo
  } catch (error) {
    console.error("Erreur lors de la récupération des données météo:", error);
    return null; // Retourne null en cas d'erreur
  }
};

export default liaisonAPI;
