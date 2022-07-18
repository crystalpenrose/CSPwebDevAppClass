console.log("ContactCapture")

let nameField = document.querySelector(".name-field")
let emailField = document.querySelector(".email-field")
let phoneField = document.querySelector(".phone-field")
let button = document.querySelector("button")

button.onclick = function(){
    let name = nameField.value
    let message1 = "Your name address is " + name
    let email = emailField.value
    let message2 = "Your email address is " + email
    let phone = phoneField.value
    let message3 = "Your phone address is " + phone
    let message4 = "You are now in Therelene's Boogie-Boarding Bluegrass Band Fan Club"
    console.log(message1, message2, message3)
    document.write(message1 + "<br/>", message2 + "<br/>", message3 + "<br/>", message4)
}