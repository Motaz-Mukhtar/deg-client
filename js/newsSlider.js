document.querySelectorAll('.news-item').forEach((newsItem) => {
    let currentIndex = 0;

    const slides = newsItem.querySelectorAll('.slide');

    // Function to show the next or previous slide for the specific news item
    function changeSlide(step) {
        currentIndex += step;

        if (currentIndex >= slides.length) {
            currentIndex = 0; // Loop back to the first slide
        } else if (currentIndex < 0) {
            currentIndex = slides.length - 1; // Loop to the last slide
        }

        // Update the position of the slides for this news item
        updateSlidePosition();
    }

    // Function to update the slide position for this news item
    function updateSlidePosition() {
        const slideWidth = slides[currentIndex].clientWidth;
        newsItem.querySelector('.slides').style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    // Auto-advance the slider for this news item
    function autoSlide() {
        changeSlide(1); // Move to the next slide
        setTimeout(autoSlide, 4000); // Change every 4 seconds
    }

    // Add event listeners to the next and previous buttons
    const nextButton = newsItem.querySelector('.next');
    const prevButton = newsItem.querySelector('.prev');

    if (nextButton) {
        nextButton.addEventListener('click', () => changeSlide(1));
    }

    if (prevButton) {
        prevButton.addEventListener('click', () => changeSlide(-1));
    }

    // Initialize the auto slide for this news item
    autoSlide();
});

// For modal item.
let currentIndex = 0;

// Function to Show the Next or Previous Slide
function changeSlide(step, slides) {
    currentIndex += step;

    if (currentIndex >= slides.length) {
        currentIndex = 0; // Loop back to the first slide
    } else if (currentIndex < 0) {
        currentIndex = slides.length - 1; // Loop to the last slide
    }

    // Update the position of the slides
    updateSlidePosition(slides);
}

// Function to Update the Slide Position
function updateSlidePosition(slides) {
    const slideWidth = slides[currentIndex].clientWidth;

    document.querySelector('.modal .slides').style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Function to Auto-Advance the Slider
function autoSlide(slides) {
    changeSlide(1, slides); // Move to the next slide
    setTimeout(autoSlide, 4000); // Change every 3 seconds
}

// Function to Close the Modal
function closeModal() {
    document.getElementById("zoomModal").style.display = 'none';
    if (document.getElementById("zoomModal").children[1]) {
        document.getElementById("zoomModal").children[1].remove();
    }
}

function zoomIn(element) {
    const modal = document.getElementById("zoomModal");

    const sliders = element.parentElement.cloneNode(true);

    sliders.children[3].style.display = 'none';

    modal.appendChild(sliders);

    const slides = sliders.querySelectorAll('.slide');
    console.log(slides)
    const next = sliders.querySelector('.next');
    const prev = sliders.querySelector('.prev');
    
    next.onclick = () => changeSlide(-1, slides);
    prev.onclick = () => changeSlide(1, slides);
    
    sliders.querySelector('.slides').style.transform = 'translateX(0px)';

    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
}