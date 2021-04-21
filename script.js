// Get the element on the page with the id canvas
let canvas = document.querySelector("#canvas");

let isPainting = false;

// TODO: Replace with your own emoji
let currentEmoji = "🫑";

// Detect the moment we press the mouse down on the canvas div
canvas.addEventListener("mousedown", function (event) {
	isPainting = true;
    console.log("This is the mousedown event");
    console.log(event);

  // Create a new emoji div on the page and set it equal to your desired emoji
  let newEmoji = document.createElement("div");
    newEmoji.classList.add("emoji");
    newEmoji.innerHTML = currentEmoji;

  // Set the style of that position so that it goes where you just pressed your mouse down
  newEmoji.style.left = (event.pageX - 11) + "px";
  newEmoji.style.top = (event.pageY - 11) + "px";

// Add that emoji to the canvas element so that it appears on the screen
canvas.appendChild(newEmoji);
})

// TODO: Add functionality that makes it so the emoji "paints" when you hold your mouse down and move it on the screen
canvas.addEventListener("mousemove", function() {
	if (isPainting){
		console.log("This is the mousemove event");
		console.log(event);

	let newEmoji = document.createElement("div");
	newEmoji.classList.add("emoji");
	newEmoji.innerHTML = currentEmoji;

	newEmoji.style.left = (event.pageX - 11 + "px");
	newEmoji.style.top = (event.pageY - 11 + "px");

	canvas.appendChild(newEmoji);
	}
})

canvas.addEventListener("mouseup", function(event) {
	isPainting = false;
})

// TODO: Add functionality so when you hit the "Backspace" key, the contents of the canvas clears
document.addEventListener("keydown", function(event){
  console.log("This is the keydown event");
  console.log(event);
	if (event.key == "Backspace") {
     canvas.innerHTML = "";
	}
})














