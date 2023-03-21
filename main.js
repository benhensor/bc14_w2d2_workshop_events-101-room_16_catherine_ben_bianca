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
