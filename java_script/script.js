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
