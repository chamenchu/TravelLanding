(function () {
  const header = document.querySelector(".header");
  window.onscroll = () => {
    if (window.pageYOffset > 150) {
      header.classList.add("header__active");
    } else {
      header.classList.remove("header__active");
    }
  };
})();

// Burger handler

(function () {
  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector(".header__nav");
  const closeButton = document.querySelector(".header__nav-close");
  burgerItem.addEventListener("click", () => {
    menu.classList.add("header__nav_active");
  });
  closeButton.addEventListener("click", () => {
    menu.classList.remove("header__nav_active");
  });
})();
