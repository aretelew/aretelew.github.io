function openModal(project) {
    const modal = document.getElementById("modal");
    const title = document.getElementById("modal-title");
    const description = document.getElementById("modal-description");

    if (project === 'project1') {
        title.innerText = "Project 1 Title";
        description.innerText = "Detailed information about Project 1.";
    } else if (project === 'project2') {
        title.innerText = "Project 2 Title";
        description.innerText = "Detailed information about Project 2.";
    }

    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        closeModal();
    }
}

// Function to handle the gradient animation
function handleGradientAnimation(e) {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the card
        const y = e.clientY - rect.top;  // y position within the card

        const gradient = card.querySelector('.card-gradient');
        gradient.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 80%)`;
    });
}

// Add event listeners for mousemove and touchmove
document.addEventListener('DOMContentLoaded', () => {
    const projectSection = document.getElementById('projects');

    projectSection.addEventListener('mousemove', handleGradientAnimation);
    projectSection.addEventListener('touchmove', (e) => {
        handleGradientAnimation(e.touches[0]);
    });
});

window.addEventListener('load', function() {
    // Once the page is fully loaded, add the 'loaded' class to the body
    document.body.classList.add('loaded');
});

function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
});