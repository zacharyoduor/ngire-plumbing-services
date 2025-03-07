// Example of a simple interactive feature: Smooth scroll for navigation links
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



// Making the contact links more interactive (Whatsapp)
const whatsappLink = document.querySelector('.contact-link[href^="https://wa.me/"]');
whatsappLink.addEventListener('mouseover', () => {
    whatsappLink.style.backgroundColor = '#25d366';  // Change color on hover
});

whatsappLink.addEventListener('mouseout', () => {
    whatsappLink.style.backgroundColor = '#27ae60';  // Revert color on mouse out
});

document.getElementById("email").addEventListener("click", function () {
    window.location.href = "mailto:your-email@example.com?subject=Let's%20Chat&body=Hi,%20I%20would%20like%20to%20connect!";
});









    // Get references to the button, image container, and image
    const button = document.getElementById('showImageBtn');
    const imageContainer = document.getElementById('imageContainer');
    const image = document.getElementById('image');

    // Flag to track if the image is shown or not
    let imageShown = false;

    // Event listener to toggle the visibility of the image when the button is clicked
    button.addEventListener('click', function() {
        if (imageShown) {
            // Fade-out effect for hiding the image
            imageContainer.style.opacity = 0;

            // Wait for the transition to complete before hiding the image container
            setTimeout(() => {
                imageContainer.style.display = 'none';
                button.textContent = 'View certificates'; // Change button text
                imageShown = false; // Mark image as hidden
            }, 500); // Match the transition duration (0.5s)
        } else {
            // Show the image container with smooth fade-in effect
            imageContainer.style.display = 'block';
            setTimeout(() => {
                imageContainer.style.opacity = 1;
            }, 10); // To trigger the transition effect
            button.textContent = 'Hide'; // Change button text
            imageShown = true; // Mark image as shown
        }
    });

    // Event listener to close the image smoothly when the image itself is clicked
    image.addEventListener('click', function() {
        // Fade-out effect for hiding the image
        imageContainer.style.opacity = 0;

        // Wait for the transition to complete before hiding the image container
        setTimeout(() => {
            imageContainer.style.display = 'none';
            button.textContent = 'View certificates'; // Change button text
            imageShown = false; // Mark image as hidden
        }, 500); // Match the transition duration (0.5s)
    });

