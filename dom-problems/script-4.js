function getTotalOfCars() {
  var y = document.getElementById("cars").options.length;
  var z = document.getElementById("cars").options[cars.selectedIndex].text;
  document.getElementById("statement").innerHTML = "Found " + y + " items in the list ." + z;
}