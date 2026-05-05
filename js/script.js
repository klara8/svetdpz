
document.querySelectorAll(".clickable-image").forEach(img => {
    img.addEventListener("click", function () {
        document.getElementById("modalImage").src = this.src;
    });
});
