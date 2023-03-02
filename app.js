var btnclick = document.querySelector("#btn");
var txtInput = document.querySelector("#txt-input");
console.log(txtInput);

   function clickhere(){
    console.log("clicked");
    console.log("input",txtInput.value);
   };
btnclick.addEventListener("click" ,clickhere);