function sendRequest(url) {
  // pending->fulfulled|rejected
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status !== 200) {
          reject();
        }
        const users = JSON.parse(xhr.responseText);

        resolve(users);
      }
    }
    xhr.send();
  });
}



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
    this.items = [];
  }

  fetchGoods() {
    return sendRequest('/goods')
    .then((items) => {
        this.items = items;
      });

    
    
  }

  

  render() {
  //   let listHtml = '';
  //   this.goods.forEach(good => {
  //     const goodItem = new GoodsItem(good.img, good.title, good.price);
  //     listHtml += goodItem.render();
  //   });
  // //  document.querySelector('.goods-list').innerHTML = listHtml;
  return this.items.map((item) => new GoodsItem(item.img, item.title, item.price).render()).join('');
  }
  
    

}

 


const items = new GoodsList();
items.fetchGoods().then (() => {
  document.querySelector('.goods-list').innerHTML = items.render();
});
items.render();





// let price = document.querySelectorAll('.price'),
 
//       summa = 0;
 
//   [].forEach.call( items, function(el) {
//     summa += +el.innerText;
//     });
//  console.log(summa);
 
