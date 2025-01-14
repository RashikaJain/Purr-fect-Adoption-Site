var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
      this.parentElement.classList.toggle("active");

var pannel = this.nextElementSibling;

if (pannel.style.display === "block") {
  pannel.style.display = "none";
  }
else {
  pannel.style.display = "block";
  }
  });
}
