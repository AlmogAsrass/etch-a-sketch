const container = document.querySelector('.container');

let divs = [];

/*for (let i = 0; i < 256; i++) {
    divs.push(document.createElement('div'));
}

divs.forEach((div) => {
    container.appendChild(div);
    div.addEventListener('mouseover', () => {
        //div.classList.toggle('pixel')
        div.style.backgroundColor = 'grey';
    })
})*/

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

        divs.forEach((div) => {
            container.appendChild(div);
            div.style.cssText = `height: ${960 / userInput}px; width: ${960 / userInput}px`;
            div.addEventListener('mouseover', () => {
                //div.classList.toggle('pixel')
                div.style.backgroundColor = 'grey';
            })
        })
    }
})