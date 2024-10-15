function openModal(project) {
    const modal = document.getElementById("modal");
    const modalContent = modal.querySelector(".modal-content");
    const title = document.getElementById("modal-title");
    const description = document.getElementById("modal-description");

    const projectDetails = {
        project1: {
            title: "Project 1 Title",
            description: "Detailed information about Project 1. This project showcases [specific skills or technologies]. It addresses [problem or challenge] and demonstrates [key features or achievements]."
        },
        project2: {
            title: "Project 2 Title",
            description: "Detailed information about Project 2. This project demonstrates [specific skills or technologies]. It focuses on [main goal or purpose] and highlights [unique aspects or innovations]."
        },
        project3: {
            title: "Project 3 Title",
            description: "Detailed information about Project 3. This project highlights [specific skills or technologies]. It tackles [specific issue or need] and exhibits [notable outcomes or impacts]."
        },
        project4: {
            title: "Project 4 Title",
            description: "Detailed information about Project 4. This project features [specific skills or technologies]. It explores [particular area or concept] and showcases [key learnings or breakthroughs]."
        },
        project5: {
            title: "Project 5 Title",
            description: "Detailed information about Project 5. This project utilizes [specific skills or technologies]. It addresses [certain challenge or opportunity] and demonstrates [significant results or improvements]."
        },
        project6: {
            title: "Project 6 Title",
            description: "Detailed information about Project 6. This project implements [specific skills or technologies]. It focuses on [main objective or problem] and highlights [innovative approaches or solutions]."
        }
    };

    if (projectDetails[project]) {
        title.innerText = projectDetails[project].title;
        description.innerText = projectDetails[project].description;
    } else {
        title.innerText = "Project Details";
        description.innerText = "Details for this project are not available.";
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

    // Add click event listener to the projects title
    const projectsTitle = document.getElementById('projects-title');
    if (projectsTitle) {
        projectsTitle.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'projects.html';
        });
    }

    // Add click event listeners to project cards
    const projectCards = document.querySelectorAll('.card');
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const project = this.getAttribute('data-project');
            openModal(project);
        });
    });

    // Add click event listener to close button in modal
    const closeButton = document.querySelector('.modal .close');
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }

    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('modal');
        if (event.target === modal) {
            closeModal();
        }
    });
});