
const mainMenu = [
  { 'dish': 'chicken', 'price': '12.00' },
  { 'dish': 'steak', 'price': '15.00' }
]


const devReact = mainMenu.map(obj => (
  [obj.dish]));

console.log(devReact);

const sideMenu = {
  bakedPotato: 2.99,
  fries: 1.99,
  broccoli: 1.25
};
var mainTotal = 0;
var sideTotalOne = 0;
var sideTotalTwo = 0;
var total = 0;




let order = 'chicken'
let response;
if (order == 'steak') {
  response = ` Great choice. the steak will be ${mainMenu.steak}`
  mainTotal = + mainMenu.steak;
} else if (order == 'chicken') {
  response = `Great choice. the chicken will be ${mainMenu.chicken}`
  mainTotal = + mainMenu.chicken;
} else {
  response = ' sorry we do not serve that'
}
console.log(response)



let sides = 'fries'

var firstSide;

if (sides == 'fries') {
  firstSide = `the ${sides} are great that will be $${sideMenu.fries} and your second`
  sideTotalOne = + sideMenu.fries;

} else if (sides == 'baked potato') {
  firstSide = `the ${sides} are great that will be $${sideMenu.bakedPotato} and your second`
  sideTotalOne = + sideMenu.bakedPotato;

} else if (sides == 'broccoli') {
  sideTotalOne = + sideMenu.fries;
  firstSide = `the ${sides} are great that will be $${sideMenu.broccoli} and your second`
} else {
  firstSide = ' sorry we do not serve that'
}

let x = 'broccoli'

let secondSide;
if (x == 'fries') {
  secondSide = `the ${firstSide} are my favorite that will be $${sideMenu.fries}`
  sideTotalTwo = + sideMenu.fries;

} else if (x == 'baked potato') {
  sideTotalTwo = + sideMenu.bakedPotato;
  secondSide = `the ${firstSide} are my favorite that will be $${sideMenu.bakedPotato}`

} else if (x == 'broccoli') {
  secondSide = ` ${firstSide} is my fav that will be $${sideMenu.broccoli}`
  sideTotalTwo = + sideMenu.broccoli;
} else {
  secondSide = `sorry we do not serve that`
}

total = + sideTotalTwo + sideTotalOne + mainTotal;

console.log(`${secondSide} your total for today will ${total} `);
console.log(mainTotal);
console.log(sideTotalOne);
console.log(sideTotalTwo);
console.log(total);

