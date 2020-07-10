let isGuestOneVegan = true
let isGuestTwoVegan = true
if (isGuestOneVegan && isGuestTwoVegan) {
console.log('Only offer up vegan food.')
} else if (isGuestOneVegan || isGuestTwoVegan) {
console.log('Make sure to offer up some vegan food.')
} else {
console.log('Offer up anything on the menu.')
}