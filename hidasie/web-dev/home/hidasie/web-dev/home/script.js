let allvalues = document.querySelectorAll(".value");
//start forwach loop for displaying the animated values
allvalues.forEach((singlevalue) => {
  let startValue = 0;
  let endValue = parseInt(singlevalue.getAttribute("data-value"));
  let duration = Math.floor(2000 / endValue);

  // counter for inceasing the values and display

  let counter = setInterval(function () {
    startValue += 1;
    singlevalue.textContent = startValue;
    //Clearing the interval

    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

const topMenu = document.querySelector(".topNav");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

menuBtn.addEventListener("click", () => {
  topMenu.style.display = "block";
  topMenu.style.overflowY = "scroll";
});
closeBtn.addEventListener("click", () => {
  topMenu.style.display = "none";
});

// themeToggler
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");
  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});
