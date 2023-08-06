/* 
Chair 3 cft
table 10 cft
bed 50cft
*/

function woodCalculator( chairQuantity, tableQuantity, bedQuantity ){
    let perChairWood = 3;
    let perTableWood = 10;
    let perBedWood = 50; 

    let chairWood = perChairWood * chairQuantity;
    let tableWood = perTableWood * tableQuantity;
    let bedWood = perBedWood * bedQuantity;
    
    let totalWood = chairWood * tableWood * bedWood;

    return totalWood; 

}

let result = woodCalculator(4, 2, 3);
console.log(result);









