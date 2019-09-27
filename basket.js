class BasketsItem {
   constructor( title, price, number ) {
     this.title = title;
     this.price = price;
     this.number = number;
   }

   render() {
     return `<table class = "table">
     <thead>
         <tr class = "tableHeader">
           <td>№</td>
           <td>ID</td>
           <td>Название</td>
           <td>Цена</td>
           <td>Кол-во</td>
           <td></td>
           <td></td>
         </tr>
     </thead>
     <tbody class="tbody"></tbody>
     <tfoot>
         <tr class="rowSum">
             <td class="summary">Итого:</td>
             <td class="totalSum">  </td>
             <td>&#8381;</td>
             <td></td>
             <td></td>
         </tr>
     </tfoot>
 </table>`
   }
}

class BasketsList {
  constructor() {
    this.baskets = [];
  }

  fetchBaskets() {
  this.baskets = [{
    title: 'Название', price: 'Цена', number: 'количество',
  }
       
       
    ];
  }
  render() {
    let Modal = '';
    this.baskets.forEach(basket => {
      const basketItem = new BasketsItem( basket.title, basket.price, basket.number);
      Modal += basketItem.render();
    });
    document.querySelector('.btn-menu').innerHTML = Modal;
  }

}

const listModal = new BasketsList();
listModal.fetchBaskets();
listModal.render();

const basket = document.querySelector('.cart-button');
const basketContainer = document.querySelector('.btn-menu');


basket.addEventListener('click', function (event) {
  if (basketContainer.classList.contains('menuHidden')) {
      basketContainer.classList.remove('menuHidden');
  } else {
      basketContainer.classList.add('menuHidden');
  }
});
