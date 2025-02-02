// Collapsible course and topic handling
document.querySelectorAll('.course-title, .topic-name').forEach(element => {
    element.addEventListener('click', () => {
      const siblingList = element.nextElementSibling;
      const arrow = element.querySelector('.arrow');
      if (siblingList) {
        siblingList.style.display = siblingList.style.display === 'block' ? 'none' : 'block';
        element.classList.toggle('expanded');
      }
    });
  });
  
  document.getElementById("year").textContent = new Date().getFullYear();
  