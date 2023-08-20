

// 2.switch case

// syntax

/*

switch(value(expretion)){
    case value1:{
        no of statment;
        break;
    }
     case value2:{
        no of statment;
        break;
    }
     case value3:{
        no of statment;
        break;
    }
     default:{
        no of statment;
       
    }

}
*/

// ex:-1

// let no = Number(prompt('enter no: beetween 1 to 5'));

// switch (no){
//           case 1:{
//             document.write("<br/> you press one");
//             break;
//           }  
//           case 2:{
//             document.write("<br/> you press two");
//             break;
//           } 
//           case 3:{
//             document.write("<br/> you press three");
//             break;
//           }   
//           case 4:{
//             document.write("<br/> you press four");
//             break;
//           }    
//           case 5:{
//             document.write("<br/> you press five");
//             break;
//           }  
//           default:{
//             document.write("<br/> you press wrong")
//           }

// }

// ex:-2

// let no = prompt('enter no: beetween A to E');

// switch (no){
//           case 'a':
//           case 'A':{
//             document.write("<br/> you press a");
//             break;
//           }  
//           case 'b':
//           case 'B':{
//             document.write("<br/> you press b");
//             break;
//           } 
//           case 'c':
//           case 'C':{
//             document.write("<br/> you press c");
//             break;
//           }   
//           case 'd':
//           case 'D':{
//             document.write("<br/> you press d");
//             break;
//           }   
//           case 'e': 
//           case 'E':{
//             document.write("<br/> you press e");
//             break;
//           }  
//           default:{
//             document.write("<br/> you press wrong")
//           }

// }


// ex:-3  simple calculater

// let no = Number(prompt('1.addition || 2.subscription || 3.multiplication || 4.division || 5.remainder'));

// switch (no){
//           case 1:{
//             let n1 = Number(prompt('enter no1 : '));
//             let n2 = Number(prompt('enter no2 : '));

//             let ans = n1 + n2;

//             document.write("<br/> No1: " + n1);
//             document.write("<br/> No2: " + n2);
//             document.write("<br/> Answer: " + ans);
//             break;

//           }  
//           case 2:{
//             let n1 = Number(prompt('enter no1 : '));
//             let n2 = Number(prompt('enter no2 : '));

//             let ans = n1 - n2;

//             document.write("<br/> No1: " + n1);
//             document.write("<br/> No2: " + n2);
//             document.write("<br/> Answer: " + ans);
//             break;

//           } 
//           case 3:{
//             let n1 = Number(prompt('enter no1 : '));
//             let n2 = Number(prompt('enter no2 : '));

//             let ans = n1 * n2;

//             document.write("<br/> No1: " + n1);
//             document.write("<br/> No2: " + n2);
//             document.write("<br/> Answer: " + ans);
//             break;

//           } 
//           case 4:{
//             let n1 = Number(prompt('enter no1 : '));
//             let n2 = Number(prompt('enter no2 : '));

//             let ans = n1 / n2;

//             document.write("<br/> No1: " + n1);
//             document.write("<br/> No2: " + n2);
//             document.write("<br/> Answer: " + ans);
//             break;

//           } 
//           case 5:{
//             let n1 = Number(prompt('enter no1 : '));
//             let n2 = Number(prompt('enter no2 : '));

//             let ans = n1 % n2;

//             document.write("<br/> No1: " + n1);
//             document.write("<br/> No2: " + n2);
//             document.write("<br/> Answer: " + ans);
//             break;

//           } 

//           default:{
//             document.write("<br/> you press wrong")
//           }

//         }

// ex:5 home work 1 switch case

// let num = (prompt('A.odd or even || B. positive nagetive or Zero || C. divided by 7'));

// switch (num) {
//     case 'A': {
//         let no1 = Number(prompt('enter No: '));

//         if ((no1 % 2) == 1) {
//             document.write("<br/> odd Number: " + no1);
//         }
//         else {
//             document.write("<br/> even Number : " + no1);
//         }
//         break;
//     }

//     case 'B': {
//         let no1 = Number(prompt('enter No: '));

//         if (no1 > 0) {
//             document.write("<br/> " + no1 + "  positive");
//         }
//         else if (no1 < 0) {
//             document.write("<br/>" + no1 + "  nagetiv");
//         }
//         else {
//             document.write("<br/>" + no1 + " no Zero");
//         }
//         break;
//     }
//     case 'C': {
//         let no1 = Number(prompt(" enter No : "));

