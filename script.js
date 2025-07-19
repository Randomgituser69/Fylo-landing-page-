const form = document.querySelector(button)
const input = document.querySelectorAll(input)

form.addEventListener('click', () => {
 if(input === '') {
    input.style.color === 'red';
 }
})