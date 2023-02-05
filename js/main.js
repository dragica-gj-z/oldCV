function sendMail(){
    var params = {
        from_name : document.getElementById("fullName").value,
        companyName : document.getElementById("companyName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_z14k8kd", "template_2vwj0ld", params).then(function (res) {
        alert("Message sended! " + res.status);
    })
}