document.addEventListener("DOMContentLoaded", function () {
    const img = document.getElementById("img");
  
    img.addEventListener("click", function () {
      if (img.style.border === "2px solid red") {
        img.style.border = "none";
      } else {
        img.style.border = "2px solid red";
      }
    });
  });