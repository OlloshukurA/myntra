
const sImg = document.getElementById('first');
const first =  document.getElementById('d1')
const sSlider =  document.getElementById('d2')
const tSlider =  document.getElementById('d3')
const fSlider =  document.getElementById('d4')
const fiSlider = document.getElementById('d5')
const seSlider = document.getElementById('d6')


if(first){
    first.addEventListener('click', () => {
        sImg.src = "../img/home/slider/slider1.webp"
        
    })
}

if(sSlider){
    sSlider.addEventListener('click', () => {
        sImg.src = "../img/home/slider/slider2.webp"
    })
}

if(tSlider){
    tSlider.addEventListener('click', () => {
        sImg.src = "../img/home/slider/slider3.webp"
    })
}

if(fSlider){
    fSlider.addEventListener('click', () => {
        sImg.src = "../img/home/slider/slider4.jpg"
    })
}

if(fiSlider){
    fiSlider.addEventListener('click', () => {
        sImg.src = "../img/home/slider/slider5.webp"
    })
}

if(seSlider){
    seSlider.addEventListener('click', () => {
        sImg.src = "../img/home/slider/slider6.webp"
    })
}

if(first){
    first.addEventListener('click', () => {
        first.style.opacity = "1"
        sSlider.style.opacity = "0.2"
        tSlider.style.opacity = "0.2"
        fSlider.style.opacity = "0.2"
        fiSlider.style.opacity = "0.2"
        seSlider.style.opacity = "0.2"
    })
}

if(sSlider){
    sSlider.addEventListener('click', () => {
        sSlider.style.opacity = "1"
        first.style.opacity = "0.2"
        tSlider.style.opacity = "0.2"
        fSlider.style.opacity = "0.2"
        fiSlider.style.opacity = "0.2"
        seSlider.style.opacity = "0.2"
    })
}

if(tSlider){
    tSlider.addEventListener('click', () => {
        tSlider.style.opacity = "1"
        first.style.opacity = "0.2"
        sSlider.style.opacity = "0.2"
        fSlider.style.opacity = "0.2"
        fiSlider.style.opacity = "0.2"
        seSlider.style.opacity = "0.2"
    })
}

if(fSlider){
    fSlider.addEventListener('click', () => {
        fSlider.style.opacity = "1"
        first.style.opacity = "0.2"
        sSlider.style.opacity = "0.2"
        tSlider.style.opacity = "0.2"
        fiSlider.style.opacity = "0.2"
        seSlider.style.opacity = "0.2"
    })
}

if(fiSlider){
    fiSlider.addEventListener('click', () => {
        fiSlider.style.opacity = "1"
        first.style.opacity = "0.2"
        sSlider.style.opacity = "0.2"
        tSlider.style.opacity = "0.2"
        fSlider.style.opacity = "0.2"
        seSlider.style.opacity = "0.2"
    })
}

if(seSlider){
    seSlider.addEventListener('click', () => {
        seSlider.style.opacity = "1"
        first.style.opacity = "0.2"
        sSlider.style.opacity = "0.2"
        tSlider.style.opacity = "0.2"
        fSlider.style.opacity = "0.2"
        fiSlider.style.opacity = "0.2"
    })
}

