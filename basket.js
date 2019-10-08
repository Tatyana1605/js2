
class Baskets {
  constructor () {
    this.items = [];
    this.element = null;
  }

  fetchItem(){
    return fetch('/baskets')
      .then(response => response.json())
      .then((items) => {
        this.items = items;
      });
  }

  add(item){
    fetch('/baskets', {
      method: 'POST',
      body: JSON.stringify({...item, qty: 1}),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((item) => {
        
        this.element.insertAdjacentHTML('beforeend', this.renderItem(item));
      });
      this.items.push({...item, qty: 1});
  }

   

  update(id, newQty) {
    if (newQty < 1) {
      if(confirm('Вы действительно хотите удалить товар из корзины?')) {
        fetch(`/baskets/${id}`, {
          method: 'DELETE'
        })
        .then(response => response.json())
        .then((item) => {
          const $item = document.querySelector(`.btn-menu li[data-id="${id}"]`);
          if($item) {
            $item.remove();
          }
          
        });
        const idx = this.items.findIndex(entity => entity.id === id);
        this.items.splice(idx, 1);
      } else {
          return false;
      }
        
       
    } else {
      fetch(`/baskets/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({qty: newQty}),
        headers: {
          'Content-type': 'application/json',
        },
      })
      .then(response => response.json())
      .then((item) => {
        
      });
      const idx = this.items.findIndex(entity => entity.id === id);
      this.items[idx].qty = newQty;
    }
    return true;
    
  }

  renderItem(item) {
    return `<li data-id="${item.id}" class="list">
              <h3>${item.title}</h3>
              <input class="qty" type="number">
            </li>` 
 
   
   
  }
  render() {
    if(!this.element) {
       this.element = document.createElement('table');

       this.element.innerHTML = this.items.map(this.renderItem).join('');
    }
   

    
   
    return this.element;
  }

  total() {
     
    return this.items.reduce((acc, item) => acc + item.qty * item.price, 0 );
 
  }
}

 
 

const baskets = new Baskets();
baskets.fetchItem().then(() => {
  document.querySelector('.btn-menu').appendChild(baskets.render());
   
  document.querySelector('.total').innerHTML = baskets.total();
});


document.querySelector('.btn-menu').addEventListener('change', (event) =>{
  if(event.target.classList.contains('qty')) {
    const $parent = event.target.parentElement;
    if(!baskets.update($parent.dataset.id, +event.target.value)) {
       event.target.value = 1;
    }
     
   document.querySelector('.total').innerHTML = baskets.total();
  }
} );


document.querySelector('.goods-list').addEventListener('click', (event) => {
  if(event.target.classList.contains('btn')) {
    const id = event.target.dataset.id;
    const $item = document.querySelector(`.btn-menu li[data-id="${id}"]`);
    if($item) {
      const $currentQty = $item.querySelector('.qty');
      $currentQty.value = +$currentQty.value +1;
      baskets.update(id, +$currentQty.value)
    } else {
      baskets.add(event.target.dataset); 
    }
     
   document.querySelector('.total').innerHTML = baskets.total();
    
  }
 });
 

const basket = document.querySelector('.cart-button');
const basketContainer = document.querySelector('.btn-menu');


basket.addEventListener('click', function (event) {
  if (basketContainer.classList.contains('menuHidden')) {
      basketContainer.classList.remove('menuHidden');
  } else {
      basketContainer.classList.add('menuHidden');
  }
});


