// path til de forskjellige items lagret som variabler

let weapon1 = "/img/Wooden_Sword.jpg"

let pickaxe1 = "/img/Wooden_Pickaxe.jpg"

let head1 = "/img/Leather_Cap.jpg"

let armor1 = "/img/Leather_Tunic.jpg"

let legs1 = "/img/Leather_Pants.jpg"

let boots1 = "/img/Leather_Boots.jpg"

let shield = "/img/Shield.jpg"

//I funskjonen changeImg legger du først inn bildet du vil ha 
//og så hvilken slot det skal ligge i

function changeImg(imageSource, slot) {
    imgToShow = imageSource
    document.getElementById(slot).innerHTML = /*HTML*/ `
    <img src= ${imgToShow} alt="" style = "height: 45px;" > `;
}


// hide knapp
let hide = true
function show() {
    let armorInventory = document.querySelector('.armorInventory');
    let hiddenInventory = document.querySelector('.hiddenInventory');
    if (hide) {
        armorInventory.style.visibility = "visible"
        hiddenInventory.style.visibility = "visible"
        hide = false
    }
    else {
        armorInventory.style.visibility = "hidden"
        hiddenInventory.style.visibility = "hidden"
        hide = true
    }
}