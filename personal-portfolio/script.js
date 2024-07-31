const loader = document.getElementById("preloader");
const switchButton = document.getElementById("dark-mode-switch");
const body = document.body;
const content = document.querySelector(".container");
const navLink = document.querySelectorAll(".nav-link");
const profilePic = document.querySelector(".profile-pic");
const follow = document.querySelector(".follow");
const submitBtn = document.querySelector(".submit");
const layer = document.querySelectorAll('.layer');
const tagName = document.querySelectorAll(".tag-name");
const feeds = document.querySelectorAll(".feeds");

setTimeout(() => {
  // Remove preloader after 3 seconds
  document.getElementById("preloader").style.display = "none";
  // Enable scrolling
  document.querySelector(".content").style.overflow = "auto";
}, 500);

if (localStorage.getItem("darkMode") === "true") {
  switchButton.checked = true;
  body.classList.add("dark-mode");
  content.classList.add("dark-mode");
  profilePic.classList.add("dark-mode");
  follow.classList.add("dark-mode");
  submitBtn.classList.add("dark-mode");
  navLink.forEach((link) => {
    link.classList.add("dark-mode");
  });
  layer.forEach((link) => {
    link.classList.add("dark-mode");
  });
  tagName.forEach((link) => {
    link.classList.add("dark-mode");
  });
  feeds.forEach((link) => {
    link.classList.add("dark-mode");
  });
}

https: switchButton.addEventListener("change", () => {
  if (switchButton.checked) {
    localStorage.setItem("darkMode", "true");
    body.classList.add("dark-mode");
    content.classList.add("dark-mode");
    profilePic.classList.add("dark-mode");
    follow.classList.add("dark-mode");
    submitBtn.classList.add("dark-mode");
    navLink.forEach((link) => {
      link.classList.add("dark-mode");
    });
    layer.forEach((link) => {
      link.classList.add("dark-mode");
    });
    tagName.forEach((link) => {
      link.classList.add("dark-mode");
    });
    feeds.forEach((link) => {
      link.classList.add("dark-mode");
    });
  } else {
    localStorage.setItem("darkMode", "false");
    body.classList.remove("dark-mode");
    content.classList.remove("dark-mode");
    follow.classList.remove("dark-mode");
    profilePic.classList.remove("dark-mode");
    submitBtn.classList.remove("dark-mode");
    navLink.forEach((link) => {
      link.classList.remove("dark-mode");
    });
    layer.forEach((link) => {
      link.classList.remove("dark-mode");
    });
    tagName.forEach((link) => {
      link.classList.remove("dark-mode");
    });
    feeds.forEach((link) => {
      link.classList.remove("dark-mode");
    });
  }

});
/* EMAIL VERIFICATION */

document
  .getElementById("subscribeButton")
  .addEventListener("click", function () {
    const emailInput = document.getElementById("email");
    const errorMessage = document.getElementById("error-message");
    const emailValue = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue)) {
      errorMessage.textContent = "Please enter a valid email address.";
      errorMessage.style.display = "block";
      emailInput.style.borderColor = "red";
    } else {
      errorMessage.textContent = "";
      errorMessage.style.display = "none";
      emailInput.style.borderColor = "#ccc";
      alert("Subscribed successfully with email: " + emailValue);
    }
  });

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".nav-link");
  const bookmarkInfos = document.querySelectorAll(".container-inner");
  const container = document.querySelector(".content-section");
  let currentIndex = 0;

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      currentIndex = index;
      updateBookmarkInfo();
    });
  });

  function updateBookmarkInfo() {
    const offset = -currentIndex * 100;
    bookmarkInfos.forEach((info) => {
      info.style.transform = `translateX(${offset}%)`;
    });
  }

  // Initialize the first slide
  updateBookmarkInfo();
});
