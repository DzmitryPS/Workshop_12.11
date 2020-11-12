const bgcolorBtn = document.getElementById('btn-bgcolor');
const userNameBtn = document.getElementById('btn-user-name');
const pictureBtn = document.getElementById('btn-picture');
const priceBtn = document.getElementById('btn-price');

const docBody = document.getElementById('bg');
const picture = document.getElementById('cats');
const currentPrice = document.getElementById('price');

const pictureLinks = ['https://www.armani.com/cloud/armanif31wp/uploads/2020/10/Emporio_Armani_M_Evening.jpg', 'https://www.armani.com/cloud/armanif31wp/uploads/2020/10/Giorgio_Armani_M_Editorial_New_Formal.jpg'];

let startingPrice = 100;
currentPrice.innerHTML = `${startingPrice} €`;

const changeColor = () => {
    docBody.classList.add('bg-color');
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