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
    // const slideWidth = slides[currentIndex].clientWidth;
    const slideWidth = document.querySelector('.slides').clientWidth;

    document.querySelector('.slides').style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    console.log(document.querySelector('.slides'))
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
    console.log(element)
    const imgSrc = element.previousElementSibling.previousElementSibling.previousElementSibling.children[currentIndex].src;
    modal.style.display = "flex";
    modalImg.src = imgSrc;
}

// Function to Close the Modal
function closeModal() {
    document.getElementById("zoomModal").style.display = 'none';
    if (document.getElementById("zoomModal").children[1]) {
        document.getElementById("zoomModal").children[1].remove();
    }
}

// function changeIMGSrc (element, from) {
//     element.src = from.src;
// }

// function zoomIn(element) {
//     const modal = document.getElementById("zoomModal");
    

//     const sliders = element.previousElementSibling.previousElementSibling.previousElementSibling.cloneNode(true);

//     console.log(sliders)

//     sliders.className = 'slides-zoomIn'
//     sliders.style.translateX = '700px';

//     modal.appendChild(sliders)

//     sliders.style.translate = '0px';
//     // sliders.children[0].id = 'zoomedImage';
//     // sliders.children[0].className = 'modal-content';

//     // sliders.children[1].id = 'zoomedImage';
//     // sliders.children[1].className = 'modal-content';

//     changeIMGSrc(modal.children[1], sliders.children[0]);


//     sliders.children[0].className = 'slide-zoomIn';
//     sliders.children[1].className = 'slide-zoomIn';

//     sliders.children[1].onclick = () => {
//         changeIMGSrc(modal.children[1], sliders.children[1])
//     }

//     sliders.children[0].onclick = () => {
//         changeIMGSrc(modal.children[1], sliders.children[0])
//     }

//     // sliders.children[1].addEventListener('click', changeIMGSrc(modal.children[1], this));
//     // sliders.children[1].addEventListener('click', changeIMGSrc(modal.children[1], this));


//     modal.style.display = 'block';
// }

function zoomIn(element) {
    const modal = document.getElementById("zoomModal");
    

    const sliders = element.parentElement.cloneNode(true);

    sliders.children[3].style.display = 'none';

    modal.appendChild(sliders);

    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
}