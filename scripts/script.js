const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.color = '#ff7f50';
  });
  
  link.addEventListener('mouseout', () => {
    link.style.color = '#0066cc';
  });
});