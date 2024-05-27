window.addEventListener('scroll', function() {
    var video = document.querySelector('#bg-video'); // Use the correct selector for your video
    var scrollPosition = window.scrollY;

    if (scrollPosition >= video.offsetTop + video.offsetHeight || scrollPosition < video.offsetTop) {
        video.pause();
    } else {
        video.play();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('nav ul');

    // Toggle menu-open class on click of the menu icon
    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('menu-open');
    });

    // Optional: Close the menu when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!menuIcon.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove('menu-open');
        }
    });
});
