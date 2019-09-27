

  


class Block {
  constructor(id, className, tagName) {
    this.id = id;
    this.className = className;
    this._tagName = tagName;
  
    this._element = null;
  }

  render() {
    if(!this._element) {
      this._element = document.createElement(this._tagName);
  
      if(this.id) {
        this._element.id = this.id;
      }
  
      this._element.className = this.className;
    }
  
    return this._element;
  }
}

class Menu extends Block {
  constructor(id, className, items) {
    super(id, className, 'ul');
  
    this.items = items;
  }

  render() {
    super.render();
  
    this.items.forEach((item) => {
      if(item instanceof Block) {
        this._element.appendChild(item.render());
      }
    });
  
    return this._element;
  }
}

class MenuItem extends Block {
  constructor(title, href) {
    super(null, 'menu-item', 'li');
  
    this.title = title;
    this.href = href;
  }

  render() {
    super.render();
  
    const $link = document.createElement('a');
    $link.textContent = this.title;
    $link.href = this.href;
  
    this._element.appendChild($link);
  
    return this._element;
  }
}


const menuItem1 = new MenuItem('Главная', '#');  
const menuItem2 = new MenuItem('Католог', '/news');
const menuItem3 = new MenuItem('Контакты', '/blog');

const menu = new Menu('menu', 'menu', [menuItem1, menuItem2, menuItem3]);
 
document.querySelector('.class_menu').appendChild(menu.render());
 