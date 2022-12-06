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

function setValue() {
  const allOptions = document.querySelectorAll(".sliderpoint");
  allOptions.forEach(option => option.classList.remove("select"))

  const amountLong = document.querySelector("#amountlong").value;
  const amountMiddle = document.querySelector("#amountmiddle").value;
  const amountShort = document.querySelector("#amountshort").value;

  const currentAmountLong = document.querySelector(`#sliderlongpoint${amountLong}`).value;
  document.querySelector(`#sliderlongpoint${amountLong}`).classList.add("select")

  const currentAmountMiddle = document.querySelector(`#slidermiddlepoint${amountMiddle}`).value;
  document.querySelector(`#slidermiddlepoint${amountMiddle}`).classList.add("select");

  const currentAmountShort = document.querySelector(`#slidershortpoint${amountShort}`).value;
  document.querySelector(`#slidershortpoint${amountShort}`).classList.add("select")


  if (window.screen.width > 1000) {
    document.querySelector("#anotheramount").value = currentAmountLong
  }
  if (window.screen.width <= 1000 & window.screen.width > 640) {
    document.querySelector("#anotheramount").value = currentAmountMiddle
  }
  if (window.screen.width <= 640) {
    document.querySelector("#anotheramount").value = currentAmountShort
  }
}