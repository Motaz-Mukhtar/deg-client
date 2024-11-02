// document.querySelector('.landing-scroll').addEventListener('click', () => window.scrollBy(0, 600));

function newsSectionScrolling() {
    // const newsContainer = document.querySelector('.news-container');
    // document.querySelectorAll('.news-image-item').forEach((item, index) => {
    //     item.addEventListener('click', () => {
    //         // Calculate the offset needed to center the clicked item
    //         const itemPosition = item.offsetLeft; // Position of clicked item from the left
    //         const itemWidth = item.offsetWidth; // Width of the clicked item
    //         const wrapperWidth = newsContainer.clientWidth; // Width of the wrapper (visible area)
    
    //         // Scroll position needed to center the clicked item
    //         const scrollTo = itemPosition - (wrapperWidth / 2) + (itemWidth / 2);
    
    //         // Smoothly scroll to the calculated position
    //         newsContainer.scrollTo({
    //            left: scrollTo,
    //            behavior: 'smooth'
    //         });
    //     })
    // });

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

    newsContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        newsContainer.classList.add('active');
        startX = e.pageX - newsContainer.offsetLeft;
        newsContainer.style.cursor = 'grabbing';
        scrollLeft = newsContainer.scrollLeft;
    });

    newsContainer.addEventListener('mouseenter', () => {
        newsContainer.style.cursor = 'grab';
    })
    
    newsContainer.addEventListener('mouseleave', () => {
        isDown = false;
        newsContainer.style.cursor = 'default';
    });
    
    newsContainer.addEventListener('mouseup', () => {
        isDown = false;
        newsContainer.classList.remove('active');
    });

    newsContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - newsContainer.offsetLeft;
        const walk = (x - startX) * 3; // Multiplied by 3 to increase scroll speed
        newsContainer.scrollLeft = scrollLeft - walk;
    });
}

newsSectionScrolling();