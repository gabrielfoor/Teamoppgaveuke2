

let items = []

let inventory = []

let gridSlot = []


function inventoryAdd(item, slot) {
    inventory.push(item);

    gridSlot.push(slot)

}
function inventoryRemove(item, slot) {
    inventory.pop(item);

    gridSlot.pop(slot)

}
