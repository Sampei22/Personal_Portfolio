function sendMail(){
    let parms = {
      nome : document.getElementById("name").value, 
      cognome : document.getElementById("cognome").value,
      descrizione : document.getElementById("descrizione").value,
      email : document.getElementById("email").value,  
    }
  emailjs.send("service_oaq0vl4","templateid", parms).then(alert("Email inviata!!")) 
}
