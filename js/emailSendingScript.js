// 8f6c48e4-9c58-4233-ae92-f968eb3d525b
function sendEmail() {
    console.log('hello world')
    Email.send({

        SecureToken: '8f6c48e4-9c58-4233-ae92-f968eb3d525b',
        To: 'motazmukhtar0@gmail.com',
        From: 'motazksa2@gmail.com',
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