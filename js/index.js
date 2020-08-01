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
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var modalVid = document.getElementById("vid01");
const displayModal = function (element) {
    modal.style.display = "block";
    if (element.className.split(' ')[1] === 'wi') {
        modalImg.src = element.src;
    }
    else
        modalVid.src = element.src;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modalImg.src = ''
    modalVid.src = ''

    modal.style.display = "none";
}
