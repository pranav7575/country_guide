let searchButton = document.getElementById("search-btn");
let searchName = document.getElementById("country-name");
let result = document.getElementById("result");

searchButton.addEventListener("click", () => {
  let CountryName = searchName.value;

  let finalURL = `https://restcountries.com/v3.1/name/${CountryName}?fullText=true`;

  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
      result.innerHTML = ` <h3 id="name">${data[0].name.common}</h3>
                           <h3 id="native-name">${data[0].name.nativeName.eng.official}</h3>
                       <img src="${data[0].flags.svg}" width="250px" height="250px">
                 `;
    })
    .catch(() => {
      if (CountryName.length == 0) {
        result.innerHTML = `<h3> The input field Cannot be empty </h3>`;
      } else {
        result.innerHTML = `<h3>Please Enter Valid Input</h3>`;
      }
    });
});
