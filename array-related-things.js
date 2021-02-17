const numbers = [1, 5, 20, 4];
const friends = ['Shiblur', 'Lipu', 'Karim', 'Rahim'];
const products = [
    {id: 1, name: 'laptop', price: 50000},
    {id: 2, name: 'Mouse', price: 1200},
    {id: 3, name: 'watch', price: 500},
    {id: 4, name: 'tablet', price: 80}
];

//map method
const names = products.map(product => product.name); //If there are many objects and properties of many objects in the array, then we can use the map method//
const prices = products.map(pro => pro.price); // Its returns automatically
console.log(names);
console.log(prices);

//multiline arrow function [Its cannot returns automatically]
const prices2 = products.map(product => { 
    return product.price;
});
console.log(prices2);




//===foreach method====//
products.forEach(product => {
    console.log(product.name);
});




//===filter method====//
const prices3 = products.filter(product => product.price < 1200);
console.log(prices3);

const id = products.filter(product => product.id != 3); // It can remove specific item
console.log(id);




//===find method====// [It can find object properties element]
const names2 = products.find( product => product.name === 'watch');
console.log(names2);


