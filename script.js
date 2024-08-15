document.addEventListener('DOMContentLoaded', () => {
    const checkButton = document.getElementById('checkButton');
    const result = document.getElementById('result');

    checkButton.addEventListener('click', () => {
        const numberInput = document.getElementById('numberInput').value;

        if (numberInput === '') {
            result.textContent = 'Please enter a number.';
            return;
        }

        const digits = numberInput.toString().split("").map(Number);
        const sum = digits.reduce((a, b) => a + b, 0);
        const product = digits.reduce((a, b) => a * b, 1);

        if (sum === product) {
            result.textContent = `${numberInput} is a Spy Number!`;
        } else {
            result.textContent = `${numberInput} is not a Spy Number.`;
        }
    });
});



