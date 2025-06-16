document.addEventListener("DOMContentLoaded", () => {
  // Create modal structure
  const modal = document.createElement("div");
  modal.id = "imageModal";
  modal.className = "modal";
  modal.innerHTML = `
    <span class="close">&times;</span>
    <img class="modal-content" id="modalImage">
  `;
  document.body.appendChild(modal);

  const modalImg = modal.querySelector("#modalImage");
  const closeBtn = modal.querySelector(".close");

  document.querySelectorAll(".gallery-grid img").forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
      modalImg.alt = img.alt;
    });
  });

  closeBtn.onclick = () => modal.style.display = "none";

  window.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };
});

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});