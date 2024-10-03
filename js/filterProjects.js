const filters = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('figure');


function filterProjects(service) {
    service = service.split('#').join('');

    // If the hash is empty return nothing.
    if (!service)
        return;

    projects.forEach(ele => {
        if (ele.dataset.service !== service) {
            ele.style.display = 'none';
        }
        else {
            ele.style.display = 'block';
        }
    });
}

function filterButtons (service) {
    service = service.split('#').join('');

    if (service) {

        filters.forEach(ele => {

            console.log(ele);
            console.log(service)
            console.log(ele.dataset.service)
            if (ele.dataset.service === service) {
                ele.classList.add('filterSelected');
                filterProjects(ele.hash);
            }
        })

    }

    // filters.forEach(ele => {
    //     ele.addEventListener('click', () => {
    //         filters.forEach(ele => {
    //             // Remove class from all elements.
    //             ele.childNodes[1].classList.remove('filterSelected');
    //         });

    //         // Add class to current element.
    //         ele.childNodes[1].classList.add('filterSelected');
    //         filterProjects(ele.hash);
    //     });
    // });
}



// filter projects when the page is loaded.
filterProjects(window.location.hash);

filterButtons(window.location.hash);