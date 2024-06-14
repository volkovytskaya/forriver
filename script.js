// animation for header arrows
const arrows = document.querySelectorAll('.arrow');

function animateArrows() {
    arrows.forEach((arrow) => {
        arrow.classList.remove("bounce");
    });
    arrows.forEach((arrow, i) => {
        setTimeout(() => {
            if (arrow.className) {
                arrow.classList.add("bounce");
                arrow.classList.add("color-highlight");
                setTimeout(() => {
                    arrow.classList.remove("color-highlight");
                }, i * 100 + 100);
            }
        }, i * 100 + 100)
    });
}

arrows.forEach((arrow) => {
    arrow.classList.remove("bounce");
});

setInterval(animateArrows, 2000);

// animation for reviews
let leftArrow = document.querySelector('.left-arrow');
let rightArrow = document.querySelector('.right-arrow');

const reviews = document.getElementsByClassName('review');

let selectedReview = 0;
reviews[selectedReview].classList.remove('hidden');

function updateSelectedReview(direction) {
    reviews[selectedReview].classList.add('hidden');
    direction === 'right' ? selectedReview++ : selectedReview--;
    if (selectedReview < 0) selectedReview = reviews.length - 1;
    if (selectedReview > reviews.length - 1) selectedReview = 0;
    reviews[selectedReview].classList.remove('hidden');
    reviews[selectedReview].classList.add('pulse');
}

rightArrow.addEventListener('click', () => {
    updateSelectedReview('right');
});

leftArrow.addEventListener('click', () => {
    updateSelectedReview('left');
});

// animation for principles
function callback (observations, observer) {
    observations.forEach(observation => {
      if (observation.isIntersecting) { 
        observation.target.classList.add('appear');
      }   
   });
}
  
let options = {
    root: null, 
    rootMargin: '0px',
    threshold: 0 
}

let observer = new IntersectionObserver(callback, options);

let principles = document.querySelectorAll('.principle');
for (let i = 0; i < principles.length; i++) {
    observer.observe(principles[i]); 
}