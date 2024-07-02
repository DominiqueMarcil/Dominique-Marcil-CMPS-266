console.log('%cHey there, curious coder! 👋', 'color: #77aaff; font-size: 20px;');
console.log('%cThanks for checking out my site. If you have any questions, feel free to reach out! In the mean time, lets play a game!', 'color: #77aaff; font-size: 16px;');

(function() {
    // Initialize the game
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    console.log("Welcome to the Number Guessing Game!");
    console.log("I've picked a random number between 1 and 100. Try to guess it!");
    console.log("Type guess(number) to make a guess. For example: guess(42)");

    // Define the guess function
    window.guess = function(number) {
        attempts++;
        if (number < 1 || number > 100) {
            console.log("Please guess a number between 1 and 100.");
        } else if (number < randomNumber) {
            console.log("Too low! Try again.");
        } else if (number > randomNumber) {
            console.log("Too high! Try again.");
        } else {
            console.log(`Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts!`);
            console.log("To play again, refresh the page.");
        }
    };
})();


$(document).ready(function() {
    $('.workaccordion-header').click(function(event) {
        // Prevent the document click event from firing when an accordion header is clicked
        event.stopPropagation();

        // Check if the clicked accordion item is already active
        var isActive = $(this).hasClass('active');

        // Close all accordion items except the clicked one if it is active
        $('.workaccordion-content').not($(this).next()).slideUp();
        $('.workaccordion-header').not($(this)).removeClass('active');

        // If the clicked accordion item was not active, open it
        if (!isActive) {
            $(this).next('.workaccordion-content').slideDown();
            $(this).addClass('active');
        }
    });

    // Listen for clicks on the document
    $(document).on('click', function(event) {
        // If the click is outside of an accordion header or content, close all accordions
        if (!$(event.target).closest('.workaccordion-header, .workaccordion-content').length) {
            $('.workaccordion-content').slideUp();
            $('.workaccordion-header').removeClass('active');
        }
    });
});

// Contact Form
// Initialize EmailJS
(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: "3paMIOPOwV2E7vtkZ",
    });
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Send the email
    emailjs.send('service_hhvigdi', 'template_e090hdn', { // Replace with your actual service ID and template ID
        from_name: name,
        from_email: email,
        message: message
    })
    .then(function(response) {
        document.getElementById('status').innerText = 'Message sent successfully!';
        document.getElementById('status').style.color = 'green';
    }, function(error) {
        document.getElementById('status').innerText = 'Failed to send message.';
    });

    // Clear the form
    document.getElementById('contact-form').reset();
});



