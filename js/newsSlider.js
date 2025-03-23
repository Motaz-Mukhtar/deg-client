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


function newsSectionScrolling() {

    const newsContainer = document.querySelector('.news-container');
    if (newsContainer.children.length <= 3) {
        newsContainer.style.justifyContent = 'center';
    }
    else {
        newsContainer.style.justifyContent = 'unset'
        console.log("unset")
    }

    let isDown = false;
    let startX;
    let scrollLeft;
    let isHorizontalScroll = false;

    newsContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        newsContainer.classList.add('active');
        startX = e.pageX - newsContainer.offsetLeft;
        newsContainer.style.cursor = 'grabbing';
        scrollLeft = newsContainer.scrollLeft;
    });



    newsContainer.addEventListener('mouseenter', () => {
        newsContainer.style.cursor = 'grab';
        console.log('enter')
    })
    
    newsContainer.addEventListener('mouseleave', () => {
        isDown = false;
        newsContainer.style.cursor = 'default';
        console.log('leave')
    });
    
    newsContainer.addEventListener('mouseup', () => {
        isDown = false;
        newsContainer.classList.remove('active');
        console.log('up')
    });

    newsContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        console.log('move')
        e.preventDefault();
        const x = e.pageX - newsContainer.offsetLeft;
        const walk = (x - startX) * 2; // Multiplied by 3 to increase scroll speed
        newsContainer.scrollLeft = scrollLeft - walk;
    });
    


    // Handling touch events for mobile
    newsContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX - newsContainer.offsetLeft;
        startY = e.touches[0].pageY - newsContainer.offsetTop;
        scrollLeft = newsContainer.scrollLeft;
        isDown = true;
    });

    newsContainer.addEventListener('touchmove', (e) => {
        if (!isDown) return;

        const x = e.touches[0].pageX - newsContainer.offsetLeft;
        const y = e.touches[0].pageY - newsContainer.offsetTop;
        const xDiff = Math.abs(x - startX);
        const yDiff = Math.abs(y - startY);

        // Only activate horizontal scroll if the user swipes more horizontally than vertically
        if (xDiff > yDiff) {
            isHorizontalScroll = true;
            e.preventDefault();
            const walk = (x - startX) * 3; // Adjust scroll speed if needed
            newsContainer.scrollLeft = scrollLeft - walk;
        } else {
            isHorizontalScroll = false;
        }
    });

    newsContainer.addEventListener('touchend', () => {
        isDown = false;
        isHorizontalScroll = false;
    });
}

newsSectionScrolling();