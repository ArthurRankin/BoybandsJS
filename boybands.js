let bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
let vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

const bandElement = document.getElementById("boy-bands");
const veggieElement = document.getElementById("vegetables").innerHTML;

// Execute a for loop that will iterate over the arrays
for (let loopTracker = 0; loopTracker < 5; loopTracker += 1) {
  const currentBand = bands[loopTracker];
  document.getElementById("boy-bands").innerHTML = currentBand;
  const currentVeggie = vegetables[loopTracker];
  document.getElementById("vegetables").innerHTML = currentVeggie;
}