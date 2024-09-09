langSwitcher = document.querySelector('.lang-switcher');

function switchLang () {
    let currentURL = window.location.href.split('/');

    currentURL[3] = langSwitcher.value;

    window.location.href = currentURL.join('/');
    window.history.replaceState(null, null, currentURL.join('/'));
}