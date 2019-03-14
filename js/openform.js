
  var link = document.querySelector(".button-open-form");
  var popup = document.querySelector(".index-search-form");
  var checkin = document.querySelector("[name=check-in]");
  var checkout = document.querySelector("[name=check-out]");
  var adults = document.querySelector("[name=value-adults]");
  var children = document.querySelector("[name=value-children]");


  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("search-form-open");
  });
  popup.addEventListener("submit", function (evt) {
    if (!checkin.value || !checkout.value || !adults.value || !children.value){
      evt.preventDefault();
      popup.classList.remove("index-form-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("index-form-error");
    }
  });
