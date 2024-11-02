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
    


    // Touch events
    newsContainer.addEventListener('touchstart', (e) => {
        isDown = true;
        newsContainer.classList.add('active');
        startX = e.touches[0].pageX - newsContainer.offsetLeft;
        scrollLeft = newsContainer.scrollLeft;
    });

    newsContainer.addEventListener('touchend', () => {
        isDown = false;
        newsContainer.classList.remove('active');
    });

    newsContainer.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.touches[0].pageX - newsContainer.offsetLeft;
        const walk = (x - startX) * 4; // Adjust scroll speed as needed
        newsContainer.scrollLeft = scrollLeft - walk;
    });
}

newsSectionScrolling();