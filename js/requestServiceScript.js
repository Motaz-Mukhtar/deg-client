function setError(msg) {
    const errorMessage = document.querySelector('.error-message');

    errorMessage.innerText = msg;
}

function setSuccess(msg) {

    document.querySelector('.join-us-section').style.display = 'none';
    document.querySelector('.s1').style.display = 'none';

    document.querySelector('.success-message').style.display = 'block';
}

function getSelectOptions(select) {
    const selectedValues = []

    for (const option of select) {
        if (option.checked)
            selectedValues.push(option.value);
    }

    return selectedValues;
}

document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    setError('');

    const submitButton = document.querySelector('.submit-btn');


    const fullName = document.querySelector('#full-name').value.trim();
    const email = document.querySelector('#user-email').value.trim();
    const phoneNumber = document.querySelector('#phone-number').value.trim();
    const services = getSelectOptions(document.querySelectorAll('.checkbox'));

    if (services.length === 0) {
        const currentURL = window.location.href.split('/');

        if (currentURL[3] === "en") 
            return setError("Choose at least 1 service");
        else
            return setError("إختر خدمة واحدة على الأقل")
    }


    const notes = document.querySelector('#user-notes').value.trim();
    const formData = new FormData();
    const loaderButton = document.querySelector('.btn-loader');
    const textButton = document.querySelector('.btn-text');

    textButton.style.display = 'none';
    loaderButton.style.display = 'block';
    submitButton.disabled = true;

    formData.append('fullName', fullName);
    formData.append('email', email);
    formData.append('phoneNumber', phoneNumber);
    formData.append('services', services);
    formData.append('notes', notes ? notes : undefined);

    await fetch('https://api.gec.sa/api/v1/mail/services', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        console.log(response)
        setSuccess('Request sent successfully!');
    })
    .catch(error => {
        console.log(error);
        const currentURL = window.location.href.split('/');

        if (currentURL[3] === "en") 
            return setError("Request failed to send");
        else
            return setError("فشل إرسال الطلب");
    });

    textButton.style.display = 'block';
    loaderButton.style.display = 'none';
    submitButton.disabled = false;
});