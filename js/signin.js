const emailInput = document.getElementById('email')
const passwd = document.getElementById('passwd')
const submitBtn = document.getElementById('submit')
const feedback = document.getElementById('feedback')
let users = JSON.parse(localStorage.getItem('users'))
if(!users){
    users=[]
}

function getUser(){
    for (let i of users){
        if (i.email == emailInput.value){
            return i 
        }
    }
    return undefined
}

function submitForm(){
    const currentUser=getUser();
    if(!emailInput.value||!passwd.value){
        feedback.classList.remove('d-none')
        feedback.innerText='All inputs are required'
        return
    }
    if (!currentUser || passwd.value != currentUser.passwd){
        feedback.classList.remove('d-none')
        feedback.innerText='The email or password isn\'t correct'
        return
    }
    localStorage.setItem('currentUser' , JSON.stringify(currentUser))
    location.assign("./html/home.html")
}

submitBtn.addEventListener('click',submitForm)