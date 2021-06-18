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
        gol: 16,
        penalties:32
    },
    {
        name: "Peppino FC",
        gol: 5,
        penalties:21
    },
    {
        name: "Geggegge FC",
        gol: 9,
        penalties:2
    }
]

let bestPenalties = 0
let bestClubs;
for(let grs=0; grs < clubs.length; grs++) {

    const {penalties,name, gol} = clubs[grs]

    if(penalties > bestPenalties) {
        bestPenalties = penalties
        bestClubs = name
    }
document.getElementById("table").innerHTML +=
`
<ul>
    <li> CLUB </li>
    <li>${name}</li>
    <li> GOL </li>
    <li> ${gol}</li>
    <li> PENALTIES </li>
    <li>${penalties}</li>
</ul>
`
}
document.getElementById("best-penalties").innerHTML = (`La squadra che ha subito più falli è <span id="best-penalties">${bestClubs}</span> con ${bestPenalties}`)
