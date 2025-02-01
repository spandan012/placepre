// document.addEventListener('DOMContentLoaded', () => {
//     const menuToggle = document.querySelector('.menu-toggle');
//     const navUl = document.querySelector('nav ul');
//     const tierLinks = document.querySelectorAll('nav ul li a');
//     const tierSections = document.querySelectorAll('.tier-section');
//     const companies = document.querySelectorAll('.company');
//     const modal = document.getElementById('companyDetails');
//     const closeBtn = document.querySelector('.close');
//     const companyNameElement = document.getElementById('companyName');

//     // Toggle mobile menu
//     menuToggle.addEventListener('click', () => {
//         navUl.classList.toggle('show');
//     });

//     // Show/hide tier sections
//     tierLinks.forEach(link => {
//         link.addEventListener('click', (e) => {
//             e.preventDefault();
//             const tier = link.getAttribute('data-tier');
//             tierSections.forEach(section => {
//                 if (section.id === `tier${tier}`) {
//                     section.style.display = 'block';
//                 } else {
//                     section.style.display = 'none';
//                 }
//             });
//         });
//     });

//     // Show company details modal
//     companies.forEach(company => {
//         company.addEventListener('click', () => {
//             const companyName = company.textContent;
//             companyNameElement.textContent = companyName;
//             modal.style.display = 'block';
//         });
//     });

//     // Close modal
//     closeBtn.addEventListener('click', () => {
//         modal.style.display = 'none';
//     });

//     // Close modal when clicking outside
//     window.addEventListener('click', (e) => {
//         if (e.target === modal) {
//             modal.style.display = 'none';
//         }
//     });

//     // Handle sidebar navigation
//     const sidebarLinks = document.querySelectorAll('.sidebar a');
    
//     sidebarLinks.forEach(link => {
//         link.addEventListener('click', (e) => {
//             // Remove active class from all links
//             sidebarLinks.forEach(l => l.classList.remove('active'));
//             // Add active class to clicked link
//             link.classList.add('active');
//         });
//     });

//     // Handle problem difficulty filters
//     const difficultyFilters = document.querySelectorAll('.difficulty-filter');
    
//     difficultyFilters?.forEach(filter => {
//         filter.addEventListener('click', () => {
//             const difficulty = filter.dataset.difficulty;
//             const problems = document.querySelectorAll('.problem-card');
            
//             problems.forEach(problem => {
//                 if (difficulty === 'all' || problem.dataset.difficulty === difficulty) {
//                     problem.style.display = 'block';
//                 } else {
//                     problem.style.display = 'none';
//                 }
//             });
//         });
//     });
// });
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const companies = document.querySelectorAll('.company-card');

    // Handle navigation menu
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Handle company card clicks
    companies.forEach(company => {
        company.addEventListener('click', () => {
            const companyName = company.querySelector('h2').textContent;
            const companySlug = companyName.toLowerCase().replace(/\s+/g, '-');
            window.location.href = `${companySlug}.html`;
        });
    });

    // Smooth scroll for tier sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add tier navigation if it exists
    const tierNav = document.querySelector('.tier-nav');
    if (tierNav) {
        const tierLinks = tierNav.querySelectorAll('a');
        tierLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').slice(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Handle difficulty filters on company pages
    const difficultyFilters = document.querySelectorAll('.difficulty-filter');
    if (difficultyFilters.length > 0) {
        difficultyFilters.forEach(filter => {
            filter.addEventListener('click', () => {
                const difficulty = filter.dataset.difficulty;
                const problems = document.querySelectorAll('.problem-card');
                
                problems.forEach(problem => {
                    if (difficulty === 'all' || problem.dataset.difficulty === difficulty) {
                        problem.style.display = 'block';
                    } else {
                        problem.style.display = 'none';
                    }
                });

                // Update active filter
                difficultyFilters.forEach(f => f.classList.remove('active'));
                filter.classList.add('active');
            });
        });
    }

    // Implement search functionality if search input exists
    const searchInput = document.getElementById('company-search');
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.toLowerCase();
            companies.forEach(company => {
                const companyName = company.querySelector('h2').textContent.toLowerCase();
                if (companyName.includes(searchTerm)) {
                    company.style.display = 'block';
                } else {
                    company.style.display = 'none';
                }
            });
        });
    }
});
