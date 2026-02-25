document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Dynamic Footer Year & Mobile Menu
    const yearSpan = document.getElementById("year");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    const menuBtn = document.getElementById("menu-btn");
    const mainNav = document.getElementById("main-nav");

    if (menuBtn && mainNav) {
        menuBtn.addEventListener("click", () => {
            mainNav.classList.toggle("show");
        });
    }

    // 2. Reading Progress Bar
    window.onscroll = function() {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    };

    // 3. Social Share & Copy Link Functionality
    const shareBtn = document.getElementById("share-btn");
    const copyBtn = document.getElementById("copy-btn");

    // Native Web Share API (Works great on mobile devices)
    if (shareBtn) {
        shareBtn.addEventListener("click", async () => {
            if (navigator.share) {
                try {
                    await navigator.share({
                        title: document.title,
                        url: window.location.href
                    });
                } catch (err) {
                    console.log("Error sharing:", err);
                }
            } else {
                alert("Web Share API is not supported in your browser. Use the Copy Link button instead!");
            }
        });
    }

    // Copy to Clipboard Fallback
    if (copyBtn) {
        copyBtn.addEventListener("click", () => {
            navigator.clipboard.writeText(window.location.href).then(() => {
                let originalText = copyBtn.textContent;
                copyBtn.textContent = "Copied! ✅";
                setTimeout(() => {
                    copyBtn.textContent = originalText;
                }, 2000);
            });
        });
    }
});
