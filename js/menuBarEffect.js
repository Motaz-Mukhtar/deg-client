document.querySelector('.menu-bar').addEventListener('click', () => {
    document.querySelector('.nav-bar').style.right = '-200px';
});

document.querySelector('.menu-close').addEventListener('click', () => {
    document.querySelector('.nav-bar').style.right = '-600px';
})