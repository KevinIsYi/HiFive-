const headerImages = [
        ['banner-01.jpg', 'banner-01-resp.jpg'], 
        ['banner-02.jpg', 'banner-02-resp.jpg'],
        ['banner-03.jpg', 'banner-03-resp.jpg'],
        ['banner-04.jpg', 'banner-04-resp.jpg']
];

const arrowsHeader = document.querySelectorAll('.arrows i');
let currImgIndex = 0, featuredImgIndex = 0;

const eventListeners = () => {

    document.addEventListener('DOMContentLoaded', () => {
        setBackImage(0);
        placeFeaturedImages();
    });

    window.addEventListener('resize', () => {
        setBackImage(currImgIndex);
        placeFeaturedImages();
    });
    
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

const placeFeaturedImages = () => {
    const screenSize = screen.width;
    const featured = document.querySelector('.featured');

    let numberOfImages = 1;

    cleanFeaturedArea(featured);

    if (screenSize >= 900) {
        numberOfImages = 4;
    } else if (screenSize >= 768) {
        numberOfImages = 3;
    } else if (screenSize >= 480) {
        numberOfImages = 2;
    }

    for (let i = 1 ; i <= numberOfImages ; ++i) {
        const newFeaturedProduct = document.createElement('div');

        newFeaturedProduct.className = 'featured-products';
        newFeaturedProduct.innerHTML = `
            <img src="./images/featured-0${i}.jpg" alt="featured-0${i}">
            <p class="in-image">New</p>
            <i class="fas fa-heart"></i>
            <button class="btn btn-add-cart">Add To Cart</button>
            <div class="specifications">
                <p>Black Dress - Denim</p>
                <div class="price-offer">
                    <p>$75.00</p>
                    <p>$49.99</p>
                </div>
            </div>
        `;
        featured.appendChild(newFeaturedProduct);
    }
}

const cleanFeaturedArea = (featured = document.querySelector('.featured')) => {
    while(featured.firstChild) {
        featured.removeChild(featured.firstChild);
    }
    console.log("Se llama");
}

eventListeners();
