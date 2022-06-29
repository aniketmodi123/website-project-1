
let cont = document.querySelector(".toggle-button");
cont.addEventListener("click", () => {
  console.log("click");
  
  let ul = document.querySelector(".menu");
  if (ul.style.display != "none") {
    ul.style.display = "none";
  } else {
    ul.style.display = "block";
  }
});
