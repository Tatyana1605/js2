
 


class Hamburger {
	constructor( potato, salad, cheess, small, big, flavoring, mayonnaise) {
   
    this.big = big;
    this.small = small;
    this.cheess = cheess;
    this.salad = salad;
		this.potato = potato;
		this.flavoring = flavoring;
		this.mayonnaise = mayonnaise;
	}
 
	countPrice() {
    let result = 0;
    
     
		
		if (this.big) {
		 
			result += 100;
    }     

    if (this.small) {
		 
			result += 50;
    }   
    if (this.cheess) {
		 
			result += 10 ;
    }  

    if (this.salad) {
		 
			result += 20;
    }   
    
    if (this.potato) {
		 
			result += 15;
    }  
    
	 
		if (this.flavoring) {
			result += 15;
		}  
		
		if (this.mayonnaise) {
			result += 20;
		}  
		
		return result;
	}
	
	countCalories() {
		let result = 0;
    
     
		if (this.big) {
		 
			result += 40;
    }
    if (this.small) {
		 
			result += 20;
    }
    if (this.cheess) {
		 
			result += 20 ;
    }
    if (this.salad) {
		 
			result += 5;
    }
    if (this.potato) {
		 
			result += 10;
		}
		
		if (this.mayonnaise) {
			result += 5;
		}
		
		return result;
	}
}

document.getElementById('check').onclick = function() {
	 
  var big  = document.getElementById('bigburger').checked;
  var small  = document.getElementById('smallburger').checked;
  var cheese = document.getElementById('cheese').checked;
  var salad = document.getElementById('salad').checked;
  var potato = document.getElementById('potato').checked;
	var flavoring = document.getElementById('flavoring').checked;
	var mayonnaise = document.getElementById('mayonnaise').checked;
	
	var hamburger = new Hamburger( salad, potato, cheese, small, big,  flavoring, mayonnaise);
	document.getElementById('price').innerHTML = String(hamburger.countPrice() + ' рублей');
	document.getElementById('calories').innerHTML = String(hamburger.countCalories() + ' калорий');
};