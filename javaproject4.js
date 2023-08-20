
// p4 - Employ payroll systam

document.write("<br/> *****************************************");
document.write("<br/> ******** Employ payroll systam *********");

  let E1 = Number(prompt('EMP_ID :  '));
  let E2 = (prompt('EMP_NAME :  '));
  let E3 = Number(prompt('EMP BASIC SALARY :  '));

  document.write("<br/> **************************************");
    document.write("<br/> * EMP_ID :" + E1);
    document.write("<br/> * EMP_NAME :" + E2);
    document.write("<br/> * EMP BASIC SALARY  :" + E3);

    document.write("<br/> ***********************************");

   let hra = 20;
   let hra1 = E3 * hra / 100;
   document.write("<br/> * EMP HRA ["+hra+"%]  : Rs :"+ hra1+ "/-");

   let da = 10;
   let da1 = E3 * da / 100;
   document.write("<br/> * EMP DA ["+da+"%]  : Rs :"+da1+ "/-");

   let pf = 15;
   let pf1 = E3 * pf / 100;
   document.write("<br/> * EMP PF ["+pf+"%]  : Rs :"+pf1+ "/-");

   document.write("<br/> **********************************");

   let nets = (E3 + hra1 + da1) - pf1;
   document.write("<br/> * Net Sellary : " + nets + "/-");
   document.write("<br/> **********************************");
