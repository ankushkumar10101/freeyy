
// Team members data

const teamMembers = [
  {
      name: "Sarah Johnson",
      role: "Chief Technical Officer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
      name: "Michael Chen",
      role: "Head of Product Compliance",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
      name: "Emma Williams",
      role: "Supply Chain Optimization Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  }
];

// Function to create team member elements
function createTeamMembers() {
  const teamGrid = document.getElementById('teamGrid');
  
  teamMembers.forEach(member => {
      const memberElement = document.createElement('div');
      memberElement.className = 'team-member-card';
      
      memberElement.innerHTML = `
          <div class="team-member-portrait">
              <img src="${member.image}" alt="${member.name}" class="team-member-image">
          </div>
          <h3 class="team-member-name">${member.name}</h3>
          <p class="team-member-role">${member.role}</p>
      `;
      
      teamGrid.appendChild(memberElement);
  });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  createTeamMembers();
});
// Navigation scroll effect
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');
const mobileMenu = document.getElementById('mobileMenu');
// window.addEventListener("resize", function () {
//   if (window.innerWidth >= 768) {
//     mobileMenu.classList.add("hidden");
//   }
//   else{
//     mobileMenu.classList.add("show");
//   }
// });

// Handle scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
let isMenuOpen = false;

function toggleMenu() {
  isMenuOpen = !isMenuOpen;
  
  if (isMenuOpen) {
    mobileMenu.classList.add('show');
    menuIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
  } else {
    mobileMenu.classList.remove('show');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  }
}

menuToggle.addEventListener('click', toggleMenu);

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    if (isMenuOpen) {
      toggleMenu();
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.q5w8n3');
  
  // Set the first item as active by default
  faqItems[0].classList.add('active');
  
  faqItems.forEach(item => {
      const button = item.querySelector('.b3j7r2');
      const answer = item.querySelector('.a6y2n4');
      
      button.addEventListener('click', () => {
          const isOpen = item.classList.contains('active');
          
          // First, smoothly close all other items
          faqItems.forEach(otherItem => {
              if (otherItem !== item && otherItem.classList.contains('active')) {
                  otherItem.classList.remove('active');
              }
          });
          
          // Add a small delay before opening the clicked item
          if (!isOpen) {
              setTimeout(() => {
                  item.classList.add('active');
              }, 100);
          } else {
              item.classList.remove('active');
          }
      });
  });
});
