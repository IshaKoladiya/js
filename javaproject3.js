// PROJECT 3 - dmart bill
let d1 = prompt('product_Name :  ');
let d2 = Number(prompt('product_Id :  '));
let d3 = Number(prompt('product_price :  '));
let d4 = Number(prompt('product_qty :  '));

document.write("<br/> *****************");
document.write("<br/> *****************");
document.write('<br/> product_Name : ' + d1);
document.write('<br/> product_Id : ' + d2);
document.write('<br/> product_Price : ' + d3);
document.write('<br/> product_Qty : ' + d4);
document.write("<br/> *****************");
document.write("<br/> *****************");

let discount = 0;

if(d3 >= 1000){
      discount = 10;
}

else if(d3 >= 500){

        discount = 5;
}
else if(d3 >= 250){
        discount = 2.5;
}



let dis = (d3 * discount) / 100 ;
document.write("<br/> *****************");
document.write("<br/> discount product pre ["+ discount +" %]  : " + dis);
document.write("<br/> *****************");

let net = d3 * d4 ;
document.write("<br/> *****************");
document.write('<br/> net Price : ' + net);
document.write("<br/> *****************");

let pay = net - dis ;
document.write("<br/> *****************");
document.write('<br/> payable amount : ' + pay);
document.write("<br/> *****************");

let sav = net - pay ;
document.write("<br/> *****************");
document.write('<br/> Saving : ' + sav);
document.write("<br/> *****************");




