let search = document.querySelector("#search");
let result = document.querySelector("#result");

search.addEventListener("click", function () {
  let country = document.querySelector("#country").value.toLowerCase();

  fetch(
    "https://countriesnow.space/api/v0.1/countries/info?returns=currency,capital",
  )
    .then((response) => response.json())

    .then((data) => {
      let countryData = data.data.find(function (item) {
        return item.name.toLowerCase() == country;
      });

      if (countryData) {
        result.innerHTML = `
              <h2>${countryData.name}</h2>
              <p>Capital : ${countryData.capital}</p>
              <p>Currency : ${countryData.currency}</p>
            `;
      } else {
        result.innerHTML = " Country Not Found";
      }
    });
});
