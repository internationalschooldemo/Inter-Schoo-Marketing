class Tab {
    constructor(tab) {
        this.tab = tab;
        this.data = `data-tb="${this.tab.dataset.tb}"`;
        this.itemElement = document.querySelector(`.tabs-item[${this.data}]`);
        this.tabItem = new TabItem(this.itemElement);
        this.tab.addEventListener('click', () => this.select())
    }
select(){
     
     this.tabItem.select();
}
}

class TabItem {
    constructor(tabContaint) {
       this.tabContaint = tabContaint;
    }
  
    select() {
  
      this.tabContaint.style.display = 'block';
    }
  }

tabs = document.querySelectorAll('.tab');
tabs.forEach(function(tab){return new Tab(tab)});
console.log(tabs);