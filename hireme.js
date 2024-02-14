function sendemail(){
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone : document.getElementById("number").value,
        message: document.getElementById("Message").value,
     

    }

    emailjs.send("service_0vawsge","template_mmorvqx", parms).then (alert("Email has been Sent!"))
}