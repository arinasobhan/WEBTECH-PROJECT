// Example: Scrolling buttons
const homeButton = document.querySelector('a[href="index.html"]');
const aboutButton = document.querySelector('a[href="about-us.html"]');
const eventsButton = document.querySelector('a[href="#events"]');
const mapButton = document.querySelector('a[href="#map"]');

homeButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

aboutButton.addEventListener('click', () => {
    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
});

eventsButton.addEventListener('click', () => {
    const eventsSection = document.getElementById('events');
    eventsSection.scrollIntoView({ behavior: 'smooth' });
});

mapButton.addEventListener('click', () => {
    const mapSection = document.getElementById('map');
    mapSection.scrollIntoView({ behavior: 'smooth' });
});


// Function to scroll to the top smoothly when the button is clicked
function scrollToTop() {
    // Using document.body to support older browsers
    document.body.scrollIntoView({
        behavior: 'smooth'
    });

    // For modern browsers
    document.documentElement.scrollIntoView({
        behavior: 'smooth'
    });
}

// Function to scroll to the YouTube section when the button is clicked
function scrollToDown() {
    const youtubeSection = document.getElementById('youtube');
    youtubeSection.scrollIntoView({ behavior: 'smooth' });
}


function goToPage(page) {
    window.location.href = page;
}
