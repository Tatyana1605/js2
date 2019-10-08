



class GoodsItem {
  constructor(id, img, title, price) {
    this.id = id;
    this.img = img;
    this.title = title;
    this.price = price;
  }
  render() {
    return `
    <div class="goods-item">
    <img src='${this.img}'>
    <h3>${this.title}</h3>
    <p class='price'>${this.price} </p>&#8381; 
    <button data-id="${this.id}" data-title="${this.title}" data-price="${this.price}" class="btn">Добавить</button>
    </div>`;
  }
}



class GoodsList {
  constructor() {
    this.items = [];
    this.filteredItems = [];
    this.loaded = false;
  }

  fetchGoods() {
    return fetch('/goods')
    .then(response => response.json())
    .then((items) => {
        this.items = items;
        this.loaded = true;
        this.filteredItems = items;
      });

    
    
  }

  filter(query) {
    this.filteredItems = this.items.filter((item) => {
      const regexp = new RegExp(query, 'i');
      return regexp.test(item.title);
    });
  }
  

  render() {
    if(this.loaded && this.filteredItems.length === 0) {
      return `<div>Ничего не найдено</div>`;
    }
   
  return this.filteredItems.map((item) => new GoodsItem(item.id, item.img, item.title, item.price).render()).join('');
  }
  
    

}

 


const items = new GoodsList();
items.fetchGoods().then (() => {
  document.querySelector('.goods-list').innerHTML = items.render();
});
items.render();



document.querySelector('[name="query"]').addEventListener('input', (event) => {
  const query = event.target.value;
   
    items.filter(query);
    document.querySelector('.goods-list').innerHTML = items.render();

 
  
});

 
 
