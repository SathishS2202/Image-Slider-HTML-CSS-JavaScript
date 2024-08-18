var currentIndex = 0;
var images = document.getElementsByClassName("image");

function showimage() {
    for (var i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    images[currentIndex].style.display = "block";
}
function nextimage() {
    currentIndex = (currentIndex + 1) % images.length;
    showimage();
}
function previmage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showimage();
}
showimage();
