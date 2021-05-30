function addRow() {
  var x = document.getElementById("mainTable").insertRow(0);
  var y = x.insertCell(0);
  var z = x.insertCell(1);
  y.innerHTML="Grape";
  z.innerHTML="Pineapple";
}

