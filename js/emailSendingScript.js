function setError(msg) {
    const errorMessage = document.querySelector('.error-message');

    errorMessage.innerText = msg;
}

// function setSuccess(msg) {

//     document.querySelector('.join-us-section').style.display = 'none';
//     document.querySelector('.s1').style.display = 'none';

//     document.querySelector('.success-message').style.display = 'block';
// }


// async function sendEmail() {
document.querySelector('form').addEventListener('submit', async (e) => {

    e.preventDefault();

    const form = e.target;
    const submitButton = document.querySelector('.submit-btn');
    const textButton = document.querySelector('.btn-text');
    const loaderButton = document.querySelector('.btn-loader');
    const errorMessage = document.querySelector('.error-message');
    const successMessage = document.querySelector('.success-message');

    
    if (!form.checkValidity()) {
        // If form is invalid, trigger the native validation
        form.reportValidity();
        return;
    }


    const firstName = document.querySelector('#first-name').value.trim();
    const lastName = document.querySelector('#last-name').value.trim();
    const email = document.querySelector('#user-email').value.trim();
    const phoneNumber = document.querySelector('#phone-number').value.trim();
    const jobTitle = document.querySelector('#job-title').value;
    const message = document.querySelector('#user-message').value;
    const attachment = document.querySelector('#attachment').files[0];

    errorMessage.textContent = '';

    const formData = new FormData();

    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('phoneNumber', phoneNumber);
    formData.append('jobTitle', jobTitle);
    formData.append('message', message);
    formData.append('attachment', attachment);

    if(!(attachment.type in {"application/vnd.openxmlformats-officedocument.wordprocessingml.document": undefined, "application/pdf": undefined})) {
        let currentURL = window.location.href.split('/');

        
        if (currentURL[3] === 'ar') {
            errorMessage.textContent = 'يجب أن تكون السيرة الذاتية في صيغة pdf أو docx فقط';
        }
        else {
            errorMessage.textContent = 'Resume/CV must be only PDF or word file';
        }

        return;
    }

    textButton.style.visibility = 'hidden';
    loaderButton.style.display = 'block';
    submitButton.disabled = true;


    await fetch('https://api.gec.sa/api/v1/mail', {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (!response.ok) 
            throw new Error(response.statusText);

        console.log(response)
        if (response.status === 200) {
            const currentURL = window.location.href.split('/');

            if (currentURL[3] === 'ar') {
                successMessage.textContent = 'تم الارسال بنجاح, نقوم الأن بمراجعة طلبك'
            } else {
                successMessage.textContent = "Email sent successfully, we are now reviewing your request";
            }

            setTimeout(() => {
                window.location.reload();
            }, 5000)

        }
    })
    .catch(error => {
        console.log(error);
        const currentURL = window.location.href.split('/');

        if (currentURL[3] === "en")
            return setError("Request failed to send");
        else
            return setError("فشل إرسال الطلب");
    });

    textButton.style.visibility = 'visible';
    loaderButton.style.display = 'none';
    submitButton.disabled = false;
});