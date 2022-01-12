const toys = [
    {
        id: 1,
        name: "Wooden Railway System",
        maker: "Right Track Toys",
        material: "wood",
        price: 24.99,
        weightLbs: 3.6,
        batteriesRequired: false,
        numberInStock: 7
    },
    {
        id: 2,
        name: "Solar System Floor Puzzle",
        maker: "Melissa & Doug",
        material: "cardboard",
        price: 8.99,
        weightLbs: 2.9,
        batteriesRequired: false,
        numberInStock: 21
    },
    {
        id: 3,
        name: "Remote Control Truck-9145",
        maker: "Bezgar",
        material: "nylon",
        price: 85.49,
        weightLbs: 3.03,
        batteriesRequired: true,
        numberInStock: 14
    }
]

const barbieDoll = {
    id: 4,
    name: "Barbie Doll",
    maker: "Mattel",
    material: "vinyl",
    price: 9.99,
    weightLbs: 0.46,
    batteriesRequired: false,
    numberInStock: 12
}

toys.push(barbieDoll)

const walkieTalkie = {
    id: 5,
    name: "Walkie Talkie Set",
    maker: "Playbea",
    material: "plastic",
    price: 24.99,
    weightLbs: 0.86,
    batteriesRequired: true,
    numberInStock: 5
}

toys.push(walkieTalkie)

for (const toy of toys) {
    console.log(`The ${toy.maker} ${toy.name} costs $${toy.price}.`)
}