// Modify your Leonid's Toy code to use a Set for toy storage instead of an array to ensure that the same toy does not get added to the inventory more than once.
const toys = new Set()
const wooden_railway_system = 
    {
        id: 1,
        name: "Wooden Railway System",
        maker: "Right Track Toys",
        material: "wood",
        weightLbs: 3.6,
        batteriesRequired: false,
        numberInStock: 7
    }
const solar_system_floor_puzzle =
    {
        id: 2,
        name: "Solar System Floor Puzzle",
        maker: "Melissa & Doug",
        material: "cardboard",
        weightLbs: 2.9,
        batteriesRequired: false,
        numberInStock: 21
    }
const remote_control_truck9145 = 
    {
        id: 3,
        name: "Remote Control Truck-9145",
        maker: "Bezgar",
        material: "nylon",
        weightLbs: 3.03,
        batteriesRequired: true,
        numberInStock: 14
    }
const barbie_doll = {
    id: 4,
    name: "Barbie Doll",
    maker: "Mattel",
    material: "vinyl",
    weightLbs: 0.46,
    batteriesRequired: false,
    numberInStock: 12
}
const walkie_talkie = {
    id: 5,
    name: "Walkie Talkie Set",
    maker: "Playbea",
    material: "plastic",
    weightLbs: 0.86,
    batteriesRequired: true,
    numberInStock: 5
}

//adding the toys to the set
toys.add(wooden_railway_system)
toys.add(solar_system_floor_puzzle)
toys.add(remote_control_truck9145)
toys.add(barbie_doll)
toys.add(walkie_talkie)

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

