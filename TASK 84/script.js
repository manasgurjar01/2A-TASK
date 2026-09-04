function getWeather() {
  let city = document.querySelector("#city").value;

  fetch("https://geocoding-api.open-meteo.com/v1/search?name=" + city)
    .then((response) => response.json())

    .then((data) => {
      let lat = data.results[0].latitude;
      let lon = data.results[0].longitude;

      fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=" +
          lat +
          "&longitude=" +
          lon +
          "&current=temperature_2m",
      )
        .then((response) => response.json())

        .then((weather) => {
          document.querySelector("#result").innerText =
            "Temperature: " + weather.current.temperature_2m + "°C";
        });
    });
}
