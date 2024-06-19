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
    
    const allContents = document.querySelectorAll('.accordion-content');
    
    // Close all contents
    allContents.forEach(item => {
        if (item !== content) {
            item.style.display = 'none';
        }
    });
    
    // Toggle current content
    if (content.style.display === 'block') {
        content.style.display = 'none';
    } else {
        content.style.display = 'block';
    }


var modal1 = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");

var img1 = document.getElementById("Work1");
var img2 = document.getElementById("Work2");

var modalImg1 = document.getElementById("img01");
var modalImg2 = document.getElementById("img02");

img1.onclick = function(){
  modal1.style.display = "block";
  modalImg1.src = this.src;
}

img2.onclick = function(){
  modal2.style.display = "block";
  modalImg2.src = this.src;
}

var spans = document.getElementsByClassName("close");

for (var i = 0; i < spans.length; i++) {
  spans[i].onclick = function() { 
    this.parentElement.style.display = "none";
  }
}