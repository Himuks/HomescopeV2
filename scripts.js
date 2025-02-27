document.addEventListener('DOMContentLoaded', function() {
    // --- Contact Form Handling (Keep this if you have a contact form) ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // --- Featured Listings "View Details" Functionality ---
    const featuredListingsSection = document.querySelector('#featured-listings');

    if (featuredListingsSection) {
        featuredListingsSection.addEventListener('click', function(event) {
            if (event.target.classList.contains('view-details')) {
                const listingId = event.target.closest('.listing').dataset.id;
                window.location.href = `listings.html?id=${listingId}`;
            }
        });
    }

    // Help tooltip functionality
    const helpButton = document.getElementById('help-button');
    const tooltipContent = document.querySelector('.tooltip-content');

    if (helpButton && tooltipContent) {
        helpButton.addEventListener('click', function() {
            tooltipContent.classList.toggle('active');
        });

        // Close tooltip when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.help-tooltip')) {
                tooltipContent.classList.remove('active');
            }
        });
    }
});