var nextStep = document.querySelector('#nextStep');

  nextStep.addEventListener('click', function (e) {
    e.preventDefault();
    // Hide first view
    document.getElementById('contactForm').style.display = 'none';

    // Show thank you message element
    document.getElementById('thank_you').style.display = 'block';
  });