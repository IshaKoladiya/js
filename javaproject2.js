
 // simple intrest calculatar


let m1 = Number(prompt('enter price :  '));
let m2 = Number(prompt('enter intrest :  '));
let m3 = Number(prompt('enter no of Month :  '));

document.write("<br/> *****************");
document.write("<br/> price :" + m1);
document.write("<br/> rate intrest :" + m2);
document.write("<br/> No of Month :" + m3);
document.write("<br/> *****************");

let total = m1 * m2 * m3  / 100 ;
document.write("<br/> *****************");
document.write("<br/> total intrest : "+ total);
document.write("<br/> *****************");



