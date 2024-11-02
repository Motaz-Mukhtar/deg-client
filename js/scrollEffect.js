// document.querySelector('.landing-scroll').addEventListener('click', () => window.scrollBy(0, 600));

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