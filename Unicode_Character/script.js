const charInput = document.getElementById('charInput');
const getCodeBtn = document.getElementById('getCodeBtn');
const charCodeDisplay = document.getElementById('charCode');

getCodeBtn.addEventListener('click', () => {
    const inputChar = charInput.value.trim();
    if (inputChar) {
        const charCode = inputChar.charCodeAt(0);
        charCodeDisplay.textContent = `The character code for "${inputChar}" is ${charCode}.`;
    } else {
        charCodeDisplay.textContent = 'Please enter a character.';
    }
});