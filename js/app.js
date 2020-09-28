const headerImages = [
        ['banner-01.jpg', 'banner-01-resp.jpg'], 
        ['banner-02.jpg', 'banner-02-resp.jpg'],
        ['banner-03.jpg', 'banner-03-resp.jpg'],
        ['banner-04.jpg', 'banner-04-resp.jpg']
];

const arrowsHeader = document.querySelectorAll('.arrows i');
let currImgIndex = 0;

const eventListeners = () => {

    document.addEventListener('DOMContentLoaded', setBackImage(0) );

    window.addEventListener('resize', () => setBackImage(currImgIndex) );
    
    arrowsHeader[0].addEventListener('click', () => {
        if (--currImgIndex < 0) {
            currImgIndex = 3;
        }
        setBackImage(currImgIndex);
    });
    arrowsHeader[1].addEventListener('click', () => setBackImage(++currImgIndex));
}

const setBackImage = (switchTo) => {
    const isScreenBig = screen.width >= 768 ? 0 : 1;
    const url = `url(../images/${ headerImages[switchTo % 4][isScreenBig] })`;
    document.querySelector('.back-img').style.backgroundImage = url;
}

eventListeners();
