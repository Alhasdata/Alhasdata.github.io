const readMoreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".text");

readMoreBtn.addEventListener("click", (e) => {
  text.classList.toggle("show-more");
  if (readMoreBtn.innerText === "Read More") {
    readMoreBtn.innerText = "Read Less";
  } else {
    readMoreBtn.innerText = "Read More";
  }
});


const readMoreBtn2 = document.querySelector(".read-more-btn2");
const text2 = document.querySelector(".text2");

readMoreBtn2.addEventListener("click", (e) => {
  text2.classList.toggle("show-more");
  if (readMoreBtn2.innerText === "Read More") {
    readMoreBtn2.innerText = "Read Less";
  } else {
    readMoreBtn2.innerText = "Read More";
  }
});

const readMoreBtn3 = document.querySelector(".read-more-btn3");
const text3 = document.querySelector(".text3");

readMoreBtn3.addEventListener("click", (e) => {
  text3.classList.toggle("show-more");
  if (readMoreBtn3.innerText === "Read More") {
    readMoreBtn3.innerText = "Read Less";
  } else {
    readMoreBtn3.innerText = "Read More";
  }
});

const readMoreBtn4 = document.querySelector(".read-more-btn4");
const text4 = document.querySelector(".text4");

readMoreBtn4.addEventListener("click", (e) => {
  text4.classList.toggle("show-more");
  if (readMoreBtn4.innerText === "Read More") {
    readMoreBtn4.innerText = "Read Less";
  } else {
    readMoreBtn4.innerText = "Read More";
  }
});

const readMoreBtn5 = document.querySelector(".read-more-btn5");
const text5 = document.querySelector(".text5");

readMoreBtn5.addEventListener("click", (e) => {
  text5.classList.toggle("show-more");
  if (readMoreBtn5.innerText === "Read More") {
    readMoreBtn5.innerText = "Read Less";
  } else {
    readMoreBtn5.innerText = "Read More";
  }
});

const readMoreBtn6 = document.querySelector(".read-more-btn6");
const text6 = document.querySelector(".text6");

readMoreBtn6.addEventListener("click", (e) => {
  text6.classList.toggle("show-more");
  if (readMoreBtn6.innerText === "Read More") {
    readMoreBtn6.innerText = "Read Less";
  } else {
    readMoreBtn6.innerText = "Read More";
  }
});

// *********************
// This Code is for only the floating card in right bottom corner
// **********************

const touchButton = document.querySelector(".float-text");
const card = document.querySelector(".float-card-info");
const close = document.querySelector(".gg-close-r");

touchButton.addEventListener("click", moveCard);
close.addEventListener("click", moveCard);

function moveCard() {
  card.classList.toggle("active");
}
