//Выбранные только
document.querySelector('.select').addEventListener('change', (event) => {
	let data = document.querySelector('.select').value;
	//console.log(data);
	let checks = document.querySelectorAll(".table-checkbox");
	for (let check of checks) {
		if (!check.checked && data == 'sel') {
			check.closest('tr').hidden = true;
			hideSubTitles(true);
		} else {
			check.closest('tr').hidden = false;
			hideSubTitles(false);
		}
	}
})
// 
function hideSubTitles(flag) {
	let trs = document.querySelectorAll('tbody tr');
	//console.log(trs);
	for (let tr of trs) {
		if (tr.children.length == 1)
			tr.hidden = flag;
	}
}

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
	//document.querySelector('#select').checked = false;
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
	weight = parseFloat(weight);
	this.closest('tr').children[1].textContent = (1.2 * weight).toFixed(2);
	this.closest('tr').children[7].textContent = (35 * weight).toFixed(2);
	this.closest('tr').children[8].textContent = "<-Нормы для Вашего веса " + weight + 'кг';
}

document.querySelector('.calc').onclick = function (event) {
	//console.log(event.target);
	let trs = document.querySelectorAll('tbody > tr');
	//let text = ["" , 0, 0, 0, 0, 0, 0, 0, "", 0];
	let text = [7]; // Только числа
	for (let i = 0; i < 7; i++) text[i] = 0.0;
	//По строкам
	//for (let tr of trs) {
	for (let i = 0; i < trs.length; i++) {
		let tr = trs[i];
		let tds = tr.children;
		//console.log('tds array?:' + Array.isArray(tds));
		if (tds.length !== 10) continue;
		if (tds[8].querySelector('input').checked == false) continue;
		//console.log(tds[9].textContent);
		let data = Array.from(tr.children); // Не все children!!!
		let crow = data.map(item => item.textContent);
		let cnt = parseFloat(tds[9].textContent);
		//console.log(cnt);
		coeff = (cnt == null || cnt == "" || cnt == "undefined") ? 0 : cnt;
		//console.log(cnt); console.log(coeff);
		//let curr = crow.map(item => parseFloat(item) * parseFloat(coeff) / 100.00);
		//По ячейкам
		let curr = [7];
		for (let j = 0; j < 7; j++) {
			let cell = crow[j + 1].replace(',', '.');
			//console.log(cell);
			curr[j] = parseFloat(cell) * coeff / 100;
		}
		console.log(curr);
		console.log(text);
		text = sum2Arrays(text, curr);
		//console.log(text);  Где то ошибка в расчете массива надо i с 1 по 7
	}


	const td2 = document.querySelectorAll('tfoot>tr>td');
	//console.log(text);
	//text.forEach((item, index) => td2[index].textContent = item);
	for (let i = 0; i < 7; i++) {
		td2[i + 1].textContent = text[i].toFixed(2);
	}
	//console.log(calctr);
	const bgu = document.querySelectorAll('.bgu>td');
	for (let i = 0; i < 3; i++) {
		let a1 = text[i];
		let a2 = text[6];
		let b1 = (a1 == null || a1 == "" || a1 == "undefined" || a1 == "-") ? 0 : a1;
		let b2 = (a2 == null || a2 == "" || a2 == "undefined" || a2 == "-") ? 0 : a2;
		bgu[i + 1].textContent = (parseFloat(b1) * 100 / parseFloat(b2)).toFixed(2);
	}

}

function sum2Arrays(arr1, arr2) {
	let sum = [7];
	for (let i = 0; i < 7; i++) {
		let a1 = arr1[i];
		let a2 = arr2[i];
		let b1 = (a1 == null || a1 == "" || a1 == "undefined" || a1 == "-") ? 0 : a1;
		let b2 = (a2 == null || a2 == "" || a2 == "undefined" || a2 == "-") ? 0 : a2;
		sum[i] = parseFloat(b1) + parseFloat(b2);
	}
	return sum;
}

fillSelect();
// Категории продуктов. Заполнение select
function fillSelect() {
	let trs = document.querySelectorAll('tbody tr');
	let objSel = document.querySelector(".sel-prod-type");
	for (let i = 0; i < trs.length; i++) {
		if (trs[i].children.length != 1) continue;
		let listItem = trs[i].children[0].textContent;
		//console.log(listItem, i);
		objSel.options[objSel.options.length] = new Option(listItem, i);
	}
}
// Событие смены пункта выпадающего списка
document.querySelector(".sel-prod-type").addEventListener('change', (event) => {
	let selProdType = document.querySelector(".sel-prod-type").value;
	//console.log(selProdType);
	let rows = document.querySelectorAll('#table-product tr');
	// line is zero-based
	// line is the row number that you want to see into view after scroll    
	//let line = 100;
	rows[selProdType].scrollIntoView({
		behavior: 'smooth',
		block: 'center'
	});
});

