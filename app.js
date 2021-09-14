var inputText = document.querySelector("#translate-input");
var outputText = document.querySelector("#translate-output");
var btnTranslate = document.querySelector("#translate-btn");

var serverUrl = "https://api.funtranslations.com/translate/navi.json";

btnTranslate.addEventListener("click", clickHandler);

function getServerUrl(input) {
	return serverUrl + "?" + "text=" + input;
}

function clickHandler() {
	var textInput = inputText.value;

	fetch(getServerUrl(textInput))
		.then((response) => response.json())
		.then((json) => {
			var translatedText = json.contents.translated;
			outputText.innerText = translatedText;
		})
		.catch(errorHandler);
}

function errorHandler(error) {
	alert("Something wrong with server ! Try again after sometime");
}
