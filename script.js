// ==================== PROJECT LINKS ====================

// Select all project links
const projectLinks = document.querySelectorAll(".project-link");

// Add an event to each project link
projectLinks.forEach(link => {

    link.addEventListener("click", function(event) {

        // Ignore links that do not have a real destination yet
        if (link.getAttribute("href") === "#") {

            event.preventDefault();

            alert(
                "This project page is currently being prepared."
            );

        }

    });

});


// ==================== CURRENT YEAR ====================

// Find the footer
const footer = document.querySelector("footer");

// Create a small message
const currentYear = new Date().getFullYear();

// Find the copyright paragraph
const copyrightText = footer.querySelector("p:last-child");

// Update the year automatically
copyrightText.textContent =
    `© ${currentYear} Emad Tamer. All rights reserved.`;