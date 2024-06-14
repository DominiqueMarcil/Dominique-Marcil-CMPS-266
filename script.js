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



// function toggleAccordion(event) {
//     const header = event.currentTarget;
//     const content = header.nextElementSibling;
    
//     const allContents = document.querySelectorAll('.accordion-content');
    
//     // Close all contents
//     allContents.forEach(item => {
//         if (item !== content) {
//             item.style.display = 'none';
//         }
//     });
    
//     // Toggle current content
//     if (content.style.display === 'block') {
//         content.style.display = 'none';
//     } else {
//         content.style.display = 'block';
//     }
// }

// var modal = document.getElementById("myModal");
// var img = document.getElementById("Work1, Work2");
// var modalImg = document.getElementById("img01, img02");

// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
// }

// var span = document.getElementsByClassName("close")[0];

// span.onclick = function() { 
//   modal.style.display = "none";
// }