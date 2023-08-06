/* 
    1st 100 ticket 100tk
    2nd 100 ticket 90tk
    more then 200 will be 70 tk only 

*/


function ticketPrice(ticketQuantity){
    let first100PerTicketRate = 100;
    let second100PerTicketRate = 90;
    let moreThen200PerTicketRate = 70;

    if ( ticketQuantity <= 100 ) {
        let first100TicketTotalCost = ticketQuantity * first100PerTicketRate;
        return first100TicketTotalCost;
    }else if ( ticketQuantity > 100 && ticketQuantity <= 200) {
        let first100TicketTotalCost = 100 * first100PerTicketRate;
        let second100TicketCost = (ticketQuantity -100) * second100PerTicketRate;
        let second100TicketTotalCost = first100TicketTotalCost + second100TicketCost;
        return second100TicketTotalCost;
    }else{
        let first100TicketTotalCost = 100 * first100PerTicketRate;
        let second100TicketTotalCost = 100 * second100PerTicketRate;
        let moreThen200TicketCost = (ticketQuantity-200) * moreThen200PerTicketRate;
        let moreThen200TicketTotalCost = first100TicketTotalCost + second100TicketTotalCost + moreThen200TicketCost;
        return moreThen200TicketTotalCost;
    }

}

let result = ticketPrice(250);
console.log(result);




