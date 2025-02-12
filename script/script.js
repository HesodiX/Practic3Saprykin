const videos = ['./img/video1.mp4', './img/video2.mp4', './img/video3.mp4'];
const text = document.querySelector('.slider__text');
const counter = document.querySelector('.slider__counter');
const text2 = document.getElementById('text2');
const counter2 = document.getElementById('counter2');
let currentSlide = 0;
const slides = document.querySelectorAll('.gallery__slide');
let currentVideo = 0;
function changeDescription() {
    if (currentVideo === 0) {
      text.innerHTML = "Ваши желания - наша работа";
      counter.innerHTML = "3/3";
    } else if (currentVideo === 1) {
        text.innerHTML = "Без компромиссная R1S";
        counter.innerHTML = "1/3";
    } else if (currentVideo === 2) {
      text.innerHTML = "Нашей фантазии нет лимита";
      counter.innerHTML = "2/3";
    }
  }
function playVideo() {
  const videoElement = document.querySelector('video');
  videoElement.src = videos[currentVideo];
  currentVideo = (currentVideo + 1) % videos.length;
  changeDescription();
}
playVideo();
setInterval(playVideo, 10000);
function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
            slide.style.opacity = "0";
            setTimeout(() => { slide.style.opacity = "1"; }, 100);
        } else {
            slide.classList.remove('active');
            slide.style.opacity = "1";
            setTimeout(() => { slide.style.opacity = "0"; }, 100);
        }
    });
}
function nextSlide() { 
    currentSlide++; 
    if (currentSlide >= slides.length) { 
        currentSlide = 0; 
    } 
    showSlide(currentSlide);
    changeText(); 
} 
showSlide(currentSlide);
setInterval(nextSlide, 10000);
function changeText() {
    if (currentSlide === 0) {
      text2.innerHTML = "Фотограф: Kyson Dana";
      counter2.innerHTML = "1/3";
    } else if (currentSlide === 1) {
        text2.innerHTML = "Фотограф: Jason Stathem";
        counter2.innerHTML = "2/3";
    } else if (currentSlide === 2) {
        text2.innerHTML = "Фотограф: Jake Michael";
        counter2.innerHTML = "3/3";
    }
  }