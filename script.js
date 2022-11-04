const showMore = () => {
  document.getElementById("show-more").style.display = "none";
  document.getElementById("show-less").style.display = "block";
  document.querySelectorAll(".hidden-btn").forEach((e) => {
    e.style.display = "inline";
  });
};

const showLess = () => {
  document.getElementById("show-more").style.display = "block";
  document.getElementById("show-less").style.display = "none";
  document.querySelectorAll(".hidden-btn").forEach((e) => {
    e.style.display = "none";
  });
};

const plusSlides = (n) => {
  showSlides((slideIndex += 1));
};

const minusSlides = (n) => {
  showSlides((slideIndex -= 1));
};

let slides = document.querySelectorAll(".different-slides");
const showSlides = (n) => {
  let i;
  if (n > slides.length) {
    slideIndex = 1;
  }
  slides.forEach((e) => {
    e.style.display = "none";
    console.log(e);
  });
  slides[slideIndex - 1].style.display = "flex";

  if (slideIndex == 1) {
    document.getElementById("prev-btn").disabled = true;
  } else {
    document.getElementById("prev-btn").disabled = false;
  }

  if (slideIndex == 3) {
    document.getElementById("next-btn").disabled = true;
  } else {
    document.getElementById("next-btn").disabled = false;
  }
};
setInterval(() => {
  if (slideIndex < slides.length) {
    showSlides(slideIndex++);
  }
}, 9000);

let slideIndex = 1;
showSlides(slideIndex);
