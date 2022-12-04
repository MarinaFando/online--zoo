function showBurgerMenu() {
    const burgerMenuList = document.querySelector(".burger-container");
    const greyArea = document.querySelector(".grey-area");
  if (burgerMenuList.style.display === "flex") {
    burgerMenuList.style.display = "none";

  } else {
    burgerMenuList.style.display = "flex";
    greyArea.style.display = "block"
  }
}

function closeBurgerMenu() {
    const burgerMenuList = document.querySelector(".burger-container");
    const greyArea = document.querySelector(".grey-area");
  if (burgerMenuList.style.display === "flex") {
    burgerMenuList.style.display = "none";
    greyArea.style.display = "none";
  } else {
    burgerMenuList.style.display = "flex";
  }
}

function showSlides() {
  let cards = document.querySelectorAll(".chooseanimal-card");
  cards.forEach(
    (card) => {
      card.style.order = Math.floor(Math.random() * 7)
    }
  )
}
