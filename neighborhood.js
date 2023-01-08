const restaurants = ["Texas Roadhouse", "Mi Ranchito", "Tucanos", "Umami", "Carrabba's"];
const recommendationBtn = document.querySelector("#recommendation-button");

const getRecommendation = () => {
    const randomIndex = Math.floor(Math.random() * restaurants.length);
    alert(`Try ${restaurants[randomIndex]}!`);
};

recommendationBtn.addEventListener("click", getRecommendation);