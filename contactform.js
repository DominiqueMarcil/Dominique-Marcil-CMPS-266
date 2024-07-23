document.querySelector('form').addEventListener('submit', function() {
    setTimeout(() => {
        this.reset();
    }, 500); // 5000 milliseconds = 5 seconds
});