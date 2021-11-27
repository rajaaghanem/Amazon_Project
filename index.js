const cards=[
    {
        id:"card_0",
        img: "./assets/img/carusel_img/img (14).jpg",
        stars: "stars-num-icon-4-5",
        des:"Burt’s Bees Holiday Gift, 3 Lotion Stocking Stuffer Products, Shea Butter Hand Crea...",
        votes: 139,
        price: "$12.99",
        icon: "price-icon"
    }
]

const card = document.querySelector(".carousle_main-all-cards");
const info = `<div id="${cards[0].id}" class="carousle_main-card" >
<img src="${cards[0].img}" alt="" srcset="">
<div class="description">${cards[0].des}</div>
<div class="stars-num">${cards[0].votes}<div class="${cards[0].stars}"></div><p></p></div>
<div class="card-price">${cards[0].price}<div class="${price-icon}"></div></div>
</div>`;

card.innerHTML += info;