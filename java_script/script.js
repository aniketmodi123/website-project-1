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

// by the help of jquery
// $(document).ready(function(){

  
//   $(".toggle-button").click(function(){
//     $(".menu").toggle();
//   });
// });


let flag = 0;
function controler(x) {
  flag = flag + x;
  console.log(flag);
  
  slideshow(flag);
}

slideshow(flag);
function slideshow(num) {
  let slides = document.getElementsByClassName("slides");
  let SliderDotes = document.getElementsByClassName("nivo-control");
  if (num == slides.length) {
    num = 0;
    flag = 0;
  }
  if (num < 0) {
    flag = slides.length - 1;
    num = slides.length - 1;
  }

  for (let y of slides) {
    y.style.display = "none";
  }
  for (let y of SliderDotes) {
    y.style.border = "3px solid #acacac";
  }
  slides[num].style.display = "block";
  SliderDotes[num].style.border = "3px solid #0aaaa0";
  console.log(SliderDotes);
}


function createBlogBox() {
  fetch("java_script/data.json")
    .then((response) => response.json())
    .then(function (data) {
      let blogBox = document.getElementById("blogbox");
      for (const element of data.posts) {
      
        blogBox.innerHTML += `
      <div class="column3">
      <div class="single-blog">
  <div class="blo-image-and-date">
      <img src="${element.img}" alt="">
      <a href="#"> ${element.datetime}</a>
  </div>
  <div class="blog-info">
      <div class="admin">
  
      
          <a href="#"><i class="fa-solid fa-user"></i> By: ${element.author}</a>
      </div>
      <div class="comment">
          <a href="#"><i class="fa-solid fa-heart"></i> ${element.likes_count}</a>
          <a href="#"><i class="fa-solid fa-comment-dots"></i> ${element.comment_count}</a>
      </div>
  </div>
  <div class="blog-text">
      <h3><a href="#">${element.title}</a></h3>
      <p>${element.desc}</p>
      <a href="#">Read More...</a>
  </div>
  </div>
  </div>
  `;
      }
    });
}

createBlogBox();
