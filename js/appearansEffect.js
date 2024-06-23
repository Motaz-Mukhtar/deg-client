const headerContainer = document.querySelectorAll(".up");


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
containersAppear();