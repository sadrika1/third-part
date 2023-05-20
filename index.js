const form = document.forms.mainForm;
const mainFormRadio = mainForm.difficult;
//console.log(form, mainFormRadio)

form.addEventListener("submit", function (event) {
	if(mainFormRadio.value){
		alert('выбранный уровень сложности ' + mainFormRadio.value);
	}
    
	if (!mainFormRadio.value) {
		alert('Выберите уровень сложности!');
	}
    event.preventDefault();  
});

