function getSelectOptions(select) {
    const selectedValues = []

    for (const option of select) {
        if (option.selected)
            selectedValues.push(option.value.split('-').join(' '));
    }

    return selectedValues;
}

document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const form = e.target;
    const submitButton = document.querySelector('.submit-btn');
    const errorMessage = document.querySelector('.error-message');
    const successMessage = document.querySelector('.success-message');


    const fullName = document.querySelector('#full-name').value.trim();
    const email = document.querySelector('#user-email').value.trim();
    const phoneNumber = document.querySelector('#phone-number').value.trim();
    const services = getSelectOptions(document.querySelector('#services'));
    const notes = document.querySelector('#user-notes').value.trim();

    const formData = new FormData();

    formData.append('fullName', fullName);
    formData.append('email', email);
    formData.append('phoneNumber', phoneNumber);
    formData.append('services', services);
    formData.append('notes', notes ? notes : undefined);

    await fetch('http://localhost:5000/api/v1/mail/services', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        console.log(response)
    })
    .catch(error => console.log(error.message, error));

});