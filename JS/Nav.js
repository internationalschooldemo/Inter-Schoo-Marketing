class Tab {
    constructor(tab) {
        this.tab = tab;
        this.data = `data-tb="${this.tab.dataset.tb}"`;
        this.itemElement = document.querySelector(`.tabs-item[${this.data}]`);
        this.tabItem = new TabItem(this.itemElement);
        this.exit = this.itemElement.querySelector('.exitX');
        this.tab.addEventListener('click', () => this.select());
        this.exit.addEventListener('click', () => this.exitX())
    }
select(){
     
     this.tabItem.select();
}
exitX(){
     
  this.tabItem.exitX();
}
}

class TabItem {
    constructor(tabContaint) {
       this.tabContaint = tabContaint;
    }
  
    select() {
  
      this.tabContaint.style.display = 'block';
    }
    exitX() {
  
      this.tabContaint.style.display = 'none';
    }
  }

let tabs = document.querySelectorAll('.tab');
tabs.forEach(function(tab){return new Tab(tab)});



