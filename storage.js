class Storage {
  constructor() {
    this.city;
  }
  getLocationData() {
    this.city = localStorage.getItem("city") ?? "Podgorica";

    return {
      town: this.city,
    };
  }

  setLocationData(city) {
    localStorage.setItem("city", city);
  }
}
