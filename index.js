let user = {
    nama: localStorage.getItem('nama'),
    title: localStorage.getItem('title')
}
let welcomeName = document.getElementById('login-name');

const button = document.getElementsByClassName("nav-right");
function handleClick(){
    location.replace("/login.html")
}

function login(){
    localStorage.setItem('nama', document.getElementById('namaValue').value);
    localStorage.setItem('title', document.getElementById('titleValue').value);
}

if(user.nama != null){
    welcomeName.textContent = "Halo " + user.nama + " " + user.title + " ! selamat datang kembali di Warunk.";
}
console.log(user.nama);console.log(user.title);
console.log(button);