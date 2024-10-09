
function openWhatsApp() {
    var phoneNumber = "+919448490809"; // Enter the recipient's phone number in international format

    var url = `https://wa.me/${phoneNumber}`;
    window.open(url, '_blank'); // Opens WhatsApp in a new tab
}
function openWhatsApp1() {
    var phoneNumber = "+917204774056"; // Enter the recipient's phone number in international format

    var url = `https://wa.me/${phoneNumber}`;
    window.open(url, '_blank'); // Opens WhatsApp in a new tab
}

function animateValue(id, start, end, duration, isK) {
    let obj = document.getElementById(id);
    let current = start;
    let range = end - start;
    let increment = (end - start) / (duration / 50); // Increment step based on duration
    let stepTime = 50; // Update interval in milliseconds

    let timer = setInterval(function () {
        current += increment;
        if (isK) {
            if (current >= 1000) {
                obj.innerHTML = (current / 1000).toFixed(1) + "K+";  // Show K for thousands
            }
        } else {
            obj.innerHTML = Math.floor(current) + "+";  // Normal number display
        }

        if (current >= end) {
            clearInterval(timer);
            obj.innerHTML = end.toLocaleString() + "+";  // Final value without decimal points
        }
    }, stepTime);
}

document.addEventListener("DOMContentLoaded", function () {
    animateValue("experience", 1, 5, 2000, false);  // 5+ years of experience
    animateValue("customers", 1000, 10000, 3000, true);  // Start from 1K to 10K+ happy customers
    animateValue("staff", 1, 15, 2000, false);  // 15+ trained staff
});

// Close the navbar when a nav link is clicked in mobile view
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.getElementById('navbarNav');

navLinks.forEach(link => {
link.addEventListener('click', () => {
    // Check if the navbar is expanded
    if (navbarCollapse.classList.contains('show')) {
        // Collapse the navbar
        navbarCollapse.classList.remove('show');
        navbarToggler.setAttribute('aria-expanded', 'false');
    }
});
});
const images = document.querySelectorAll('.gallery img');

    // Function to add 'loaded' class after the image has loaded
    images.forEach(img => {
        img.onload = () => {
            img.classList.add('loaded'); // Add the class to fade in
        };
        img.src = img.src; // Trigger the loading of the image

        // Add click event to open image in lightbox
        img.addEventListener('click', () => {
            const lightboxImg = document.getElementById('lightbox-img');
            lightboxImg.src = img.src; // Set the source of the lightbox image
            document.getElementById('lightbox').style.display = 'flex'; // Show the lightbox
        });
    });

    // Function to close the lightbox
    function closeLightbox() {
        document.getElementById('lightbox').style.display = 'none'; // Hide the lightbox
    }