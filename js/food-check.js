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

/*WebDev.Практика JavaScript: DOM, parent, spread, children, map, forEach. Реальный пример*/
document.querySelector('tbody').onclick = function (event) {
	//console.log(event.target);
	if (event.target.tagName !== 'TD') return false;
	//console.log(event.target);
	let data = [...event.target.parentNode.children];
	let msg = "\"" + data[0].textContent + "\". Введите количество граммов или откажитесь";
	let promptres = prompt(msg, 0);
	if (promptres == null || promptres == "" || typeof promptres == 'undefined') return false;
	//console.log(data[8].querySelector('input').checked);
	if (promptres > 0) {
		data[9].textContent = promptres;
		data[8].querySelector('input').checked = true;
	} else {
		data[9].textContent = undefined;
		data[8].querySelector('input').checked = false;
		//console.log('return');
		return false;
	}
	let text = getDataFromTd(data);
	//console.log(text);
	outText(text);
}
function getDataFromTd(tdArr) {
	return tdArr.map(item => item.textContent);
}
const UL = document.querySelectorAll('ul>li>span');
//const TD = document.querySelectorAll('tfoot>tr>td');
function outText(text) {
	text.forEach((item, index) => UL[index].textContent = item);
	//text.forEach((item, index) => TD[index].textContent = item);
	//console.log(text);
	//TD[9].textContent = prompt('How old are you?', 40);
}

document.querySelector('.weight').onclick = function (event) {
	let weight = prompt("Введите Ваш сухой вес", 0);
	this.closest('tr').children[1].textContent = 1.2 * weight;
	this.closest('tr').children[7].textContent = 35 * weight;
}

document.querySelector('.calc').onclick = function (event) {
	//console.log(event.target);
	let trs = document.querySelectorAll('tbody > tr');
	let text = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	for (let tr of trs) {
		let tds = tr.children;
		//console.log('tds array?:' + Array.isArray(tds));
		if (tds.length !== 10) continue;
		if (tds[8].querySelector('input').checked == false) continue;
		console.log(tds[9].textContent);
		let data = Array.from(tr.children);
		let crow = data.map(item => item.textContent);
		let curr = crow.map(item => parseFloat(item) * parseFloat(tds[9].textContent) / 100)
		text = sum2Arrays(text, curr);

		//console.log(text);
	}

	const td2 = document.querySelectorAll('tfoot>tr>td');
	//console.log(text);
	//text.forEach((item, index) => td2[index].textContent = item);
	for (let i = 1; i < text.length - 2; i++) {
		td2[i].textContent = text[i];
	}
	//console.log(calctr);
}

function sum2Arrays(arr1, arr2) {
	let sum = [];
	for (let i = 0; i < arr1.length; i++) {
		sum[i] = parseFloat(arr1[i]) + parseFloat(arr2[i]);
	}
	return sum;
}

let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//console.log(sum2Arrays(arr1, arr2));

