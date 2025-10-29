// JAVASCRIPT FOR GYM //

document.addEventListener("DOMContentLoaded", function () {
  const slideshows = document.querySelectorAll(".slideshow");

  slideshows.forEach(slideshow => {
    const images = slideshow.querySelectorAll("img");
    let current = 0;

    if (images.length > 0) {
      images[current].classList.add("active");
    }

    setInterval(() => {
      if (images.length > 0) {
        images[current].classList.remove("active");
        current = (current + 1) % images.length;
        images[current].classList.add("active");
      }
    }, 3000);
  });
});
