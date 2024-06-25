// animation for header arrows
const arrowsInHeader = document.querySelectorAll('.arrow');

function animateArrowsInHeader() {
    arrowsInHeader.forEach((arrow) => {
        arrow.classList.remove("bounce");
    });
    arrowsInHeader.forEach((arrow, i) => {
        setTimeout(() => {
            if (arrow.className) {
                arrow.classList.add("bounce");
            }
        }, i * 100 + 100)
        setTimeout(() => {
            if (arrow.className) {
                arrow.classList.add("color-highlight");
                setTimeout(() => {
                    arrow.classList.remove("color-highlight");
                }, 200);
            }
        }, i * 100 + 500)
    });
}

setInterval(animateArrowsInHeader, 2000);

// animation for reviews
let leftArrows = document.querySelectorAll('.left-arrow');
let rightArrows = document.querySelectorAll('.right-arrow');

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

rightArrows.forEach((arrow) => {
    arrow.addEventListener('click', () => {
        updateSelectedReview('right');
    });
});

leftArrows.forEach((arrow) => {
    arrow.addEventListener('click', () => {
        updateSelectedReview('left');
    });
});

// animation for principles
function callback(observations) {
    observations.forEach(observation => {
      if (observation.isIntersecting) { 
        observation.target.classList.add('slide');
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