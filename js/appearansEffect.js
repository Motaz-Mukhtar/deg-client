const headerContainer = document.querySelectorAll(".up");

console.log(headerContainer);


function containersAppear() {
    let index = 0;
    window.addEventListener('scroll', () => {
        if((headerContainer[index].offsetTop - 600) <= window.scrollY) {
            headerContainer[index].style.cssText = `
            -webkit-transform: translateY(0px);
            transform: translateY(0px);
            opacity: 1;
            transition: 1s;
            `;
            index++;
        }
    })
}

window.addEventListener('load', () => {
    document.querySelector('.load-container').style.cssText = `
        width: 50%;
        transition: 2s;
    `;
    headerContainer[0].style.cssText = `
        -webkit-transform: translateY(0px);
        transform: translateY(0px);
        opacity: 1;
        transition: 1s;
    `;

    headerContainer[1].style.cssText = `
        -webkit-transform: translateY(0px);
        transform: translateY(0px);
        opacity: 1;
        transition: 1s;
        transition-delay: 0.2s;
    `;
});
containersAppear();