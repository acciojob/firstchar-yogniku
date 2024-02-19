function firstChar(text) {
  // your code herejg
	 for (let char of str) {
        if (char !== ' ') {
            return char;
        }
    }
    return '';
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
