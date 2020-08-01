$(document).ready(function () {

    $('.vg-slider').slick({
        arrows: false,
        dots: true,
        appendDots: '.vg-slider-dots',
        dotsClass: 'dots'
    })
    $('.vg-work-slider').slick({
        arrows: false,
        dots: true,
        appendDots: '.vg-slider-dots',
        dotsClass: 'dots'

    })
});
let changeImageFlag = [0, 0, 0, 0]
function changeImage(flagNo) {
    let imageClasses1 = document.getElementsByClassName("work-transition-img1")
    let imageClasses2 = document.getElementsByClassName("work-transition-img2")
    if (changeImageFlag[flagNo] == 0) {
        // console.log("hi")
        // imageClasses1[flagNo].style.opacity = "1"
        // imageClasses2[flagNo].style.opacity = "0"
        imageClasses1[flagNo].style.display = "block"
        imageClasses2[flagNo].style.display = "none"
    } else {
        imageClasses2[flagNo].style.display = "block"
        imageClasses1[flagNo].style.display = "none"
    }
    // console.log(changeImageFlag)
    changeImageFlag[flagNo] = !changeImageFlag[flagNo]
}


var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var modalVid = document.getElementById("vid01");
const displayModal = function (element) {
    modal.style.display = "block";
    if (element.className.split(' ')[1] === 'wi') {
        modalImg.style.display = "block"
        modalImg.src = element.src;
    }
    else {

        modalVid.style.display = "block"
        modalVid.src = element.src;
    }
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modalImg.style.display = "none"
    modalVid.style.display = "none"
    modalImg.src = ''
    modalVid.src = ''

    modal.style.display = "none";
}
