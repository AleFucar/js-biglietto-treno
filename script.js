
//Chiedere età

const età = prompt("Quanti anni hai? (INSERISCI SOLO NUMERI)")

console.log("Hai " + età + " anni") 
document.write("<b>" + "Età: " + età + " anni" + "<b>")


//Chiedere quanti km da percorrere
const km  = prompt("Ciao, quanti km dobbiamo percorrere? (INSERISCI SOLO NUMERI)", 30)
document.write("<b>" + "Distanza: " + km + "km" + "<b>")

console.log("I km da percorrere sono " + km)

//calcolare costo biglietto SE il biglietto costa 0,21 al km allora PREZZO UNITARIO MOLTIPLICATO PER KM
const priceKilometerUnit = 0.21 //number

let pricekm =  priceKilometerUnit * km

if (km > 0) {
    console.log("Il costo del biglietto è " + pricekm.toFixed(2) + ("€"))
} else {
    console.log(" !ERRORE! Controlla di aver inserito bene i dati e riprova.")
}


let minorenne
let anziano

if (età <= 17) {
   minorenne = pricekm / 100 * 20
   minorenneSconto = pricekm - minorenne
    console.log("Sconto minorenne 20% = " + minorenneSconto.toFixed(2) + "€")
        document.write("<b>" + "Biglietto minorenne: " + minorenneSconto.toFixed(2) + "€" + "<b>")
} 
else if (età >=65) {
    anziano = pricekm /100 * 40
    anzianoSconto = pricekm - anziano
    console.log("Sconto anziano 40% = " + anzianoSconto.toFixed(2))
        document.write("<b>" + "Biglietto anziano: " + anzianoSconto.toFixed(2) + "€" + "<b>")    
}




