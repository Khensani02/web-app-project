function handleSearchSubmit(event) {
    event.preventDayfault();
    let searchInput = document.querySelector("#Search-form-input");
    let cityElement = socument.querySelector("#city");
    cityElement.innerHTML = searchInput.value;
}


let searchFormElement = document.querySelector("search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);