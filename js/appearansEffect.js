const headerContainer = document.querySelectorAll(".up");

console.log(headerContainer);


function containersAppear() {
    let index = 0;
    window.addEventListener('scroll', () => {
        if((headerContainer[index].offsetTop - 400) <= window.scrollY) {
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
    containersAppear();
    if (window.innerWidth > 770) {
        document.querySelector('.load-container').style.cssText = `
            width: 50%;
            transition: 2s;
        `;
    }

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

// navBarDropdown

function navBarDropdown() {
    const navBar = document.querySelector('header');

    const nodeNavBar = navBar.cloneNode(true);
    // color: #8f8f8f;
    nodeNavBar.style.position = 'fixed';
    nodeNavBar.style.top = '-200px'
    nodeNavBar.style.zIndex = 100
    nodeNavBar.style.width = '100%'
    nodeNavBar.style.backgroundColor = 'var(--main-color)'
    nodeNavBar.style.margin = '0px'

    nodeNavBar.childNodes[3].childNodes[3].lastChild.previousSibling.style.borderLeftColor = 'var(--second-main-color)';
    nodeNavBar.childNodes[3].childNodes[3].lastChild.previousSibling.style.borderRightColor = 'var(--second-main-color)';


    document.body.insertBefore(nodeNavBar, document.body.firstChild)
    
    console.log(nodeNavBar.childNodes[3].childNodes[1])
    
    window.addEventListener('scroll', () => {
        if (innerWidth < 950) {
            nodeNavBar.childNodes[3].childNodes[3].lastChild.previousSibling.childNodes[1].style.color = 'var(--text-color)';
        } else {
            nodeNavBar.childNodes[3].childNodes[3].lastChild.previousSibling.childNodes[1].style.color = 'var(--second-maisn-color)';
        }
        if (window.scrollY >= 300) {
            nodeNavBar.style.top = '0px'
        } else if (window.scrollY <= 200) {
            // document.body.insertBefore(nodeNavBar, document.body.firstChild)
            nodeNavBar.style.top = '-200px'
        }
    })




}

containersAppear();
// navBarDropdown();