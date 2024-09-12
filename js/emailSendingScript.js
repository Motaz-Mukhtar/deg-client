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



async function sendEmail() {
    const data = JSON.stringify({
      "Messages": [{
        "From": {"Email": "motazksa2@gmail.com", "Name": "motazzz"},
        "To": [{"Email": 'motazmukhtar0@gmail.com', "Name": 'employee'}],
        "Subject": "Testing sending emails",
        "TextPart": "<h1> Hello World!</h1>",
      }]
    });
  
    const config = {
      method: 'post',
      url: 'https://api.mailjet.com/v3.1/send',
      data: data,
      headers: {'Content-Type': 'application/json'},
      auth: {username: 'b3bcd08aab9ab63487a80d38a93338a6', password: 'f8298c5f0b4bd03c2c5d8cd0f4892003'},
    };
  
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log("Done")
  }





// <form id="javascript_form">
//     <input type="text" name="subject" placeholder="Subject" />
//     <textarea name="text" placeholder="Message"></textarea>
//     <input type="submit" id="js_send" value="Send" />
// </form>

// <script>

//     //update this with your js_form selector
//     var form_id_js = "javascript_form";

//     var data_js = {
//         "access_token": "{your access token}" // sent after you sign up
//     };

//     function js_onSuccess() {
//         // remove this to avoid redirect
//         window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
//     }

//     function js_onError(error) {
//         // remove this to avoid redirect
//         window.location = window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
//     }

//     var sendButton = document.getElementById("js_send");

//     function js_send() {
//         sendButton.value='Sending…';
//         sendButton.disabled=true;
//         var request = new XMLHttpRequest();
//         request.onreadystatechange = function() {
//             if (request.readyState == 4 && request.status == 200) {
//                 js_onSuccess();
//             } else
//             if(request.readyState == 4) {
//                 js_onError(request.response);
//             }
//         };

//         var subject = document.querySelector("#" + form_id_js + " [name='subject']").value;
//         var message = document.querySelector("#" + form_id_js + " [name='text']").value;
//         data_js['subject'] = subject;
//         data_js['text'] = message;
//         var params = toParams(data_js);

//         request.open("POST", "https://postmail.invotes.com/send", true);
//         request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

//         request.send(params);

//         return false;
//     }

//     sendButton.onclick = js_send;

//     function toParams(data_js) {
//         var form_data = [];
//         for ( var key in data_js ) {
//             form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
//         }

//         return form_data.join("&");
//     }

//     var js_form = document.getElementById(form_id_js);
//     js_form.addEventListener("submit", function (e) {
//         e.preventDefault();
//     });