const button = document.querySelector("#click-me");
// Task 1
function handleClick(event) {
  // If clicked, console log you clicked me!
  // If shift key pressed, change the inner text of the button to be NAILED IT
  // find property for Shift Key
  console.log('You clicked me!')
  console.log(event)

  // if Shift key then 
  if ( event.shiftKey) {
    button.textContent = "NAILED IT!";
    console.log(event) 
  }
  // console.log(event)
}

button.addEventListener("click", handleClick);

document.querySelector("#title-changer").addEventListener("keyup", (e) => {
  console.log(e.target.value);
});

// task 2

// select button class and store in a variable

let flowerButton = document.querySelector(".task-2");

// create function called 'titleChange'
// - change the page title in <head></head> to emojis

function titleChange(event) {
  document.title = `💐🌷🌼`;
  console.log(event);
}

// add event listener to the flowerButton

flowerButton.addEventListener("click", titleChange);


// Task 3

// Select input element with id #title-changer set to a variable
// Select h1 element and set to a variable

let inputChanger = document.querySelector('#title-changer');
let h1 = document.querySelector('h1');

// function(event)
  // h1 = event.target.value

function handleInput(event) {
  let inputValue = event.target.value
  h1.textContent = inputValue
  console.log(event);
}  
// event listener

inputChanger.addEventListener("keyup", handleInput);