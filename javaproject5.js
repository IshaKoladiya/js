

document.write("<br/> *****************************************");
document.write("<br/> ******** ELECTRICITY BILL *********");

let pre = Number(prompt('PREVIUS READING :  '));
let curr = Number(prompt('CURRENT READING :  '));
  

document.write("<br/> *****************************************");
document.write("<br/> *****************************************");
  
document.write("<br/> * ELECTRICITY CURRENT READING :" + curr);
document.write("<br/> * ELECTRICITY PREVIUS READING :" + pre);

let unit = pre - curr;
document.write("<br/> * ELECTRICITY UNIT :" + unit);

let ret = 4.5;
let tu = unit * ret;
document.write("<br/> * ELECTRICITY CHARGE ["+ ret +" Rs]  : " + tu + " /-");

let fix = 150;
document.write("<br/> * FIX CHARGE  : " + fix + " /-");

let govn = 35;
document.write("<br/> * Govn CHARGE  : " + govn+ " /-");

let gst = 12;
let gst1 = tu * gst / 100;
document.write("<br/> * EMP GST ["+gst+"%]  : Rs :"+ gst1+ " /-");

document.write("<br/> *****************************************");
let pba = tu + fix + govn + gst1;
document.write("<br/> <b> TOTAL PAYABLE AMOUNT : " + pba + " /- </b>")
document.write("<br/> *****************************************");

