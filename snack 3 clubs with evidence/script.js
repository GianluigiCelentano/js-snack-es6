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
// in un for capisco qual'è la squadra con più falli, col secondo for li metto 
// a confronto 

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

let bestGol = 0
let bestPenalties = 0
let bestClubs;
for(let grs=0; grs < clubs.length; grs++) {

    const {penalties,name, gol} = clubs[grs]

    if(penalties > bestPenalties) {
        bestPenalties = penalties
        bestClubs = name
        bestGol = gol
    }
}

for (let stmp = 0; stmp < clubs.length; stmp++) {
    document.getElementById("table").innerHTML += 
    `
    <ul>
        <li> CLUB </li>
        <hr>
        <li>${clubs[stmp].name}</li>
        <li> ${clubs[stmp].gol}</li>
        <li>${clubs[stmp].penalties}</li>
    </ul>
    `
    if(clubs[stmp].penalties===bestPenalties) {
        document.getElementsByTagName("ul")[stmp].style.backgroundColor='yellow'
    }
}

document.getElementById("best-penalties").innerHTML = (`La squadra che ha subito più falli è ${bestClubs} con ${bestPenalties}`)
