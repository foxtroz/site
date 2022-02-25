//Выбранные только
document.querySelector('#select').addEventListener('click', (event) => {
	let data = document.querySelector('#select').value;
	if (document.querySelector('#select').checked) {
		document.querySelector('#select ~ label').innerHTML = "Выбранные продукты";
		let checks = document.querySelectorAll(".table-checkbox");
		for (let check of checks) {
			if (!check.checked) {
				check.closest('tr').hidden = true;
			}
		}
		let subtitles = document.querySelectorAll("th[colspan]");
		for (let subtitle of subtitles) {
			subtitle.hidden = true;
		}
	} else {
		document.querySelector('#select ~ label').innerHTML = "Все продукты";
		let checks = document.querySelectorAll(".table-checkbox");
		for (let check of checks) {
			check.closest('tr').hidden = false;
		}
		for (let subtitle of document.querySelectorAll('th[colspan]')) {
			subtitle.hidden = false;
		}
	}
})

//Фильтр/Поиск
/*$(document).ready(function () {
	$("#search-product").on("keyup", function () {
		var value = $(this).val().toLowerCase();
		$("#table-product tr").filter(function () {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
});*/

//Фильтр/Поиск
document.querySelector('#search-product').addEventListener('keyup', () => {
	// Declare variables
	//var input, filter, table, tr, td, i, txtValue;
	let input = document.querySelector("#search-product");
	let filter = input.value;//.toLowerrCase();
	let table = document.querySelector("#table-product");
	let tr = table.querySelectorAll("#table-product tr");
	let subs = document.querySelectorAll('th[colspan]');
	for (let sub of subs) { sub.hidden = true };
	document.querySelector('#select').checked = false;
	// Loop through all table rows, and hide those who don't match the search query
	for (let row of tr) {
		td = row.querySelectorAll("td")[0];
		if (td) {
			txtValue = td.textContent || td.innerText;
			let flag = txtValue.toLowerCase().indexOf(filter.toLowerCase()) > -1;
			if (flag) {
				row.hidden = false;
				//tr[tr.indexOf(row)].hidden = false;
			} else {
				row.hidden = true;
				//tr[tr.indexOf(row)].hidden = false;
			}
		}
	}
})


let tInputs = document.querySelectorAll(".product-count");
for (let tInput of tInputs) {
	tInput.setAttribute('value', '0');
	tInput.setAttribute('max', '1000');
	tInput.setAttribute('min', '0');
	tInput.setAttribute('placeholder', 'Грамм');
	tInput.setAttribute('length', '4');
	tInput.setAttribute('step', '10');
	//tInput.closest("td").hidden = true;
}

//const elems = document.querySelectorAll('.table-checkbox:checked'); //выбираем все отмеченные checkbox
//const values = Array.prototype.map.call(elems, ({ value }) => value);
//console.log(values);
const elems = document.querySelectorAll('#table-product tr');
const check = elems.querySelectorAll('.table-checkbox:checked');
//const values = Array.from(check);
//	.map(tr => Array.from(tr.querySelectorAll('td'))
//		.map(td => td.innerText))
console.log(check);