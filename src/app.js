const h1 = document.createElement('h1');
h1.textContent = 'Homework 01';

const p1 = document.createElement('p');
p1.textContent = `
    For this homework, I want you to recreate this HTML page using JavaScript and the DOM API.
    This means, the HTML should have a blank body and minimal head.
    Once the page loads, use JavaScript to recreate all the elements from the original page.
`;

const p2FirstText = document.createTextNode(`
    To make it fun, and maybe a bit tricky, I\'ve added several types of elements.
    Some elements are pretty simple like these 
`);

const p2Code = document.createElement('code');
p2Code.textContent = '<p>';

const p2SecondText = document.createTextNode(`
    tags.
    Others are more going to require extra attributes or mixing text nodes with element nodes.
`);

const p2 = document.createElement('p');
p2.appendChild(p2FirstText);
p2.appendChild(p2Code);
p2.appendChild(p2SecondText);

const section = document.createElement('section');
section.appendChild(h1);
section.appendChild(p1);
section.appendChild(p2);

const main = document.createElement('main');
main.appendChild(section);

const img = document.createElement('img');
img.setAttribute('src', 'assets/mario.png');

const blockquote = document.createElement('blockquote');
blockquote.textContent = 'Mario says "Wahoo!" to homework';

const audio = document.createElement('audio');
audio.setAttribute('controls', 'true');
audio.setAttribute('autoplay', 'false');
audio.setAttribute('src', 'assets/Super Mario Bros. medley.mp3');

const aside = document.createElement('aside');
aside.appendChild(img);
aside.appendChild(blockquote);
aside.appendChild(audio);

document.body.appendChild(main);
document.body.appendChild(aside);
