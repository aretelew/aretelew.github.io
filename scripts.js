function openModal(project) {
    const modal = document.getElementById("modal");
    const modalContent = modal.querySelector(".modal-content");
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
    setTimeout(() => {
        modal.classList.add("show");
    }, 10);
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.classList.remove("show");
    setTimeout(() => {
        modal.style.display = "none";
    }, 300);
}

window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        closeModal();
    }
}

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
    // Click event listener to the projects title
    const projectsTitle = document.getElementById('projects-title');
    projectsTitle.addEventListener('click', showAllProjects);
});


function showAllProjects() {
    const modal = document.getElementById("modal");
    const modalContent = modal.querySelector(".modal-content");
    const title = document.getElementById("modal-title");
    const description = document.getElementById("modal-description");

    title.innerText = "All Projects";

    // Clone the existing project cards
    const projectCards = document.querySelector('.project-cards').cloneNode(true);

    // Remove the onclick attribute from the cloned cards
    projectCards.querySelectorAll('.card').forEach(card => {
        card.removeAttribute('onclick');
        // Add a click event listener to show project details
        card.addEventListener('click', () => {
            const projectTitle = card.querySelector('h4').innerText;
            const projectDescription = card.querySelector('p').innerText;
            // WRITE showProjectDetails FUNCTION
            showProjectDetails(projectTitle, projectDescription);
        });
    });

    // Clear the description and append the cloned cards
    description.innerHTML = '';
    description.appendChild(projectCards);

    modal.style.display = "block";
    setTimeout(() => {
        modal.classList.add("show");
    }, 10);
}