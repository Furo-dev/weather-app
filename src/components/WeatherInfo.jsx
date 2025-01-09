import PropTypes from "prop-types";

// Définit le composant WeatherInfo
const WeatherInfo = ({ data }) => {
  if (!data) {
    // Vérifie si les données météo sont nulles
    return null;
  } else {
    const { name, weather, main, wind } = data;
    const { description, icon } = weather[0];
    // Affiche les données météo
    return (
      <div>
        <h2>{name}</h2>
        <div className="weather-info">
          <p>{description}</p>
          <img
            src={`https://openweathermap.org/img/wn/${icon}.png`}
            alt="Weather icon"
          />
        </div>
        <p>Température : {main.temp}°C</p>
        <p>Humidité : {main.humidity}%</p>
        <p>Vitesse du vent : {wind.speed} m/s</p>
      </div>
    );
  }
};
WeatherInfo.propTypes = {
  data: PropTypes.object, // La prop data doit être un objet
};
export default WeatherInfo;
