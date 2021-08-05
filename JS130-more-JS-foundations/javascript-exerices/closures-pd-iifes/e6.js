// E6 Mini Inventory Management System:
let ItemCreator = (function() {
  function generateSkuCode(itemName, category) {
    return (itemName.replace(/\s/g, '').slice(0, 3).toUpperCase() +
            category.replace(/\s/g, '').slice(0, 2).toUpperCase());
  }

  function isValidItemName(itemName) {
    return itemName.replace(/\s/g, '').length >= 5;
  }

  function isValidCategory(category) {
    return category.replace(/\s/g, '').length >= 5 && category.split(' ').length === 1;
  }

  function isQuantityProvided(quantity) {
    return quantity !== undefined
  }

  return function(itemName, category, quantity) {
    if (isValidItemName(itemName) && isValidCategory(category) && isQuantityProvided(quantity)) {
      this.skuCode = generateSkuCode(itemName, category);
      this.itemName = itemName;
      this.category = category;
      this.quantity = quantity;
    } else {
      return { notValid: true };
    }
  };
})();

let ItemManager = {
  items: [],
  getItem: function(skuCode) {
    return this.items.filter(function(item) {
      return item.skuCode === skuCode;
    })[0];
  },

  create: function(itemName, category, quantity) {
    let item = new ItemCreator(itemName, category, quantity);
    if (item.notValid) {
      return false;
    } else {
      this.items.push(item);
    }
  },

  update: function(skuCode, itemInformation) {
    Object.assign(this.getItem(skuCode), itemInformation);
  },

  delete: function(skuCode) {
    this.items.splice(this.items.indexOf(this.getItem(skuCode)), 1);
  },

  list: function() {
    return this.items;
  },

  inStock: function() {
    return this.items.filter(function(item) {
      return item.quantity > 0;
    });
  },

  itemsInCategory: function(category) {
    return this.items.filter(function(item) {
      return item.category === category;
    });
  },
};

let ReportManager = {
  init: function(itemManager) {
    this.items = itemManager;
  },

  createReporter(skuCode) {
    return (function() {
      let item = this.items.getItem(skuCode);
      return {
        itemInfo: function() {
          Object.keys(item).forEach(function(key) {
            console.log(key + ': ' + item[key]);
          });
        },
      };
    }).bind(this)();
  },

  reportInStock: function() {
    console.log(this.items.inStock().map(function(item) {
      return item.itemName;
    }).join(','))
  },
};

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
ItemManager.items;

ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot
ItemManager.inStock();
// football,kitchen pot
ReportManager.reportInStock();

// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.itemsInCategory('sports');

ItemManager.delete('SOCSP');
// returns list the remaining 3 valid items (soccer ball is removed from the list)
ItemManager.items;

let kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10




//  My First Attempt:
"use strict";

class Item {
  constructor(itemName, category, quantity) {
    this.sku = this.createSku(itemName, category);
    this.itemName = itemName;
    this.category = category;
    this.quantity = quantity;
  }

  createSku(itemName, category) {
    let nameArray = itemName.split(' ');
    let sku = nameArray[0].slice(0, 3) + category.split('').slice(0, 2).join('');
  
    return sku.toUpperCase();
  }
}

let ItemManager = {
  items: [],
  create(itemName, category, quantity) {
    if ((itemName.split('').filter(char => char !== ' ').length >= 5) && 
    (!category.includes(' ') && category.length >= 5) && quantity !== undefined) {
      ItemManager.items.push(new Item(itemName, category, quantity))
    }
  },

  update(skuCode, updateObj) {
    let updateKeys = Object.keys(updateObj);
    let item = this.items.filter(item => item.sku === skuCode)[0];
    updateKeys.forEach(key => item[key] = updateObj[key]);
  },

  inStock() {
    return this.items.filter(item => item.quantity > 0);

  },

  itemsInCategory(searchCategory) {
    let itemsInCat = this.items.filter(item => item.category === searchCategory);
    console.log(itemsInCat.map(item => item.itemName).join(', '));
  },

  delete(searchSku) {
    let item = this.items.filter(item => item.sku === searchSku)[0];
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}

let ReportManager = {
  init(itemManager) {
    this.items = itemManager;
  },

  reportInStock() {
    let itemsInStock = ItemManager.inStock();;
    console.log(itemsInStock.map(item => item.itemName).join(', '));
  },

  createReporter(skuCode) {
    let item = ItemManager.items.filter(item => item.sku === skuCode)[0];
    return {
      itemInfo() {
        let itemKeys = Object.keys(item);
        itemKeys.forEach(key => console.log(`${key}: ${item[key]}`));
      }
    }
  }
}

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
ItemManager.items;

ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot
ItemManager.inStock();
// football,kitchen pot
ReportManager.reportInStock();

// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.itemsInCategory('sports');

ItemManager.delete('SOCSP');
// returns list the remaining 3 valid items (soccer ball is removed from the list)
ItemManager.items;

let kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10
