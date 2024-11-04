// script.js

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

// Function to Show the Next or Previous Slide
function changeSlide(step) {
    currentIndex += step;

    if (currentIndex >= slides.length) {
        currentIndex = 0; // Loop back to the first slide
    } else if (currentIndex < 0) {
        currentIndex = slides.length - 1; // Loop to the last slide
    }

    // Update the position of the slides
    updateSlidePosition();
}

// Function to Update the Slide Position
function updateSlidePosition() {
    const slideWidth = slides[0].clientWidth;

    document.querySelector('.slides').style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Function to Auto-Advance the Slider
function autoSlide() {
    changeSlide(1); // Move to the next slide
    setTimeout(autoSlide, 4000); // Change every 3 seconds
}

// Initialize the Auto Slide
window.onload = function() {
    autoSlide();
};


// Function to Zoom Image
function zoomImage(element) {
    const modal = document.getElementById("zoomModal");
    const modalImg = document.getElementById("zoomedImage");

    const imgSrc = element.previousElementSibling.previousElementSibling.previousElementSibling.children[currentIndex].src;
    modal.style.display = "flex";
    modalImg.src = imgSrc;
}

// Function to Close the Modal
function closeModal() {
    document.getElementById("zoomModal").style.display = 'none';
}
