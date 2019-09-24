


const goods = [
  { img: './img/1.jpg', title: 'Gel Polish  Elpaza 9', price: 100 },
  { img: './img/2.jpg', title: 'Gel Polish  Elpaza 10', price: 120 },
  { img: './img/3.jpg', title: 'Gel Polish  Elpaza 12', price: 350 },
  { img: './img/4.jpg', title: 'Gel Polish  Elpaza 20', price: 250 },
  { img: './img/5.jpg', title: 'Gel Polish  Elpaza 14', price: 250 },
];


const renderGoodsItem = (img, title, price) => {
  return `<div class="goods-item"><img src='${img}'><h3>${title}</h3><p>${price} 	&#8381;</p><button class="btn">Добавить</button></div>`;
};

const renderGoodsList = (list) => {
  let goodsList = list.map(item => renderGoodsItem(item.img, item.title, item.price));
  document.querySelector('.goods-list').innerHTML = goodsList.join('');
}

renderGoodsList(goods);
