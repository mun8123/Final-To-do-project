const bgImages = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg"
]

const body = document.querySelector("body");
const selectedImg = bgImages[Math.floor(Math.random() * bgImages.length)];

body.style.background = `url(./asset/images/${selectedImg}) no-repeat 100%`
