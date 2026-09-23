const modal = document.getElementById("art-modal");
const modalImage = document.getElementById("art-modal-image");
const closeButton = document.querySelector(".art-modal-close");
const artItems = document.querySelectorAll(".art-item");

function closeArtModal() {
    modal.hidden = true;
    modalImage.src = "";
}

artItems.forEach((artItem) => {
    artItem.addEventListener("click", () => {
        modalImage.src = artItem.src;
        modalImage.alt = artItem.alt;
        modal.hidden = false;
    });
});

closeButton.addEventListener("click", closeArtModal);
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeArtModal();
    }
});
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeArtModal();
    }
});
