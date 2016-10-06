var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

var cartPopup = document.querySelector(".modal");

if (cartPopup) {
  var cartOpen = document.querySelector(".btn--js");
  cartOpen.addEventListener("click", function(event) {
    event.preventDefault();
    cartPopup.classList.add("modal__show");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (cartPopup.classList.contains("modal__show")) {
        cartPopup.classList.remove("modal__show");
      }
    }
  });
}

var popup = document.querySelectorAll(".catalog-item__cart-icon");
var popupOpen = document.querySelector(".modal");

if (popup && popupOpen) {
  for (var i = 0; i < popup.length; i++) {
    popup[i].addEventListener("click", function(event) {
      event.preventDefault();
      popupOpen.classList.add("modal__show");
    });
  }

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (popupOpen.classList.contains("modal__show")) {
        popupOpen.classList.remove("modal__show");
      }
    }
  });
}

