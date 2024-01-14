// Code your solutions in this file

const names = []
const event = "birthday"

function writeCards(names, event = "birthday") {
    for (let i = 0; i < names.length; i++) {
        console.log(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
        
    }
    return names
}
writeCards(["Guadalupe", "Ollie", "Aki"])

const countDown = function(integer) {
    let i = integer
    while (i > 0) {
        console.log (integer)
        i--
    }
}