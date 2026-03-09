function createTable() {
    //Write your code here
	let rowInput = prompt("Input number of rows");
	let colInput = prompt("Input number of columns");

	let rn = parseInt(rowInput);
	let cn = parseInt(colInput);

	if(isNaN(rn) || isNaN(cn)) {
		return;
	}

	if(rn <= 0 || cn <= 0) {
		alert("Please enter a positive number greater than 0");
		return;
	}

	let table = document.getElementById("myTable");
	table.innerHTML = "";
	for(let i = 0; i < rn; i++) {
		let row = table.insertRow(i);

		for(let j = 0; j < cn; j++) {
			let cell = row.insertCell(j);

			cell.textContent = "Row-" + i + " Column-" + j;
		}
	}
}
