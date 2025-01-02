// DECLARE

let user = {
    nama: localStorage.getItem('nama'),
    title: localStorage.getItem('title')
}
let welcomeName = document.getElementById('login-name');
let loginPage = document.getElementById('login');
let contentPage = document.getElementById('content');
let loginRec = document.getElementById('login-rec');
let navRight = document.getElementById('nav-right');

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.nav-dot');
const prevButton = document.querySelector('.nav-button.left');
const nextButton = document.querySelector('.nav-button.right');

let currentIndex = 0;
const slideCount = slides.length;
const interval = 6000;

const productContainer = document.querySelector('.product-list-container');


// LOGIN

const button = document.getElementsByClassName("nav-right");
function handleClick() {
    loginPage.style.display = "none";
    navRight.style.display = "none";
    loginRec.style.display = "flex";
    contentPage.style.display = "block";

}

function login() {
    localStorage.setItem('nama', document.getElementById('namaValue').value);
    localStorage.setItem('title', document.getElementById('titleValue').value);
}

if (user.nama != null) {
    // alert("Halo " + user.nama + " " + user.title + " ! selamat datang kembali di Warunk.");
    loginPage.style.display = "none";
    navRight.style.display = "none";
    loginRec.style.display = "flex";
    contentPage.style.display = "block";
}
console.log(user.nama); console.log(user.title);
console.log(button);

// Slider


const goToSlide = (index) => {
    currentIndex = (index + slideCount) % slideCount;
    slider.style.transform = `translateX(-${currentIndex * 20}%)`;
    updateDots();
};

const updateDots = () => {
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
};

nextButton.addEventListener('click', () => goToSlide(currentIndex + 1));
prevButton.addEventListener('click', () => goToSlide(currentIndex - 1));

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => goToSlide(i));
});

setInterval(() => goToSlide(currentIndex + 1), interval);

