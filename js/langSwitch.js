function switchLang (langSwitcher) {
    let currentURL = window.location.href.split('/');

    // currentURL[3] = langSwitcher.value;

    // console.log(currentURL);
    for (let i in currentURL) {
        if (currentURL[i] === 'en') {
            currentURL[i] = langSwitcher.value;
        } else if (currentURL[i] === 'ar') {
            currentURL[i] = langSwitcher.value;
        }
    }

    window.location.href = currentURL.join('/');
    window.history.replaceState(null, null, currentURL.join('/'));
}