let main = document.querySelector(".container");

main.addEventListener("click", (event) => {
    if (event.target.classList.contains("card")) {
        alert("Card " + event.target.innerHTML + " Clicked");
    }
});