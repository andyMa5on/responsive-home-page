const backdrop = document.getElementById("backdrop")
const mobileNavbar = document.getElementById("mobileNavbar")
const modal = document.getElementById("modal")

function displayModal() {
    backdrop.style.display = "block";
    modal.style.display = "block";
}

function closeModal() {
    backdrop.style.display = "none"
    modal.style.display = "none"
}

mobileNavbar.addEventListener('click', displayModal)
backdrop.addEventListener('click', closeModal)