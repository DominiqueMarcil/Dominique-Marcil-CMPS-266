// Javascript One| Unit 5 | Number Guessing Game
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
/*
    Number Guessing Game inspired by basic JavaScript tutorials on MDN Web Docs and freeCodeCamp.
    Accordion functionality adapted from jQuery UI documentation and W3Schools.
    Modal Image Viewer script inspired by a W3Schools tutorial.
*/


// This is Jquery for the accordion | https://www.w3schools.com/howto/howto_js_accordion.asp | Unit 6
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


// Javascript Two | Unit 5 | Modal Image Viewer
// Modal Expolore Alberta 
// Get all images and modals
var imgs = document.querySelectorAll('.portfolioImage img');
var modals = document.querySelectorAll('.modal');
var spans = document.querySelectorAll('.close');

// Loop through all images
imgs.forEach((img, index) => {
  // Get the corresponding modal and its elements
  var modal = modals[index];
  var modalImg = modal.querySelector('.modal-content');
  var captionText = modal.querySelector('#caption');

  // Add an onclick event to the image
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  // Add an onclick event to the close span
  spans[index].onclick = function() {
    modal.style.display = "none";
  }
});

// Javascript Three | Unit 5 | Colour Blindness Feature
// Sets color sceheme for all page when clicked | Accessibility feature
function setColorScheme(scheme) {
    document.body.className = scheme;
}
document.addEventListener('DOMContentLoaded', function() {
    const savedScheme = localStorage.getItem('color-scheme');
    if (savedScheme) {
        setColorScheme(savedScheme);
    }
});

function setColorScheme(scheme) {
    document.body.className = scheme;
    localStorage.setItem('color-scheme', scheme);
}

// Carasoul of Quotes
document.addEventListener("DOMContentLoaded", function() {
    if (window.location.hash) {
        const hash = window.location.hash.substring(1);
        const element = document.getElementById(hash);
        
        if (element) {
            const accordionContent = element.querySelector(".workaccordion-content");

            if (accordionContent && accordionContent.style.display !== "block") {
                accordionContent.style.display = "block"; // Open the accordion item
            }
        }
    }
});


// AJAX API | Unit 6 | Fetch API
// Can I use a live chat bot as a fetch API? I could use CHATBOT API

