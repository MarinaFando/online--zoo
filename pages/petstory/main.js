function showBurgerMenu() {
  const burgerMenuList = document.querySelector(".burger-container");
  const greyArea = document.querySelector(".grey-area");
  burgerMenuList.style.display = "flex";
  greyArea.style.display = "block"
}

function closeBurgerMenu() {
  const burgerMenuList = document.querySelector(".burger-container");
  const greyArea = document.querySelector(".grey-area");
  burgerMenuList.style.display = "none";
  greyArea.style.display = "none";
}

function showPopup(id) {
  const testimonialsPopupCard = document.querySelector(`#${id}`);
  const greyArea = document.querySelector(".grey-popuparea");
  testimonialsPopupCard.style.display = "flex";
  greyArea.style.display = "block";
}

function closePopup(id) {
  const testimonialsPopupCard = document.querySelector(`#${id}`);
  const greyArea = document.querySelector(".grey-popuparea");
  testimonialsPopupCard.style.display = "none";
  greyArea.style.display = "none";
}

function closeAllPopups() {
  document.querySelectorAll(".popupcard-container")
  .forEach((popup) => closePopup(popup.id));
}
