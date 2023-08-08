var button = document.querySelector('.button')
var card = document.querySelector('.card')
var close1 = document.querySelector('.close-1 i')
function open(){
    card.classList.toggle('hide')
}

button.addEventListener('click',open)
close1.addEventListener('click',open)

var images = document.querySelectorAll('.image img')
var gallery = document.querySelector('.gallery')
var galleryInner = document.querySelector('.gallery-inner img')
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')
var close2 = document.querySelector('.close-2')

var currentIndex = 0

function showGallery(){
    if(currentIndex == 0){
        prev.classList.add('hide')
    }else{
        prev.classList.remove('hide')
    }
    if(currentIndex == images.length -1){
        next.classList.add('hide')
    }else{
        next.classList.remove('hide')
    }
    galleryInner.src = images[currentIndex].src
    gallery.classList.add('show')
}
images.forEach((item,index)=>{
    item.addEventListener('click',function(){
        currentIndex = index
        showGallery()
    })
})
prev.addEventListener('click',function(){
    currentIndex--
    showGallery()
})
next.addEventListener('click', function(){
    currentIndex++
    showGallery()
})
close2.addEventListener('click',function(){
    gallery.classList.remove('show')
})