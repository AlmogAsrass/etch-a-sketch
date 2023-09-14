const container = document.querySelector('.container');

let divs = [];

for (let i = 0; i < 256; i++) {
    divs.push(document.createElement('div'));
}

divs.forEach((div) => {
    container.appendChild(div);
    div.addEventListener('mouseover', () => {
        div.classList.toggle('pixel')
    })
})

/*divs.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'grey';
    })
})*/