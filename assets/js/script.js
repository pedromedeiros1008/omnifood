// console.log("Hello world!");

// const myName = "Pedro Medeiros";
// const h1 = document.querySelector(".heading-primary");
// console.log(myName);
// console.log(h1);

// h1.addEventListener("click", function () {
//   h1.textContent = myName;
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem";
// });

// ========KEEPEING THE YEAR IN THE FOOTER UPDATED========
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
