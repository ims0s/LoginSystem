const currentUserName=document.getElementById('current-user')
const currentUser = JSON.parse(localStorage.getItem('currentUser'));


if (!currentUser){
    location.assign('../index.html')
}

currentUserName.innerText=currentUser.name
document.getElementById('logout').addEventListener('click',()=>{
    localStorage.removeItem('currentUser')
    location.assign('../index.html')
})