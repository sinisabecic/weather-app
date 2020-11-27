class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.icon = document.getElementById("w-icon");
    this.details = document.getElementById("w-details");
    this.humidity = document.getElementById("w-humidity");
    this.uv = document.getElementById("w-uv");
    this.feels = document.getElementById("w-feels-like");
    this.wind = document.getElementById("w-wind");
  }

  populateHTML(weather) {
    this.string.innerHTML = `${weather.current.temp_c} &#8451;`;
    this.humidity.innerHTML = `Relativna vlažnost: ${weather.current.humidity} mBar`;
    this.feels.innerHTML = `Subjektivni osjećaj: ${weather.current.feelslike_c} &#8451;`;
    this.uv.innerHTML = `UV: ${weather.current.uv}`;
    this.wind.innerHTML = `Vjetar: ${weather.current.wind_kph} km/h`;
    this.location.innerText = weather.location.name;
    this.icon.setAttribute("src", weather.current.condition.icon);
  }
}
