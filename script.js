// Variables
let menuOpen = false;
let isActive = false;

// Function to update variables

function setMenuOpen(value) {
    menuOpen = value;
}
function setIsActive(value) {
    isActive = value;
}

function handleClose() {
    setMenuOpen(false);
    setIsActive(false);
}

function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    if (menuOpen) {
        navLinks.classList.remove("open");
    } else {
        navLinks.classList.add("open");
    }
    setMenuOpen(!menuOpen)
}

var modal = document.getElementById("myModal");

// Get the close button element
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
function openModal() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
document.getElementById("openModalBtn").addEventListener("click", openModal);