// var bicycle = [
//     {
//         name: "bici-fiera",
//         weight: 100
//     },
//     {
//         name: "bici-debole",
//         weight: 15
//     },
//     {
//         name: "bici-incredibile",
//         weight: 2610
//     }
// ]
// var nameBicycle;
// var weightBicycle = 16

// for (var grs = 0; grs < bicycle.length; grs++) {

//     var thisBicycle = bicycle[grs].weight

//     if (thisBicycle < weightBicycle) {

//         nameBicycle = bicycle[grs]

//         weightBicycle = thisBicycle
//     }
// } console.log(weightBicycle)


let bicycle = [
    {
        name: "bici-fiera",
        weight: 100
    },
    {
        name: "bici-debole",
        weight: 15
    },
    {
        name: "bici-incredibile",
        weight: 2610
    }
]

let nameBicycle;
let weightBicycle = 16

for (let grs = 0; grs < bicycle.length; grs++) {

    const {weight} = bicycle[grs]
    
  if (weight < weightBicycle) {
    
    nameBicycle = bicycle[grs]
    
    weightBicycle = weight
}
}

const {name} = nameBicycle

console.log(`la bici più leggera è ${name} con ${weightBicycle} kg`)