//         if ((no1 % 7) == 0) {
//             document.write("<br/> " + no1 + " divaded by 7...!");
//         }
//         else {
//             document.write("<br/>" + no1 + " not divaded by 7 ...!");
//         }
//         break;
//     }
//     default: {
//         document.write("<br/> you press wrong")
//     }
// }

// ex : 6 find big numbar home work 2

// let no = Number(prompt('1.big from no 2||2.big from no 3||3.big from no 4 ||4.small from no 2 ||5.small from no 3 ||6.small from no 4'));

// switch (no){
//             case 1:{
//             let no1 = Number(prompt(" enter No : "));
            
//             if (no1>2){
//                 document.write("<br/> "+ no1 + " is big...!");
//             }
//             else{
//                 document.write("<br/>"+ no1 + " is not big...!");
//             }
//             break;
//             }  
//           case 2:{
//             let no1 = Number(prompt(" enter No : "));
            
//             if (no1>3){
//                 document.write("<br/> "+ no1 + " is big...!");
//             }
//             else{
//                 document.write("<br/>"+ no1 + " is not big...!");
//             }
//             break;
//           } 
//           case 3:{
//             let no1 = Number(prompt(" enter No : "));
            
//             if (no1>4){
//                 document.write("<br/> "+ no1 + " is big...!");
//             }
//             else{
//                 document.write("<br/>"+ no1 + " is not big...!");
//             }
//             break;
//           }   
//           case 4:{
//             let no1 = Number(prompt(" enter No : "));
            
//             if (no1<2){
//                 document.write("<br/> "+ no1 + " is small...!");
//             }
//             else{
//                 document.write("<br/>"+ no1 + " is not small...!");
//             }
//             break;
//           }    
//           case 5:{
//             let no1 = Number(prompt(" enter No : "));
            
//             if (no1<3){
//                 document.write("<br/> "+ no1 + " is small...!");
//             }
//             else{
//                 document.write("<br/>"+ no1 + " is not small...!");
//             }
//             break;
//           }  
//           case 6:{
//             let no1 = Number(prompt(" enter No : "));
            
//             if (no1<4){
//                 document.write("<br/> "+ no1 + " is small...!");
//             }
//             else{
//                 document.write("<br/>"+ no1 + " is not small...!");
//             }
//             break;
//           } 
//           default:{
//             document.write("<br/> you press wrong")
//           }

// }

// *** for Loop

// **simple for loop

// let no = 10;
// for(let i=1 ; i<=no ; i++){
//     document.write("<br/> " + i);
// }

// **multipart of for loop

// let no = 10;
// for(let i=1 , j=10 ; i<=no && j<=100 ; i++ ,j+=10){
//     document.write("<br/> " + i + "=" + j);
// }

//**optional part of for loop

// let no = 10;
// let i=1;
// for( ; ; ){
//     if(i<=no){
//         document.write("<br/>"+ i);
//         i++;
//     }
//     else{
//         break;
//     }
// }

//** infinite for loop

// for( ; ; ){
//     document.write("<br/> Hello ");
// }
 
//** reverse for loop
// let no = 10;
// for(let i=no ; i>0 ; i--){
//     document.write("<br/> " + i);
// }

//** nested for loop

// let no = 10;
// for( let i=1 ; i<=no; i++){
//     document.write("<br/> [" + i + " ] =" );
//     for( let j=1; j<=no ; j++){
//         document.write(" <br/>{"+ j+"} = ");

//         for( let p=1; p<=no ; p++){
//             document.write("["+ p + "]");
//         }
//     }
// }

//** program 1 - table of n number.

// let no = Number(prompt('enter No : '));

// for( let i=1; i<=10;i++){
//     document.write("<br/>" + no +" * "+i+" = "+(no*i));
// }

//** program 2 - print factorial of number

// let no = Number(prompt('enter No : '));

// let f=1;
// for( let i=1; i<=no;i++){

//     f*=i;
//     document.write(i+" * ");
// }
// document.write("=" + f);

//**  program 3 - input no one no and check no is prime or Not.

// let no = Number(prompt('enter No : '));

// let c = 0;

// for( let i=1; i<=no; i++){
//     let r = no%i;
// if(r == 0){
//     c++;
// }

//     document.write("<br/>" + no +" % "+ i +" = "+ r +" -> "+ c);
// }

// if(c==2){
//     document.write("<br/>"+ no + " is prime");
// }
// else{
//     document.write("<br/>"+ no + "is not prime");
// }

// ** program 4 - print series :- 1,2,3,4,5,6....

// let no = Number(prompt('Enter No: '));

// document.write("<br/> <br/> series : ");

// let no1 = 0;
// for( let i=1 ; i<=no ; i++){
//     document.write(i +",");
// }
// document.write("...");
