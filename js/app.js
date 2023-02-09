const menuBurger = () => {
  const iconMenu = document.querySelector(".icon-menu");
  const menuBody = document.querySelector(".header__menu");
  const body = document.body;
  iconMenu.addEventListener("click", () => {
    menuBody.classList.toggle("menuBurger-active");
    body.classList.toggle("body-lock");
  });
};

menuBurger();
