
function handleClick() {
    console.log("Button clicked!");
    for (let i = 1; i <= 3; i++) { 
      console.log(`Iteration ${i}`);
    }
  }
  document.getElementById("myButton").addEventListener("click", handleClick);