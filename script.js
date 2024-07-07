// Custom JavaScript

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    //Basic form validation

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Form submitted!');
        this.reset();
    } else {
        alert('Please fill out of all fields.');
    }    
});