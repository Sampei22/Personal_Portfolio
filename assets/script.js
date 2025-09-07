function sendMail(){
    let parms = {
      nome : document.getElementById("name").value, 
      cognome : document.getElementById("name").value,
      email : document.getElementById("name").value,
    }
  emailjs.send("service_oaq0vl4","templateid", parms).then(alert("email inviata!!")) 
}
