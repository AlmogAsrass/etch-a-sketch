const container = document.querySelector('.container');

let divs = [];

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    let userInput;
    userInput = Number(prompt('Enter a Number'));
    if (userInput > 100) {
        userInput = Number(prompt('Enter a Number between 1 and 100'));
    } else {
        for (let i = 0; i < userInput * userInput; i++) {
            divs.push(document.createElement('div'));
        }
        let darker = 100;
        divs.forEach((div) => {
            container.appendChild(div);
            div.style.cssText = `height: ${960 / userInput}px; width: ${960 / userInput}px`;
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = `color-mix(in hsl, hsl(${randomColor()}, 100%, 50%) ${darker}%, black)`;
                for (let i = 0; i < 10; i++) {
                    if (darker === 0) break;
                    else { darker -= 10 } break;
                }
            })
        })
    }
})

function randomColor() {
    return Math.floor(Math.random() * 361)
}