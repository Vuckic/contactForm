const userName = document.querySelector('#name')
const mail = document.querySelector('#mail')
const subject = document.querySelector('#subject')
const message = document.querySelector('#message')

const errFeedback = document.querySelector('.err-feedback')

let formFields = [
    {input:userName,regex:/^[A-Za-z'\s]+$/ ,required:true},
    {input:mail,regex:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,required:true},
    {input:subject,regex:/^[A-Za-z.,\s!@0-9]+$/,required:true},
    {input:message,regex:/^[A-Za-z.,\s!@0-9]+$/,required:true}
     
]
 
function formSubmit(e){
   e.preventDefault()
      
    
   let err = 0

   for(var field of formFields){
       if(!fieldValidate(field.input.value,field.regex,field.required)){
           err++
       }
   }

   if(err>0){
     
    errFeedback.innerHTML = "Form contain's errors"
    errFeedback.style.color = "red"
   }

   else{
    console.log("Message sent!")
    errFeedback.innerHTML = "Well done. Message sent!"
    errFeedback.style.color = "#00B8B0"

    for(var field of formFields){
        field.input.value=""
    }
   }
 
}

 


function fieldValidate(val, rString,required){
 
    if(required && val === ""){
        return false
    }

    if(!rString.test(val)){
        return false
    }

    return true

}


let navDisplayed = false

window.addEventListener('resize',()=>{
 if(window.innerWidth >= 1124){
    nav.style.display = 'flex'
    navDisplayed=true
 }
  else{
    nav.style.display = 'none'
    navDisplayed=false
  }

});


const nav = document.querySelector('#headerNav')

function toggleNav(){
   
   

    if( navDisplayed)   nav.style.display = 'none'
    
    else{
        nav.style.display = 'flex'
    }
   

   navDisplayed =!navDisplayed

     
}