let cafe = {
    name: 'Shadab',
    guestCapacity: '500',
    guestCount: 0,
    checkAvailability: function (newGuests){
        let seatsLeft = this.guestCapacity - this.guestCount
        if (newGuests <= seatsLeft){
            this.guestCount = this.guestCount + newGuests 
            return true
        }
        return false
    }
}

console.log(cafe.checkAvailability(54))
console.log(cafe.checkAvailability(420))
console.log(cafe.checkAvailability(54))