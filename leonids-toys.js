//an array with objects of toys
const toys = [
    {
        id: 1,
        name: "Wooden Railway System",
        maker: "Right Track Toys",
        material: "wood",
        weightLbs: 3.6,
        batteriesRequired: false,
        numberInStock: 7
    },
    {
        id: 2,
        name: "Solar System Floor Puzzle",
        maker: "Melissa & Doug",
        material: "cardboard",
        weightLbs: 2.9,
        batteriesRequired: false,
        numberInStock: 21
    },
    {
        id: 3,
        name: "Remote Control Truck-9145",
        maker: "Bezgar",
        material: "nylon",
        weightLbs: 3.03,
        batteriesRequired: true,
        numberInStock: 14
    }
]

//defining a new toy
const barbieDoll = {
    id: 4,
    name: "Barbie Doll",
    maker: "Mattel",
    material: "vinyl",
    weightLbs: 0.46,
    batteriesRequired: false,
    numberInStock: 12
}

//adding the above toy to the array
toys.push(barbieDoll)

//defining a new toy
const walkieTalkie = {
    id: 5,
    name: "Walkie Talkie Set",
    maker: "Playbea",
    material: "plastic",
    weightLbs: 0.86,
    batteriesRequired: true,
    numberInStock: 5
}

//adding the above toy to the array
toys.push(walkieTalkie)

//declaring a new Map to store the prices of each toy
const toyPrices = new Map()

//toyObject is the key and price is the value
const addPriceToToy = (toyObject, price) => {
    toyPrices.set(toys[0], 24.99)
    toyPrices.set(toys[1], 8.99)
    toyPrices.set(toys[2], 85.49)
    toyPrices.set(toys[3], 9.99)
    toyPrices.set(toys[4], 29.99)
}
    
for (let [k, v] of toyPrices) {
    console.log(k, v);
}

// console.log(toys)

// for (let [toyObject, price] of toyPrices) {
//     console.log(toyObject, price);
// }


// const toyToFind = 5

// for (const toy of toys) {
//     if (toy.id === toyToFind) {
//     toy.price = toy.price + (toy.price * 0.05)
//     console.log(`The ${toy.maker} ${toy.name} costs $${toy.price}.`)
//     }
// }