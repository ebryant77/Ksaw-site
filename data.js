var undergrad = document.getElementById("classes_undergraduate");
var grad = document.getElementById("classes_graduate");
grad.style.display = "none";
var studentType = 'undergrad';
var result = document.getElementById("result");
var eligibility = false;

function showClasses(){
studentType = document.getElementById("select-status").value;
switch(studentType){
case 'undergrad':
undergrad.style.display = "inherit";
grad.style.display = "none";
break;
case 'grad':
undergrad.style.display = "none";
grad.style.display = "inherit";
break;
}
}

function calculate(){
var num = 0;
var grades = document.getElementsByClassName("grade");
var visible = [];
for(const grade of grades){
if(grade.parentNode.style.display != "none"){
visible.push(grade);
if(grade.checked){
num += Number(grade.value);
}
}
}
switch(studentType){
case 'undergrad':
if(num/(visible.length/5) >= 3.2){
eligibility = true;
break;
}
eligibility = false;
break;

case 'grad':
if(num/(visible.length/5) >= 3.7){
eligibility = true;
break;
}
eligibility = false;
break;
}
switch(eligibility){
case true:
result.innerHTML = "Congratulations, you meet the requirement!";
let anchor = document.createElement("a")
anchor.href = "https://binaries.templates.cdn.office.net/support/templates/en-us/lt02803374_quantized.png";
anchor.innerHTML = " Apply here!";
console.log(anchor);
let to_add=document.getElementById("result")
to_add.appendChild(anchor)
break;
case false:
result.innerHTML = "Unfortunately you are not eligible to apply.";
break;
}
}
