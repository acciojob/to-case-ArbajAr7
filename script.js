function toCase(text) {
  // write your code here
	let upText =text.toLowerCase()+"-"+text.toUpperCase();
  
  return upText;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
