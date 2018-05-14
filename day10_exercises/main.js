let message = document.getElementById("nycda-title")
message.innerText = "Welcome to NYCDA"

let help = document.getElementById("nyda-help-message")
help.innerText = "Ask people in NYCDA for help if you're struggling"

let elements = document.getElementsByClassName("nycda-class")
console.log(elements[2]) 


let tag = document.getElementsByTagName("p")
console.log(tag)

let inputField = document.querySelector("input")
inputField.style.borderColor = "red"

let submitButton = document.querySelector("#submit-button")
let textField = document.getElementById("input-important")
console.log(submitButton)
submitButton.addEventListener("click", (event) => {
    alert( textField.value )
})

