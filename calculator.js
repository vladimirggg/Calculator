import { appendSymbol, appendDigit } from "./append.js";

document.addEventListener('DOMContentLoaded',() => {
    const input = document.getElementById('textBox')

    let buttons = document.querySelectorAll('button')

    // make them flow-in
    setTimeout(() => {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.add('animate-button');
        }
    }, 100);

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            const value = buttons[i].innerHTML.trim()
            if (isNaN(value)) appendSymbol(input,value)
            else appendDigit(input, value)
        })
    }
})
