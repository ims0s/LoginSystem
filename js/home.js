const currentUserName=document.getElementById('current-user')
const currentUser = JSON.parse(localStorage.getItem('currentUser'));


if (!currentUser){
    location.assign('../../')
}

currentUserName.innerText=currentUser.name
document.getElementById('logout').addEventListener('click',()=>{
    localStorage.removeItem('currentUser')
    location.assign('../../')
})