document.querySelector('.menu-bar').addEventListener('click', () => {
    document.querySelector('.nav-bar').style.right = '0px';
});

document.querySelector('.menu-close').addEventListener('click', () => {
    document.querySelector('.nav-bar').style.right = '-500px';
})