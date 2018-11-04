function sortTickets(arrayOfTickets, sortCritiria) {
    class Tickets {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let sortedTickets = arrayOfTickets.map((ticket) => {
        return ticket.split('|')
    }).map((ticket) => {
        let [destination, price, status] = ticket;
        price = +price;
        return new Tickets(destination, price, status)
    }).sort((a, b) => a[sortCritiria] > b[sortCritiria]);
    return sortedTickets;
}

console.log(sortTickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
));
