const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

if (hamburger && mobileMenu) {
    const closeMenu = () => {
        mobileMenu.hidden = true;
        hamburger.setAttribute("aria-expanded", "false");
    };

    hamburger.addEventListener("click", () => {
        const isOpen = hamburger.getAttribute("aria-expanded") === "true";
        hamburger.setAttribute("aria-expanded", String(!isOpen));
        mobileMenu.hidden = isOpen;
    });

    // Close when clicking a link
    mobileMenu.addEventListener("click", (e) => {
        const link = e.target.closest("a");
        if (link) closeMenu();
    });

    // Close on ESC
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeMenu();
    });

    // Optional: close menu when resizing back to desktop
    window.addEventListener("resize", () => {
        if (window.innerWidth > 980) closeMenu();
    });
}

// Header shadow on scroll
const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});



// Accordion functionality
document.querySelectorAll(".accordion-header").forEach(button => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;

    document.querySelectorAll(".accordion-content").forEach(item => {
      if (item !== content) item.style.display = "none";
    });

    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
});


// ===== Contact form success popup (front-end only) =====
const inquiryForm = document.getElementById("inquiryForm");
const formSuccess = document.getElementById("formSuccess");

if (inquiryForm && formSuccess) {
  inquiryForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // basic HTML5 validation
    if (!inquiryForm.checkValidity()) {
      inquiryForm.reportValidity();
      return;
    }

    // show success
    formSuccess.hidden = false;

    // reset form
    inquiryForm.reset();

    // hide after a bit
    clearTimeout(window.__bapcSuccessTimer);
    window.__bapcSuccessTimer = setTimeout(() => {
      formSuccess.hidden = true;
    }, 3500);
  });
}