let elSiteForm = document.querySelector(".site-form");
let elSiteInput = document.querySelector(".form-input");
let elSiteOutput = document.querySelector(".form-output");
let elSiteList = document.querySelector(".list");
let liLists = document.querySelector(".list-group-item");

let products = [];

elSiteForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  

  let inputValue = elSiteInput.value;

  if (!products.includes(inputValue)) {
    products.push(inputValue);
  }

  elSiteInput.value = "";
  elSiteList.innerHTML = "";

  for (product of products) {
    let elItem = document.createElement("li");
    elItem.setAttribute("class", "list-group-item");
    elItem.textContent = product;
    elSiteList.appendChild(elItem);
  }
  let local = localStorage.setItem("mahsulolar", JSON.stringify(products)) 
});


