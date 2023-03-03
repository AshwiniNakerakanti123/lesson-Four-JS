var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
//var ashDiv = document.querySelector("#ash");
var outputDiv = document.querySelector("#output")
var serverURL = "https://api.funtranslations.com/translate/minion.json"
//var title = document.querySelector("#title");
// ashDiv.innerHTML = "Ashwini";
// console.log(txtInput);

//    function clickhere(){
//     console.log("clicked");
//     console.log("input",txtInput.value);
//    };
// btnclick.addEventListener("click" ,clickhere);
function getTranslationURL(text){
   return serverURL + "?" +"text=" +text
}
function errorHandler(error){
   console.log("error occured" , error);
   alert("somthing wrong")
}
function clickHandler(){


   // ashDiv.innerHTML = output + "?" + "text=" + text
   var inputText = txtInput.value;

fetch(getTranslationURL(inputText))
.then(response => response.json())
.then(json => {
   var translatedText = json.contents.translated;
   outputDiv.innerText = translatedText;
})
.catch(errorHandler)
};
btnTranslate.addEventListener("click" ,clickHandler);
