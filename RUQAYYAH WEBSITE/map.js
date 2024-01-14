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