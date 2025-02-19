const form = document.querySelector(form)
const input = document.querySelectorAll(input)

form.addEventListener('click', () => {
 if(input === '') {
    input.style.color === 'red';
 }
})