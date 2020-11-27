const storage = new Storage();
const weather = new Weather(storage.getLocationData().town);
const ui = new UI();

document.addEventListener("DOMContentLoaded", getWeatherInfo);

const submit = document.getElementById("w-change-btn");

submit.addEventListener("click", function () {
  const city = document.getElementById("city");

  weather.changeLocation(city.value);
  storage.setLocationData(city.value);

  getWeatherInfo();

  //! Close modal jQuery
  $("#locModal").modal("hide");
});

function getWeatherInfo() {
  weather
    .getWeather()
    .then((res) => {
      ui.populateHTML(res);
      console.log(res);
    })
    .catch((err) => console.log(err));
}
