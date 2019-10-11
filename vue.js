const app = new Vue({

  el: '#root',
  data: {
    items: [],
    filteredItems: [],
    basket: [],
    menus: [],
    query: '',
    loaded: false,
     
   
  },
  methods: {
    handleSearchClick() {
      return fetch('/goods')
      .then(response => response.json())
      .then((items) => {
          this.items = items;
          this.loaded = true;
          this.filteredItems = items;
        })
      .then(() => {
        
          this.filteredItems = this.items.filter((item) => {
          const regexp = new RegExp(this.query, 'i');
          return regexp.test(item.title);
          });
        
        
      })
    
      
      
    },
     
    handelBuyClick(item){
      fetch('/baskets', {
        method: 'POST',
        body: JSON.stringify({...item, qty: 1}),
        headers: {
          'Content-type': 'application/json',
        },
      }).then(() => {
        this.basket.push({...item, qty:1});
      })
      
      
    },
  },
  mounted() {
    fetch('/goods')
      .then(response => response.json())
      .then((goods) => {
          this.items = goods;
          this.filteredItems = goods;
      });
    
    fetch('/baskets')
      .then(response => response.json())
      .then((baskets) => {
          this.baskets = baskets;
           
      });
    fetch('/menus')
      .then(response => response.json())
      .then((menus) => {
          this.menus = menus;
          
      });
  },

  computed: {
    total(){
      return this.basket.reduce((acc, item) => acc + item.qty * item.price, 0 );
    }
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