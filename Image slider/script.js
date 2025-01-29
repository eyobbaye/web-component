// Write JavaScript code here
document.addEventListener("DOMContentLoaded", function(){
    const rightArrow = document.getElementById("right");
    const leftArrow = document.getElementById("left");
    const carousel = document.querySelector(".carousel");

    rightArrow.addEventListener("click", function(){
        carousel.scrollBy({
            left:250, behavior: 'smooth'
        })
    })
    leftArrow.addEventListener("click", function(){
        carousel.scrollBy({
            left: -250, behavior: 'smooth'
        })
    })
})
