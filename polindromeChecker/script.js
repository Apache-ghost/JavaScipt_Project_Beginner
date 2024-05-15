// Get the required elements from the DOM
const inputText = document.getElementById('inputText');
const checkButton = document.getElementById('checkButton');
const result = document.getElementById('result');

// Add event listener to the checkButton
checkButton.addEventListener('click', () => {
  const word = inputText.value.toLowerCase(); // Convert the input word to lowercase for case-insensitive comparison
  const reversedWord = word.split('').reverse().join(''); // Reverse the word
  
  if (word === reversedWord) {
    result.textContent = `"${word}" is a palindrome!`;
  } else {
    result.textContent = `"${word}" is not a palindrome.`;
  }
});