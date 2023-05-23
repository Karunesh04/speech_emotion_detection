const signInBtnLink = document.querySelector(".signInBtn-link"),
  signUpBtnLink = document.querySelector(".signUpBtn-link"),
  wrapper = document.querySelector(".wrapper");

signUpBtnLink.addEventListener("click", () => {
  wrapper.classList.toggle("active");
});

signInBtnLink.addEventListener("click", () => {
  wrapper.classList.toggle("active");
});
