const froyo = prompt("Enter desired flavors, spaced with commas")
const custOrder = froyo.split(",")

function countFlavors(flavor) {
  const orderTotals = {};
  for (let i = 0; i < flavor.length; i ++){
    let currentFlavor = flavor[i]
    if (orderTotals[currentFlavor] === undefined){
    orderTotals[currentFlavor] = 1;
  }
    else {
      orderTotals[currentFlavor] ++;
    }
  }
    return orderTotals;
}

console.table(countFlavors(custOrder));