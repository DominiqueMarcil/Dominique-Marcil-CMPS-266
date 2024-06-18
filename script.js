function toggleAccordion(event) {
    const header = event.currentTarget;
    const content = header.nextElementSibling;
    
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