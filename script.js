
// items er en array der src til bilder ligger
const items = []
// inventory er der plasseringen i inventory ligger
let inventory = []
// gridSlot er der plasseringen utenfor inventory ligger
let gridSlot = []


// function inventoryAdd(item, slot) {
//     inventory.push(item)
//     gridSlot.push(slot
// }
// function inventoryRemove(item, slot) {
//     inventory.pop(item)
//     gridSlot.pop(slot)
// }
let imgToShow = "";

//Henter item sin src fra items array og legger inn i inventory eller gridSlot
function changeImg(imageSource) {
    imgToShow = imageSource
    document.getElementById('').innerHTML = /*HTML*/ `
    <img src= ${imgToShow} alt=""> <br>`; 
}