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
    nodeNavBar.style.backgroundColor = 'var(--background-color)'
    nodeNavBar.style.margin = '0px'
    nodeNavBar.style.padding = '20px 10px';

    nodeNavBar.querySelector('.logo').style.margin = '0px';
    nodeNavBar.querySelector('.logo img').src = '/assets/main-logo.png';
    nodeNavBar.querySelectorAll('.sub-menu')[0].style.bottom = '-180px';
    nodeNavBar.querySelectorAll('.sub-menu')[1].style.bottom = '-180px';

    nodeNavBar.style.color = '#8f8f8f';
    nodeNavBar.childNodes[3].childNodes[3].querySelectorAll('li a')[0].style.color = '#8f8f8f';
    nodeNavBar.childNodes[3].childNodes[3].querySelectorAll('li a')[1].style.color = '#8f8f8f';
    nodeNavBar.childNodes[3].childNodes[3].querySelectorAll('li a')[5].style.color = '#8f8f8f';
    nodeNavBar.childNodes[3].childNodes[3].querySelectorAll('li a')[30].style.color = '#8f8f8f';
    nodeNavBar.childNodes[3].childNodes[3].querySelectorAll('li a')[31].style.color = '#8f8f8f';
    nodeNavBar.childNodes[3].childNodes[3].querySelectorAll('li a')[32].style.color = '#8f8f8f';
    console.log(nodeNavBar.childNodes[3].childNodes[3].querySelectorAll('li a'))
    nodeNavBar.childNodes[3].childNodes[3].lastChild.previousSibling.style.borderLeftColor = '#8f8f8f';
    nodeNavBar.childNodes[3].childNodes[3].lastChild.previousSibling.style.borderRightColor = '#8f8f8f';


    document.body.insertBefore(nodeNavBar, document.body.firstChild)
    
    window.addEventListener('scroll', () => {
        if (innerWidth < 950) {
            nodeNavBar.childNodes[3].childNodes[3].lastChild.previousSibling.childNodes[1].style.color = 'var(--text-color)';
        } else {
            nodeNavBar.childNodes[3].childNodes[3].lastChild.previousSibling.childNodes[1].style.color = 'var(--second-maisn-color)';
        }
        if (window.scrollY >= 200) {
            nodeNavBar.style.top = '0px'
        } else if (window.scrollY <= 200) {
            nodeNavBar.style.top = '-200px'
        }
    })

}

containersAppear();
navBarDropdown();