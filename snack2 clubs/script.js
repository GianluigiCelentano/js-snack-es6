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


// let bicycle = [
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

// let nameBicycle;
// let weightBicycle = 16

// for (let grs = 0; grs < bicycle.length; grs++) {

//     const {weight} = bicycle[grs]
    
//   if (weight < weightBicycle) {
    
//     nameBicycle = bicycle[grs]
    
//     weightBicycle = weight
// }
// }

// const {name} = nameBicycle

// console.log(`la bici più leggera è ${name} con ${weightBicycle} kg`)

let clubs = [
    {
        name: "Fieri FC",
        goals: 0,
        penalties:0
    },
    {
        name: "Peppino FC",
        goals: 0,
        penalties:0
    },
    {
        name: "Geggegge FC",
        goals: 0,
        penalties:0
    }
]

for (let grs = 0; grs < clubs.length; grs++) {

    clubs[grs].goals = Math.floor(Math.random() * 10) + 1

    clubs[grs].penalties = Math.floor(Math.random() * 10) + 1

}

let array=[]

for (let x = 0; x < clubs.length; x++ ) {
    const {name, penalties} = clubs[x]
    array.push({
        name,   // name: Peppino FC
        penalties  // penalties: 10
    })
}

console.log(array);