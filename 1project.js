
let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");


btns.forEach(function (btn) {
  btn.addEventListener("click", function (s) {
    const name = s.currentTarget.classList;
    if (name.contains("decrease")) {
      count--;
    } else if (name.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});




















































// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (s) {
//     const name = s.currentTarget.classList;
//     if (name.contains("decrease")) {
//       count--;
//     } else if (name.contains("increase")) {
//       count++;
//     } else {
//       count = 0;
//     }


    






























