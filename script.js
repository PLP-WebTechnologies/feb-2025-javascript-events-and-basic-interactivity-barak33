// Form validation
const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');

form.addEventListener('submit', (event) => {
  let valid = true;
  nameError.textContent = '';
  emailError.textContent = '';

  if (nameInput.value.trim() === '') {
    valid = false;
    nameError.textContent = 'Name is required.';
  }

  if (!emailInput.value.includes('@')) {
    valid = false;
    emailError.textContent = 'Enter a valid email.';
  }

  if (!valid) {
    event.preventDefault();
  } else {
    alert('Form submitted successfully!');
  }
});

// Interactive element
const box = document.getElementById('interactiveBox');

box.addEventListener('mouseenter', () => {
  box.style.backgroundColor = 'lightgreen';
});

box.addEventListener('mouseleave', () => {
  box.style.backgroundColor = 'lightblue';
});
