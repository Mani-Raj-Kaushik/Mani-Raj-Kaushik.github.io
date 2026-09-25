const roles = [
  'Java Developer',
  'Spring Boot Enthusiast',
  'REST API Builder',
  'Problem Solver in DSA'
];

const typingElement = document.getElementById('typing-text');
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeRole() {
  if (!typingElement) {
    return;
  }

  const currentRole = roles[roleIndex];

  if (deleting) {
    charIndex -= 1;
  } else {
    charIndex += 1;
  }

  typingElement.textContent = currentRole.slice(0, charIndex);

  if (!deleting && charIndex === currentRole.length) {
    deleting = true;
    setTimeout(typeRole, 1200);
    return;
  }

  if (deleting && charIndex === 0) {
    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  setTimeout(typeRole, deleting ? 45 : 90);
}

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.15
  }
);

document.querySelectorAll('.reveal').forEach(section => observer.observe(section));
typeRole();
