// desktop menu
const menuEmail = document.querySelector('.open-close-menu');
const desktopMenu = document.querySelector('.desktop-menu');

// mobile menu
const burgerMenu = document.querySelector('.burgerMenu');
const mobileMenu = document.querySelector('.mobile-menu');

// shopping card aside
const cartMenu = document.querySelector('.navbar-shopping-cart');
const cartAside = document.querySelector('.product-detail')


//cards container
const cardsContainer = document.querySelector('.cards-container')

// listeners
menuEmail.addEventListener('click',toogleMenus);
burgerMenu.addEventListener('click',toogleMenus);
cartMenu.addEventListener('click',toogleCartMenu);


function toogleMenus(){
    desktopMenu.classList.toggle('inactive');
    mobileMenu.classList.toggle('inactive');
    cartAside.classList.add('inactive');
}

function toogleCartMenu(){
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    cartAside.classList.toggle('inactive');
}

const productList = [
    {   name: "iPhone", price: 999, image: 'https://www.apple.com/v/iphone-14-pro/c/images/overview/hero/hero_endframe__dtzvajyextyu_large.jpg'  },
    {   name: "Samsung Galaxy", price: 849, image: 'https://www.samsung.com/global/galaxy/main/images/kv-galaxy-s23_s.jpg' },
    {   name: "Macbook Pro", price: 1799, image: 'https://www.notebookcheck.net/fileadmin/_processed_/c/3/csm_AKA8518_984be0479c.jpg'  },  
    {   name: "iPad", price: 499, image: 'https://www.apple.com/la/ipad-pro/images/overview/hero/hero_combo__fcqcc3hbzjyy_large.jpg'  },  
    {   name: "Apple Watch",price: 399,image: 'https://www.apple.com/newsroom/images/product/watch/standard/Apple_delivers-apple-watch-series-6_09152020_big.jpg.large.jpg'},
    {    "name": "PlayStation 5", "price": 499, image: 'https://depor.com/resizer/P79g1IvjfwJp2sq0JjKCTZgIKDU=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/K7WPSNJSXZBWJKINENKBVKEXPA.webp' },
];


function renderProducts(arr) {
    for (product of arr) {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
    
      // product= {name, price, image} -> product.image
      const productImg = document.createElement('img');
      productImg.setAttribute('src', product.image);
    
      const productInfo = document.createElement('div');
      productInfo.classList.add('product-info');
    
      const productInfoDiv = document.createElement('div');
    
      const productPrice = document.createElement('p');
      productPrice.innerText = `$ ${product.price}`;
      const productName = document.createElement('p');
      productName.innerText = product.name;
    
      productInfoDiv.appendChild(productPrice);
      productInfoDiv.appendChild(productName);
    
      const productInfoFigure = document.createElement('figure');
      const productImgCart = document.createElement('img');
      productImgCart.setAttribute('src', './assets/icons/bt_add_to_cart.svg');
    
      productInfoFigure.appendChild(productImgCart);
    
      productInfo.appendChild(productInfoDiv);
      productInfo.appendChild(productInfoFigure);
    
      productCard.appendChild(productImg);
      productCard.appendChild(productInfo);
    
      cardsContainer.appendChild(productCard);
    }
  }
  
  renderProducts(productList);


