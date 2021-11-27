const cards=[
    {
        id:"card_0",
        img: "/img/51Chr6wD8LL._AC_SR320,320_.jpg",
        stars: "stars-num-icon-4-5",
        about: "Burt’s Bees Holiday Gift, 3 Lotion Stocking Stuffer Products, Shea Butter Hand Crea..",
        votes: 139,
        price: "$12.99",
        icon: "price-icon"
    },
    {
        id:"card_1",
        img: "/img/card (1).jpg",
        stars: "stars-num-icon-4-5",
        about: "Mother's Shea by Eu'Genia Shea Butter (Vanilla, 6 Oz Tin) 100% Pure Raw Unrefined A..",
        votes: 677,
        price: "$15.99",
        icon: "price-icon"
    },
    {
        id:"card_2",
        img: "/img/card (2).jpg",
        stars: "stars-num-icon-4-5",
        about: "Burt’s Bees Holiday Gift, 3 Lip Care Stocking Stuffer Products, Misteltoe Kiss Set..",
        votes: 178,
        price: "$9.99",
        icon: "price-icon"
    },
    {
        id:"card_3",
        img: "/img/card (3).jpg",
        stars: "stars-num-icon-4-5",
        about: "ANGKMA Bath Bomb Hand-Made 12-Piece Bubble Bath Bomb Gift Set, Rich in Essential..",
        votes: 3333,
        price: "$17.99",
        icon: "price-icon"
    },
    {
        id:"card_4",
        img: "/img/card (4).jpg",
        stars: "stars-num-icon-4-5",
        about: "Epielle Character Sheet Masks | Animal Spa Mask | -For All Skin Types |spa gifts for..",
        votes: 7650,
        price: "$11.99",
        icon: "price-icon"
    },
    {
        id:"card_5",
        img: "/img/card (5).jpg",
        stars: "stars-num-icon-4",
        about: "Luxurious Lavender Spa Gift for Her - Self Care Box With Luxurious Organic Soap Bar, Bath..",
        votes: 766,
        price: "$15.99",
        icon: "price-icon"
    },
    // {
    //     id:"card_6",
    //     img: "/img/card (6).jpg",
    //     stars: "stars-num-icon-4",
    //     about: "Cleverfy Aromatherapy Shower Steamers - Variety Pack of 6 Shower Bombs. Rose Gold Set:..",
    //     votes: 106,
    //     price: "$19.99",
    //     icon: "price-icon"
    // }   
];

const card = document.querySelector(".carousle_main-all-cards");

function addInnerHtml(arr){
    let cardInfo = ``;
    for(let i=0; i<arr.length; i++){

        let info = `<div id="${arr[i].id}" class="carousle_main-card" >
        <img src="${arr[i].img}" alt="" srcset="">
        <div class="description"><p>${arr[i].about}</p></div>
        <div class="stars-num"><div class="${arr[i].stars}"></div><p>${arr[i].votes}</p></div>
        <div class="card-price">${arr[i].price}<div class="${arr[i].icon}"></div></div>
        </div>`;

        cardInfo += info;
    }
    return cardInfo;
}

const cardInfo=addInnerHtml(cards);
card.innerHTML += cardInfo;


function clickOn(){   
    let num = document.querySelector("#card-num"); 
    let value= num.innerHTML;
    value++;
    document.querySelector("#card-num").innerHTML = value;
}
















