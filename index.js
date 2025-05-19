document.getElementById("hamburger").addEventListener("click", function () {
    document.getElementById("modal").style.display = "block";
    document.getElementById("hamburger").style.display = "none";
});
document.getElementById("close").addEventListener("click", function () {
    document.getElementById("modal").style.display = "none";
    document.getElementById("hamburger").style.display = "block";
});


window.addEventListener("scroll", function () {
    document.getElementById("modal").style.display = "none";
    document.getElementById("hamburger").style.display = "block";
});
