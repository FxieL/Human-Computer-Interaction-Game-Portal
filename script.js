const form = document.getElementById("myForm")
const errorMessage = document.getElementById("errorMessage")

function handleSubmit(e){
 const formData = new FormData(form)

 const name = formData.get("nameTxt")
 const email = formData.get("emailTxt")
 const password = formData.get("passwordTxt")
 const gender = formData.get("genderTxt")
 const agree = formData.get("agree")
 let error = []

 //VALIDATION
 if(!name){
    error.push("Name must be filled!")
 } else if(!email){
     error.push("Email must be filled!")
 } else if(!password){
    error.push("Password must be filled!")
 } else if(!gender){
    error.push("Gender must be filled!")
 } else if(!agree){
    error.push("User must agree to the terms and conditions!")
 }

 if(error.length> 0){
    alert(error.join("\n"))
    errorMessage.innerHTML = error.join("</br>")
    e.preventDefault()
 } else {
    if(!confirm("Are you sure ?")){
        e.preventDefault()
        }
    }
}

//CALLBACK FUNCTION
form.addEventListener('submit', handleSubmit)