
// js control statment

// * 1.conditional statment

        // *  1.if statment

                //    1. simple if
                //    2. if with else
                //    3. if with else if / ladder if
                //    4. Nested if
        
        // *  2.swich statment


 
// * 2.looping statment

        // * 1.Entry control loop   

                // 1. for loop
                // 2. While loop

        // * 2.Exit control loop   

                //  1. do while loop

        // * 3. Array spacial loop   

                  // 1. for in loop

        

// 3.looping  control statment

         // * 1. break statment

         // * 2. continue statment


   
//  1. if statment

        //  1. simple if

        // let no = 10;
        // document.write("<br/> " + no);

        // if ( no > 0){
        //     document.write("<br/>"+ no + "is positive...!");
        // }

        // document.write("<br/> code continue"); 

//  2. if with else

        //  syntax:-

        // let no1 = -10;
        // document.write("<br/> No : " + no1);

        // if ( no1 > 0){
        //     document.write("<br/> "+ no1 + "is positive...!");
        // }
        // else{
        //     document.write("<br/>"+ no1 + "is Negetive...!");
        // }

        // document.write("<br/> code continue"); 


        // ex: 2 odd - even

        // let no1 = Number(prompt(" enter No : "));

        // document.write("<br/> No : " + no1);

        // if ((no1%2) == 1 ){
        //     document.write("<br/> "+ no1 + " Odd...!");
        // }
        // else{
        //     document.write("<br/>"+ no1 + " even...!");
        // }

        //  //   method 2

        //  document.write((no1%2==1) ? no1 + "odd" : no1 + "even")

        //   document.write("<br/> code continue"); 


        // ex: 3 input one number check is divadeble by 5 or not

        // let no1 = Number(prompt(" enter No : "));

        // document.write("<br/> No : " + no1);

        // if ((no1%5) == 0 ){
        //     document.write("<br/> "+ no1 + " divadeble by 5...!");
        // }
        // else{
        //     document.write("<br/>"+ no1 + " not divadeble by 5 ...!");
        // }


         // ex: 3  fined big no

        //  let no1 = Number(prompt(" enter No : "));
        //  let no2 = Number(prompt(" enter No : "));

        //  document.write("<br/> No : " + no1);
        //  document.write("<br/> No : " + no2);
 
        //  if (no1>no2){
        //      document.write("<br/> "+ no1 + " is big...!");
        //  }
        //  else{
        //      document.write("<br/>"+ no2 + " is big...!");
        //  }


         // ex: 4  fined  same no

        //  let no1 = Number(prompt(" enter No : "));
        //  let no2 = Number(prompt(" enter No : "));

        //  document.write("<br/> No : " + no1);
        //  document.write("<br/> No : " + no2);
 
        //  if (no1 == no2){
        //      document.write("<br/> "+ no1 + " same...!");
        //  }
        //  else{
        //      document.write("<br/>"+ no2 + " not same...!");
        //  }
       


        // 3. if with else if / ladder if

        // let no = Number(prompt( " Enter no : "));
        // document.write("<br/> No : ");

        // if ( no > 0){
        //         document.write("<br/>" + no + "positiv");
        // }
        // else if ( no < 0){
        //         document.write("<br/>" + no + "nagetiv");
        // }
        // else{
        //         document.write("<br/>"+ no + " no Zero");
        // }
        // document.write("<br/> code continue");

        
        // 4. nested if

        // let no1 = Number(prompt("enter No1 : "));
        // let no2 = Number(prompt("enter No2 : "));
        // let no3 = Number(prompt("enter No3 : "));

        // document.write("<br/> no1 : " + no1);
        // document.write("<br/> no2 : " + no2);
        // document.write("<br/> no3 : " + no3);

        // if( no1 > no2){
        //    if( no1 > no3) {
        //         document.write("<br/>"+no1+" is big");
        //    }
        //    else{
        //         document.write("<br/>"+no3+" is big");  
        //     }
        // }
        // else{
        //      if(no2 > no3){

        //         document.write("<br/>"+no2+" is big");
        //         }
        //      else{
        //         document.write("<br/>"+no3+" is big");
        //      }   
        // }

        // method 2

        // let no1 = Number(prompt("enter No1 : "));
        // let no2 = Number(prompt("enter No2 : "));
        // let no3 = Number(prompt("enter No3 : "));

        // document.write("<br/> no1 : " + no1);
        // document.write("<br/> no2 : " + no2);
        // document.write("<br/> no3 : " + no3);

        // if( no1 > no2 && no1 > no3){
        //         document.write("<br/> no1 : " + no1 +" is big...!");
        // }
        // else if( no2 > no1 && no2 > no3){
        //         document.write("<br/> no1 : " + no2 +" is big...!");
        // }
        // else{
        //         document.write("<br/>"+ no3+"is big")
        // }

