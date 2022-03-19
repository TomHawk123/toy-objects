const toys = new Set() 

    const trouble = {
    id: 1,
    name: "Trouble",
   // price: 10.99,
    players: "2 to 4",
    manufacturer: "Hasbro"
}
    const monopoly= {
    id: 2,
    name: "Monopoly",
    //price: 20.99,
    players: "2 to 6",
    manufacturer: "Hasbro"
}
    const connect4 = {
    id: 3,
    name: "Connect 4",
    //price: 10.99,
    players: "2",
    manufacturer: "Hasbro"
}

/* for (const toy of toys) {
    console.log (toy.price)
}
*/

const sorry = {
    id: 4,
    name: "Sorry",
   // price: 9.89,
    players: "2 to 4",
    manufacturer: "Hasbro"
}

const candyLand = {
    id: 5,
    name: "Candyland",
   // price: 8.49,
    players: "2 to 4",
    manufacturer: "Hasbro"
}

toys.add(trouble)
toys.add(monopoly)
toys.add(sorry)
toys.add(candyLand)
toys.add(connect4)
console.log(toys)

/*
toys.push(sorry);
toys.push(candyLand);

console.log(toys)
*/
/* 
for (const toy of toys) {

    toy.price = toy.price * 1.05
    
    console.log(`The ${toy.name} board game costs $${toy.price}`)
};
*/



/*
toyPrice.set("trouble", 10.99)
toyPrice.set("monopoly", 20.99)
toyPrice.set("")
*/

/*
const toyPrice = new Map()

const addToyPriceToInventory = (toyObject, price) => {
    toyPrice.set(toyObject, price)
}

addToyPriceToInventory(toys[0], 10.99)
console.log("The price of the trouble board game is $" + toyPrice.get(toys[0]))

addToyPriceToInventory(toys[1], 20.99)
console.log("The price of Monopoly is $" + toyPrice.get(toys[1]))

addToyPriceToInventory(toys[2], 10.99)
console.log("The price of Connect 4 is $" + toyPrice.get(toys[2]))

addToyPriceToInventory(toys[3], 9.49)
console.log("The price of Sorry is $" + toyPrice.get(toys[3]))

addToyPriceToInventory(toys[4], 8.49)
console.log("The price of Candyland is $" + toyPrice.get(toys[4]))
*/
