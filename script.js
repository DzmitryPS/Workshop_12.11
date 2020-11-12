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