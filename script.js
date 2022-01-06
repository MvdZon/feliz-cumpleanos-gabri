document.addEventListener("DOMContentLoaded", function() { 
    const vacationPicture = document.querySelector(`.vacation-pictures`);
    const noOfPics = 13;

    initialize();

    function initialize(){
        setBackgroundColors();
        startFlippingPictures();
    }

    function setBackgroundColors(){
        setInterval(function() {
            var randomColor = Math.floor(Math.random() * 16777215).toString(16);
            document.body.style.backgroundColor = "#" + randomColor;
        }, 500);
    }

    function startFlippingPictures(){
        setInterval(function() {
            const randomNumber = Math.ceil(Math.random() * noOfPics);
            vacationPicture.src = `fotos/${randomNumber}.jpg`;
        }, 4000);
    }
});