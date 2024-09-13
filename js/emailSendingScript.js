// Host: 'smtp.elasticemail.com',
// Username: 'test@gec.sa',
// Password: 'E3A6F4066F956E38CF614CCADFF75806E6DA',
// SecureToken: '6139d10a-ef84-468a-a4a5-ac898b229c75',

// cljiqinqyhcujw4i49p15ody


// b3bcd08aab9ab63487a80d38a93338a6 API Key

// f8298c5f0b4bd03c2c5d8cd0f4892003 Secret Key

// function sendEmail() {
//     console.log('hello world')
//     Email.send({
//         // Host: 'smtp.elasticemail.com',
//         // Username: 'test@gec.sa',
//         // Password: 'E3A6F4066F956E38CF614CCADFF75806E6DA',
//         Host: 'smtp.gmail.com',
//         Username: 'motazmukhtar0@gmail.com',
//         Password: 'motazmukhtar18564',
//         To: 'motazmukhtar0@gmail.com',
//         From: 'motazmukhtar0@gmail.com',
//         Subject: "Test Email from Hostinger SMTP",
//         Body: "This is a test email sent using Hostinger's SMTP server with SMTPJS."
//     })
//     .then(function (message) {
//         console.log(message)
//         alert("Email sent successfully!");
//     })
//     .catch(function (error) {
//         alert("Failed to send email. Error: " + error);
//     });
// }



// function sendEmail() {
//     const data = JSON.stringify({
//       "Messages": [{
//         "From": {"Email": "motazksa2@gmail.com", "Name": "motaz"},
//         "To": [{"Email": 'motazmukhtar0@gmail.com', "Name": 'motazmukhtar'}],
//         "Subject": "just testing email sendingg",
//         "TextPart": "Hello World!"
//       }]
//     });

//     const myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");
//     myHeaders.append('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
//     myHeaders.append('Access-Control-Allow-Credentials', 'true');
//     myHeaders.append('Accept', 'application/json');
//     myHeaders.append('Origin', 'http://127.0.0.1:5500');
//     myHeaders.set('Authorization', 'Basic ' + btoa('b3bcd08aab9ab63487a80d38a93338a6'+ ":" +'f8298c5f0b4bd03c2c5d8cd0f4892003'));
  
//     const requestOptions = {
//         mode: 'cors',
//         credentials: 'include',
//         method: 'POST',
//         headers: myHeaders,
//         body: data
//     };
  
//     fetch("https://api.mailjet.com/v3.1/send", requestOptions)
//       .then(response => response.text())
//       .then(result => console.log(result))
//       .catch(error => console.log('error', error));
// }


