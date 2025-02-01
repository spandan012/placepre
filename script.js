document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');
    const tierLinks = document.querySelectorAll('nav ul li a');
    const tierSections = document.querySelectorAll('.tier-section');
    const companies = document.querySelectorAll('.company');
    const modal = document.getElementById('companyDetails');
    const closeBtn = document.querySelector('.close');
    const companyNameElement = document.getElementById('companyName');

    // Toggle mobile menu
    menuToggle.addEventListener('click', () => {
        navUl.classList.toggle('show');
    });

    // Show/hide tier sections
    tierLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const tier = link.getAttribute('data-tier');
            tierSections.forEach(section => {
                if (section.id === `tier${tier}`) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });
        });
    });

    // Show company details modal
    companies.forEach(company => {
        company.addEventListener('click', () => {
            const companyName = company.textContent;
            companyNameElement.textContent = companyName;
            modal.style.display = 'block';
        });
    });

    // Close modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});