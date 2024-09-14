// Function to animate skill bars on page load
window.addEventListener('load', () => {
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-skill');
        bar.style.width = width + '%';
    });
});

// Function to open the modal
function openModal(project) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    
    // Set the content of the modal based on the project
    modalContent.innerHTML = `
        <span class="close-button" onclick="closeModal()">&times;</span>
        <h2>${project.title}</h2>
        <p>${project.description}</p>
    `;
    
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Add event listeners to project cards
document.querySelectorAll('.project').forEach((projectElement, index) => {
    projectElement.addEventListener('click', () => {
        const projects = [
            {
                title: 'Vmshiksha.com',
                description: 'Transitioned VM Shiksha Society’s model online using Laravel, PHP, MySQL, and HTML/CSS. Integrated Razorpay for secure transactions.'
            },
            {
                title: 'VideoPD',
                description: 'Automated loan eligibility verification via video conferencing using Oracle Integration Cloud and JavaScript API.'
            },
            {
                title: 'API-HTML-PDF',
                description: 'Developed an API for HTML to PDF conversion for bill generation using HTML, EJS, JavaScript, and Node.js.'
            },
            {
                title: 'Data-Transfer-Banks',
                description: 'Created a secure data transfer system for banks using RSA encryption and certificates.'
            },
            {
                title: 'LOS & LMS',
                description: 'Integrated 200+ APIs for loan applications including document verification, eligibility checks, and transaction history analysis.'
            }
        ];
        
        openModal(projects[index]);
    });
});

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    alert('Thank you for your message, ' + document.getElementById('name').value + '! We will get back to you soon.');
    this.reset(); // Reset the form
});


// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animate sections on scroll
const sections = document.querySelectorAll('section');

sections.forEach(section => {
    gsap.from(section, {
        y: 50, // Start 50px down
        opacity: 0, // Start invisible
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: section,
            start: "top 80%", // Trigger when top of section hits 80% of viewport
            toggleActions: "play none none reverse" // Play animation on enter, reverse on leave
        }
    });
});



// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('header nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 70, // Adjust for fixed header
            behavior: 'smooth'
        });
    });
});




document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const responseMessage = document.getElementById('responseMessage');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission behavior

        const formData = {
            name: contactForm.name.value,
            email: contactForm.email.value,
            message: contactForm.message.value
        };

        responseMessage.textContent = "Thank you for your message! We will get back to you soon.";
        responseMessage.style.color = "green"; 

        contactForm.reset();
    });
});