// program 1 - marksheet

// let name = prompt('enter your name :  ');
// let m1 = Number(prompt('enter HTML mark :  '));
// let m2 = Number(prompt('enter Javascript mark :  '));
// let m3 = Number(prompt('enter sql mark :  '));
// let m4 = Number(prompt('enter php mark :  '));
// let m5 = Number(prompt('enter css mark :  '));

// document.write("<br/> *****************");
// document.write("<br/> **** marksheet ****");
// document.write("<br/> *****************");
// document.write("<br/> Name :" + name );
// document.write("<br/> *****************");

// document.write("<br/> * HTML : " + m1 +"*");
// document.write("<br/> * CSS : " + m2 +"*");
// document.write("<br/> * Javascript : " + m3 +"*");
// document.write("<br/> * SQL : " + m4 +"*");
// document.write("<br/> * php : " + m5 +"*");

// document.write("<br/>******************");
// let total = m1+ m2 + m3 + m4 + m5 ;
// let per = total / 5 ;

// if(per>=70){
//   document.write("<br/> <b>*CLASS : DISCTINCTION*<b/>");      
// }
// else if(per>=60){
//         document.write("<br/> <b>*CLASS : FIRST*<b/>");      
// }
// else if(per>=50){
//         document.write("<br/> <b>*CLASS : SECOND*<b/>");      
// }
// else if(per>=35){
//         document.write("<br/> <b>*CLASS : PASS*<b/>");      
// }
// else{
//         document.write("<br/> <b>*CLASS : FAIL*<b/>");      
// }


// document.write("<br/> <b> *total : " + total + "*<b/> ");
// document.write("<br/> <b>* parsentage : " + per + " % *<b/>");
// document.write("<br/>******************");



        // ex: - electri city bill   Home Work

// document.write("<br/> *****************************************");
// document.write("<br/> ******** ELECTRICITY BILL *********");

// let pre = Number(prompt('PREVIUS READING :  '));
// let curr = Number(prompt('CURRENT READING :  '));
  

// document.write("<br/> *****************************************");
// document.write("<br/> *****************************************");
  
// document.write("<br/> * ELECTRICITY CURRENT READING :" + curr);
// document.write("<br/> * ELECTRICITY PREVIUS READING :" + pre);

// let unit = pre - curr;
// document.write("<br/> * ELECTRICITY UNIT :" + unit);

// let ret = 0;

// if(unit >= 200){
//        ret = 7.5;
// }

// else if(unit >= 100){

//         ret = 5;
// }
// else if(unit<100){
//         ret = 3.5;
// }

// let tu = unit * ret;
// document.write("<br/> * ELECTRICITY CHARGE ["+ ret +" Rs]  : " + tu + " /-");

// let fix = 150;
// document.write("<br/> * FIX CHARGE  : " + fix + " /-");

// let govn = 35;
// document.write("<br/> * Govn CHARGE  : " + govn + " /-");

// let gst = 12;
// let gst1 = tu * gst / 100;
// document.write("<br/> * EMP GST ["+gst+"%]  : Rs :"+ gst1 + " /-");

// document.write("<br/> *****************************************");
// let pba = tu + fix + govn + gst1;
// document.write("<br/> <b> TOTAL PAYABLE AMOUNT : " + pba + " /- </b>")
// document.write("<br/> *****************************************");