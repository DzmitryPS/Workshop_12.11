const bgcolorBtn = document.getElementById('btn-bgcolor');
const userNameBtn = document.getElementById('btn-user-name');
const pictureBtn = document.getElementById('btn-picture');
const priceBtn = document.getElementById('btn-price');

const docBody = document.getElementById('bg');
const picture = document.getElementById('cats');
const currentPrice = document.getElementById('price');

const pictureLinks = ['https://d2ph5fj80uercy.cloudfront.net/06/cat1996.jpg', 'https://animalgiftclub-static.myshopblocks.com/images/2019/03/contain/256x256/f5c338bb82fe013b6e81b816f9d6e59f.jpg'];

let startingPrice = 100;
currentPrice.innerHTML = `${startingPrice} €`;

const changeColor = () => {
    docBody.classList.remove('bg-red');
    docBody.classList.add('bg-blue');
};

const askUserName = () => {
    prompt("Please enter your user name");
};

const changePicture = () => {
    picture.src = pictureLinks[1];
};

const higherPrice = () => {
    startingPrice = startingPrice * 1.1;
    currentPrice.innerHTML = `${Math.round(startingPrice)} €`;
}

bgcolorBtn.addEventListener('click', changeColor);
userNameBtn.addEventListener('click', askUserName);

picture.src = pictureLinks[0];
pictureBtn.addEventListener('click', changePicture);

priceBtn.addEventListener('click', higherPrice);