// path til de forskjellige items lagret som variabler

let weapon1 = "/img/woodenSword.jpg"

let pickaxe1 = "/img/woodenPickaxe.jpg"

let head1 = "/img/leatherCap.jpg"

let armor1 = "/img/leatherTunic.jpg"

let legs1 = "/img/leatherPants.jpg"

let boots1 = "/img/leatherBoots.jpg"

let shield = "/img/shield.jpg"

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