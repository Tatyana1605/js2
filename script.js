 



class GoodsItem {
  constructor(img, title, price) {
    this.img = img;
    this.title = title;
    this.price = price;
  }
  render() {
    return `<div class="goods-item"><img src='${this.img}'><h3>${this.title}</h3><p class='price'>${this.price} </p>&#8381; <button class="btn">Добавить</button></div>`;
  }
}



class GoodsList {
  constructor() {
    this.goods = [];
  }

  fetchGoods() {
    this.goods = [
      { img: './img/1.jpg', title: 'Gel Polish  Elpaza 9', price: 100  },
      { img: './img/2.jpg', title: 'Gel Polish  Elpaza 10', price: 120 },
      { img: './img/3.jpg', title: 'Gel Polish  Elpaza 12', price: 350 },
      { img: './img/4.jpg', title: 'Gel Polish  Elpaza 20', price: 250 },
      { img: './img/5.jpg', title: 'Gel Polish  Elpaza 14', price: 250 },
    ];

    
  }

  

  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.img, good.title, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }
  
   getTotal(){
  
  }

}

 


const list = new GoodsList();
list.fetchGoods();
list.render();


let items = document.querySelectorAll('.price'),
 
      summa = 0;
 
  [].forEach.call( items, function(el) {
    summa += +el.innerText;
    });
 console.log(summa);
 
