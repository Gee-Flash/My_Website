// Dark Mode
function toggleBar () {
    const themeLink = document.getElementById('themeStyle');
    const toggleIcon = document.getElementById('toggle');

    if (themeLink.getAttribute('href') === 'assets/css/light.css') {
        // Switch to Dark Mode
        themeLink.setAttribute('href','assets/css/dark.css');
        toggleIcon.className='fa-solid fa-toggle-off toggleon';

    } else {
        // Switch to Light Mode
        themeLink.setAttribute('href','assets/css/light.css');
        toggleIcon.className='fa-solid fa-toggle-on toggleon';
    }
}


// Owl-Carousel slider
$(document).ready(function () {
    // First Carousel Initialization
    $(".service-slider").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        nav: false,
        margin: 20,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        },
        onInitialized: addActiveClass,
        onTranslated: addActiveClass
    });

    // Function for the active class
    function addActiveClass(event) {
        $(".service-slider .slider-box").removeClass("active-slide-background");
        var currentIndex = event.item.index;
        $(".service-slider .owl-item").eq(currentIndex).find(".slider-box").addClass("active-slide-background");
    }

    // Second Carousel Initialization
    $(".head").owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        items: 1
    });
});




// Show the button when user scrolls down
window.onscroll = function () {
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block"; // Show button when scrolled 100px
    } else {
        scrollToTopBtn.style.display = "none"; // Hide button at the top
    }
};

// Smooth scroll to the top when the button is clicked
document.querySelector('.scroll-to-top').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Mouse Scroll
document.getElementById("mouseIcon").addEventListener("click", function () {
    // Scroll smoothly to the next section
    window.scrollTo({
        top: window.innerHeight, // Scroll to the next screen height
        behavior: "smooth"       // Smooth scrolling effect
    });
});

// Loading Image
setTimeout(() => {
    const loading = document.getElementById('loading');
    loading.style.display = 'none'; // Hide the loading screen
}, 4000); 


// The text you want to display in the paragraph
const text = "Gee-flash offers the best in electrical installation, electrical maintenance, solar installation, and professional graphic design services.";
const paragraph = document.getElementById("bio");
let index = 0;

// Function to type out the text
function typeEffect() {
    if (index < text.length) {
        paragraph.textContent += text[index];
        index++;
    } else {
        clearInterval(interval);
    }
}

// Run the function every 100 milliseconds
const interval = setInterval(typeEffect, 100);

// Toggling the menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show'); // This adds or removes the 'show' class
}

document.addEventListener("DOMContentLoaded", function() {
    let text = "Ready to work with us?";
    let i = 0;
    let typingSpeed = 150; // Speed of typing effect

    function typeWriter() {
        if (i < text.length) {
            document.getElementById("typing-text").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, typingSpeed);
        }
    }

    typeWriter(); // Start typing effect once page loads
});
