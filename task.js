/*
// Convert feet to inch 
function feetToInch(number){
    let inces = number * 12;
    return inces;
}
let feet = 2;
let result = feetToInch( feet );
console.log( feet + ' Feet = is ' + result + ' Inces' );

*/

// ---------------------------------------------------------------

/*
1ta function liko name is paperRequirements() 3 ta parameter input for amount of book, so output deu koto guli paper lagbe. 

book 1 - 100 paper
book 2 - 200 paper
book 3 - 300 paper
*/
/*
function paperRequirements( num1, num2, num3){
    let book1 = 100 * num1;
    let book2 = 200 * num2;
    let book3 = 300 * num3;
    let totalPaper = book1 + book2 + book3;
    return totalPaper;
}
let bng = 30;
let eng = 20;
let mat = 5;
let result = paperRequirements(bng, eng, mat);
console.log( bng + ' ta Bangla book, ' + eng + ' ta English book and ' + mat + ' ta Gonith book er total papaer lagbe ' + result + ' ta ' );

console.log(result);
*/


// -----------------------------------------------------------------


/* 
1ta array takne tumr all friend name er, ekn tader boro name ta bar koro, functions name hobe bestFriend
*/
/*
function bestFriend(arr){
    let bigName = arr[0];
    for(let x = 0; x < arr.length; x++){
        let friend = arr[x];
        if( friend.length > bigName.length ){
            bigName = friend;
        }
    }
    return bigName;
}
let friendsName = ['Jamal', 'Kamal', 'Joshim', 'Abdullah', 'Imrul Kaiser', 'Hafozur Rahaman', 'Sohel Rana'];
let result = bestFriend(friendsName);
console.log( 'The big friend name is ' + result + ' and total character is ' + result.length);
*/







