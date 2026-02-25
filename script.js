document.addEventListener("DOMContentLoaded", () => {
    // 1. Dynamic Footer Year
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Mobile Menu Toggle
    const menuBtn = document.getElementById("menu-btn");
    const mainNav = document.getElementById("main-nav");

    if (menuBtn && mainNav) {
        menuBtn.addEventListener("click", () => {
            mainNav.classList.toggle("show");
            
            // Toggle hamburger animation (optional enhancement)
            const isExpanded = mainNav.classList.contains("show");
            menuBtn.setAttribute("aria-expanded", isExpanded);
        });
    }
});
