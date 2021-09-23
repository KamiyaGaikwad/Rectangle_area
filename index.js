var Length = document.querySelector("#length");
var Breadth = document.querySelector("#breadth");
var CalculateBtn = document.querySelector("#calculate-btn");
var Output = document.querySelector("#output");

CalculateBtn.addEventListener("click", CalculateAreaOfRect);

function CalculateAreaOfRect() {
    var L = Length.value;
    var B = Breadth.value;
    if(L == 0 || B == 0){
        Output.innerText = "Please Enter all required fields 🧐";
    }
    else if(L < 0 || B < 0){
        Output.innerText = "Please Enter positive values only 😐";
    }
    else{
    var A = L*B;
    Output.innerText = `The area of Rectangle is ${A}cm².`
}
}