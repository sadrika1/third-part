const form = document.forms.mainForm;
const mainFormRadio = mainForm.difficult;
//console.log(form, mainFormRadio)

form.addEventListener("submit", function (event) {
    alert('выбранный уровень сложности ' + mainFormRadio.value);
	if (!mainFormRadio.value) {
		alert('Выберите уровень сложности!');
	}
    event.preventDefault();  
});

