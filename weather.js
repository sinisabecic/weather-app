class Weather {
  constructor(city) {
    this.city = city;
    this.key = "048b8937486a4394a3a135203201908";
  }

  async getWeather() {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${this.key}&q=${this.city}&lang=sr`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const weather = await response.json();

    return weather;
  }

  changeLocation(city) {
    this.city = city;
  }
}
