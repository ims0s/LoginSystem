const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const inputList = document.querySelectorAll('input')
const feedback=document.getElementById('feedback')
const formBtn=document.querySelector('button')
let newUser={}
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl,{
    content:`
    <p>password length between 6 - 16</p>
        <p>password must include at least one number</p>
    `
}))
let users = JSON.parse(localStorage.getItem('users'))
if(!users){
    users=[];
}
const  validation = {
    'email' :false,
    'passwd':false,
    'name':false,

}
const regex = {
    'email' :/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    'passwd':/^(?=.*\d)[\s\S]{6,16}$/,
    'name':/[\w\W]/,
}

const submit= function(e) {
    
    for(let i =0 ; i < inputList.length; i++){
        if(!inputList[i].value){
            feedback.innerText='All inputs are required'
            feedback.classList.remove('d-none')
            return 
        }
    }
    for(let i in validation){
        if (!validation[i]){
            feedback.innerText='The inputs is not valid '
            feedback.classList.remove('d-none')
            return 
        }
    }
    for(let i of users){
        if (i.email==newUser.email){
            feedback.innerText='This Email already exist'
            feedback.classList.remove('d-none')
            return 
        }
    }
    feedback.innerText='Success '
    feedback.classList.remove('d-none','alert-danger')
    feedback.classList.add('alert-success')
    users.push(newUser)
    newUser={}
    console.log(users)
    inputList.forEach(reset)
    localStorage.setItem('users',JSON.stringify(users))
}

const inputEvent=e => {
    if(regex[e.target.id].test(e.target.value)){
        e.target.classList.remove('input-invalid')
        e.target.classList.add('input-valid')
        validation[e.target.id]=true
    }else{
        e.target.classList.remove('input-valid')
        e.target.classList.add('input-invalid')
        validation[e.target.id]=false
    }
    newUser[e.target.id]=e.target.value
    console.log(e.target)
}
const reset = (target) => target.value=''

inputList.forEach(target =>{
    target.addEventListener('input', inputEvent)
})
formBtn.addEventListener('click' , submit)