// Handle sidebar section toggles
document.querySelectorAll('.sidebar-header').forEach(header => {
  header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const arrow = header.querySelector('.arrow');
      
      content.classList.toggle('active');
      arrow.classList.toggle('active');
      
      // Close other sections
      document.querySelectorAll('.sidebar-content').forEach(item => {
          if (item !== content && item.classList.contains('active')) {
              item.classList.remove('active');
              item.previousElementSibling.querySelector('.arrow').classList.remove('active');
          }
      });
  });
});

// Handle sidebar item clicks
document.querySelectorAll('.sidebar-content p').forEach(item => {
  item.addEventListener('click', () => {
      const targetId = item.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);
      
      // Scroll to target element
      if (targetElement) {
          const mainContent = document.querySelector('.main-content');
          const targetPosition = targetElement.offsetTop - mainContent.offsetTop;
          mainContent.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
          });
      }
  });
});