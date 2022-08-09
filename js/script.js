let elSiteForm = document.querySelector(".site-form");
let elSiteInput = document.querySelector(".form-input");
let elSiteOutput = document.querySelector(".form-output");
let elSiteList = document.querySelector(".list");

elSiteForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let inputValue = elSiteInput.value;

  let products = [];
  products.push;

  for (products of inputValue) {
    let elItem = document.createElement("li");
    elItem.textContent = inputValue;
    elSiteList.appendChild(elItem);
    elItem += products[i];
  }
});
