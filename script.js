const container = document.querySelector('.container');

let divs = [];

for (let i=0; i<256; i++){
    divs.push(document.createElement('div'));
}

divs.forEach ((div) => {
    container.appendChild(div)
})
