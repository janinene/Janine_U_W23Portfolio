// Get the  ICAS 1 modal
let icas1_modal= document.getElementById("icas1_modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let icas1_img = document.getElementById("icas1Zoom");
let icas1modalImg = document.getElementById("icas1_img");
let icas1captionText = document.getElementById("icas1_caption");
icas1_img.onclick = function(){
    icas1_modal.style.display = "block";
    icas1modalImg.src = this.src;
    icas1captionText.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
let icas_span = document.getElementsByClassName("icas1_close")[0];

// When the user clicks on <span> (x), close the modal
icas_span.onclick = function() {
    icas1_modal.style.display = "none";
}

// Get the  ICAS 2 modal
let icas2_modal= document.getElementById("icas2_modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let icas2_img = document.getElementById("icas2Zoom");
let icas2modalImg = document.getElementById("icas2_img");
let icas2captionText = document.getElementById("icas2_caption");
icas2_img.onclick = function(){
    icas2_modal.style.display = "block";
    icas2modalImg.src = this.src;
    icas2captionText.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
let icas2_span = document.getElementsByClassName("icas2_close")[0];

// When the user clicks on <span> (x), close the modal
icas2_span.onclick = function() {
    icas2_modal.style.display = "none";
}

// Get the  ICAS 3 modal
let icas3_modal= document.getElementById("icas3_modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let icas3_img = document.getElementById("icas3Zoom");
let icas3modalImg = document.getElementById("icas3_img");
let icas3captionText = document.getElementById("icas3_caption");
icas3_img.onclick = function(){
    icas3_modal.style.display = "block";
    icas3modalImg.src = this.src;
    icas3captionText.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
let icas3_span = document.getElementsByClassName("icas3_close")[0];

// When the user clicks on <span> (x), close the modal
icas3_span.onclick = function() {
    icas3_modal.style.display = "none";
}



// Get the  Python modal
let python_modal= document.getElementById("python_modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let python_img = document.getElementById("python_certificate");
let modalImg = document.getElementById("python_img");
let captionText = document.getElementById("python_caption");
python_img.onclick = function(){
    python_modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    python_modal.style.display = "none";
}

// Get the  NodeJS modal
let node_modal= document.getElementById("nodejs_modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let node_img = document.getElementById("nodejs_certificate");
let nodeModalImg = document.getElementById("nodejs_img");
let nodeCaption = document.getElementById("nodejs_caption");
node_img.onclick = function(){
    node_modal.style.display = "block";
    nodeModalImg.src = this.src;
    nodeCaption.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
let node_span = document.getElementsByClassName("node_close")[0];

// When the user clicks on <span> (x), close the modal
node_span.onclick = function() {
    node_modal.style.display = "none";
}