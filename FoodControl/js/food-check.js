//Фильтр/Флажки
/*$("#comtoggle:not(:checked)").click(function () {
	//$(".table-checkbox:checked").closest("tr").toggle();
	$(".table-checkbox:not(:checked)").closest("tr").toggle();
});*/
const filterBox = document.querySelectorAll(".table-checkbox");
//console.log(filterBox);
/*document.querySelector("#comtoggle").addEventListener("click", event => {
	if (event.target.tagName !== 'input') return false;

});*/

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
	//tInput.setAttribute('value', '0');
	tInput.setAttribute('maxlength', '3');
	tInput.setAttribute('size', '15');
	tInput.setAttribute('placeholder', 'Количество грамм');
	//tInput.closest("td").hidden = true;
}
//Отметка/Флажки
/*$(document).ready(function () {
	$("input[type='checkbox'].table-checkbox").bind("change", function () {
		var td = $("td", $(this).parent().parent());
		if ($(this).is(':checked')) {
			//$(".product-count", td).val("Selected");
			$(".product-count").closest("td").hidden = false;
		}
		else {
			//$(".product-count", td).val("Unselected");
			//$(".product-count").hide();
		}
	});
})*/
