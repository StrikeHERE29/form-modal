 let password = document.querySelector("#input-password");
let confirmPassword = document.querySelector("#confirm-password");

let form = document.querySelector(".form");
let textConfirmation = document.querySelector("#text-confirmation");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    checkPassword()
})


const checkPassword = ()=>{
   
    if(password.value === confirmPassword.value){
        textConfirmation.innerText = "* Passwords do match"
        textConfirmation.style.color = "green";
    }else{
        textConfirmation.innerText = "* Passwords do not match"
        textConfirmation.style.color = "red";
    }
    
};
