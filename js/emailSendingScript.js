// Host: 'smtp.elasticemail.com',
// Username: 'test@gec.sa',
// Password: 'E3A6F4066F956E38CF614CCADFF75806E6DA',
// SecureToken: '6139d10a-ef84-468a-a4a5-ac898b229c75',

// cljiqinqyhcujw4i49p15ody


// b3bcd08aab9ab63487a80d38a93338a6 API Key

// f8298c5f0b4bd03c2c5d8cd0f4892003 Secret Key

function sendEmail() {
    console.log('hello world')
    Email.send({
        // Host: 'smtp.elasticemail.com',
        // Username: 'test@gec.sa',
        // Password: 'E3A6F4066F956E38CF614CCADFF75806E6DA',
        Host: 'smtp.gmail.com',
        Username: 'motazmukhtar0@gmail.com',
        Password: 'motazmukhtar18564',
        To: 'motazmukhtar0@gmail.com',
        From: 'motazmukhtar0@gmail.com',
        Subject: "Test Email from Hostinger SMTP",
        Body: "This is a test email sent using Hostinger's SMTP server with SMTPJS."
    })
    .then(function (message) {
        console.log(message)
        alert("Email sent successfully!");
    })
    .catch(function (error) {
        alert("Failed to send email. Error: " + error);
    });
}