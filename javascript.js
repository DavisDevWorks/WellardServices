function sendMail() {
    let params = {
        name : document.getElementById("fullname").value,
        email : document.getElementById("email").value,
        pnumber : document.getElementById("pnumber").value,
        job : document.getElementById("job").value,
    }

    emailjs.send("service_7cfu1cr","template_m85j62r",params).then(alert("Email Sent!!"))
}