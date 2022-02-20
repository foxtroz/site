//Выбранные только
document.querySelector('#select').addEventListener('click', (event) => {
	let data = document.querySelector('#select').value;
	//console.log(data);
	if (document.querySelector('#select').checked) {
		//document.querySelector('.outline').innerHTML = "Выбранные продукты";
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
		//document.querySelector('.outline').innerHTML = "Все продукты";
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
$(document).ready(function () {
	$("#search-product").on("keyup", function () {
		var value = $(this).val().toLowerCase();
		$("#table-product tr").filter(function () {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
});

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
/*
function getTableData(table) {
	const
	  [ head, ...rows ] = table.querySelectorAll('tr'),
	  keys = Array.from(head.cells, n => n.innerText);
  
	return rows.map(tr => keys.reduce((obj, key, i) => {
	  obj[key] = tr.cells[i].innerText;
	  return obj;
	}, {}));
  }
  
  
  const tableData = getTableData(document.querySelector('table'));
  */