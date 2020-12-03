var inputText = document.getElementById('input-text');
var translatedText = document.getElementById('translated-text');
var btnTranslate = document.getElementById('btn-translate');

var valyrianURL =  "https://api.funtranslations.com/translate/valyrian.json";

// construct url
function addTextParameterToURL(textParameter) {
  var encodedURI = encodeURIComponent(textParameter);
  return `${valyrianURL}?text=${encodedURI}`;
}

// fetched the api
function clickHandler() {
  var textParameter = inputText.value;
  var serverURL = addTextParameterToURL(textParameter);

  console.log(serverURL); 

  if (textParameter.length === 0) {
    alert("You need to type a sentence");
  } else if (/^\d+$/.test(textParameter)) {
    alert("You need to include letters in your sentence");
  } else {
    fetch(serverURL)
    .then(response => response.json())
    .then(json => {
    translatedText.value = json.contents.translated;
    })
    .catch(error => {
      console.log("Error encountered", error);
    })
  }
}

btnTranslate.addEventListener('click', clickHandler);