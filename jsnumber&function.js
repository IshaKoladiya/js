// 1 . javascript Number function

// 1.tostring()

// let no = 10.50;
// document.write("<br/> "+ no)
// document.write("<br/> "+ typeof(no))

// let n2 = no.toString();
// document.write("<br/> "+ n2)
// document.write("<br/> "+ typeof(n2))

// 2 . toFixed() - point pachi count thai che

// let no = 5.10567;
// document.write("<br/> " + no)
// document.write("<br/> " + no .toFixed(2))
// document.write("<br/> " + no .toFixed(3))

// 3 . toPrecision() - first thi count kare che

// let no = 5.10567;
// document.write("<br/> " + no)
// document.write("<br/> " + no .toPrecision())
// document.write("<br/> " + no .toPrecision(2))
// document.write("<br/> " + no .toPrecision(3))

// 4 . isInteger() - first thi count kare che

// let no = 5;
// document.write("<br/> " + no)
// document.write("<br/> " + typeof(no))
// document.write("<br/> " + Number.isInteger(no))

// ** Mathamatic Function

//  <--|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|--->
//    -15 -14 -13 -12 -11 -10 -9  -8  -7  -6  -5  -4  -3  -2  -1   0   1   2   3   4   5   6   7   8   9   10  11  12  13  14  15   

// // 1 . round()

// document.write("<br/> "+ Math.round(10));      // 10
// document.write("<br/> "+ Math.round(10.45));   // 10
// document.write("<br/> "+ Math.round(10.50));   // 11 
// document.write("<br/> "+ Math.round(10.99));    // 11
// document.write("<br/> "+ Math.round(-10.99));   // -11
// document.write("<br/> "+ Math.round(-10.45));    // -10

// // 2 . floor() - down velue

// document.write("<br/> "+ Math.floor(10));       //10
// document.write("<br/> "+ Math.floor(10.45));    //10
// document.write("<br/> "+ Math.floor(10.50));    //10
// document.write("<br/> "+ Math.floor(10.99));    //10
// document.write("<br/> "+ Math.floor(-10.99));   //-11
// document.write("<br/> "+ Math.floor(-10.45));   //-11

// 3 . ceil() - up valu

// document.write("<br/> "+ Math.ceil(10));        //10
// document.write("<br/> "+ Math.ceil(10.45));     //11
// document.write("<br/> "+ Math.ceil(10.99));     //11
// document.write("<br/> "+ Math.ceil(-10.01));    //-10
// document.write("<br/> "+ Math.ceil(-10.99));    //-10

// 4 . pow()  - it return power

// document.write("<br/> "+ Math.pow(10,2));    //100
// document.write("<br/> "+ Math.pow(5,3));     //125
// document.write("<br/> "+ Math.pow(2,5));     //32

// 5. sqrt()  - it return vargmul

// document.write("<br/> "+ Math.sqrt(100));    //10
// document.write("<br/> "+ Math.sqrt(144));    //12
// document.write("<br/> "+ Math.sqrt(140));    //11.83

// 6. abs()  - nagetive value convort to positive

// document.write("<br/> "+ Math.abs(10));    //10
// document.write("<br/> "+ Math.abs(14));    //14
// document.write("<br/> "+ Math.abs(-10));    //10

// 7. min()  - it return min value

// document.write("<br/> "+ Math.min(10 , 5));        //5
// document.write("<br/> "+ Math.min(10 , 50));       //10
// document.write("<br/> "+ Math.min(10 , 50 , 60));  //10

// 8. max()  - it return max value

// document.write("<br/> "+ Math.max(10 , 5));        //10
// document.write("<br/> "+ Math.max(10 , 50));       //50
// document.write("<br/> "+ Math.max(10 , 50 , 60));  //60


// 9. random()  - creat number by default 0 - 1.

// document.write("<br/> "+ Math.random());        
// document.write("<br/> "+ Math.random()*100);       
// document.write("<br/> "+(Math.floor( Math.random()*1000000)).toString().padStart(6,'0'));  



// * java script Date - time

// // 1.current date

// let d = new Date();

// document.write("<br/>"+ d);


// // 2. spacific date- time

// // let d = new Date('2003-12-04');
// // let d = new Date('2003,12,04');
// // let d = new Date('2003,12,04,15,17,22,999');
// // document.write("<br/>"+ d);

// // ** date get function **

// // let d = new Date();

// // 1. toString()
// // document.write(d.toString());  // Mon Apr 24 2023 10:42:43 GMT+0530 (India Standard Time)

// // 2. getDate()      1 - 31
// document.write("<br/>" + d.getDate());  // 24

// // 3. getMonth()  0 - 11
// document.write("<br/>" + d.getMonth());  // 3

// // 4. getFullyYear()  4 digit
// document.write("<br/>" + d.getFullYear());  // 2023

// // 5. getDay()  1 - 7  [1-monday]  [7-sun]
// document.write("<br/>" + d.getDay());  // 1

// // 6. getHours()  0 - 23
// document.write("<br/>" + d.getHours()); // 10

// // 7. getminutes()  0 - 59
// document.write("<br/>" + d.getMinutes());  // 42

// // 8. getSecond()  0 - 59
// document.write("<br/>" + d.getSeconds());  // 43

// // 8. getMilisecond()  0 - 999
// document.write("<br/>" + d.getMilliseconds());  // 102


// document.write("<br/>" + d.toLocaleString());   // 4/24/2023, 10:42:43 AM
// document.write("<br/>" + d.toLocaleDateString());  // 4/24/2023
// document.write("<br/>" + d.toLocaleTimeString());  // 10:42:43 AM


// --> same as get function

// 1.set Date();   1 to 31

// d.setDate(29);
// document.write(d);


// javascript array 

// 1 . number array

// method - 1
const  car = ['swift','baleno', 'i20' ,'creata']

// method - 2

const car2 = new Array('swift','baleno', 'i20' ,'creata','ktm');


// access

// m-1
// document.write(car)

// m-2
// document.write("<br/>"+car[2])

// m-3
// for(let i in car){
//     document.write("<br/>"+i+"="+car[i])
// }

// array property length

// 1.length

// document.write("<br/>"+ car2.length)

// first element
// document.write("<br/>"+ car[0]);

// last element
// document.write("<br/>"+ car[car.length-1]);

// for loop
// for(let i=1; i<=car.length-1;i++){
//     document.write("<br/>"+i+"="+car[i])

// }

// arrey function

// 1. tostring() - convort to string.

// document.write("<br/>"+ car);
// document.write("<br/>"+ typeof(car));

// let car_str = car.toString();

// document.write("<br/>"+ car_str);
// document.write("<br/>"+ typeof(car_str));


// 2. join() - kya character thi join karvu che te 

// document.write("<br/>"+ car);
// document.write("<br/>"+ typeof(car));

// let car_str = car.join(" - ");

// document.write("<br/>"+ car_str);
// document.write("<br/>"+ typeof(car_str));

// 3. split() - spacial character conbvert to array.

// let str = "AA - BB - CC - DD - EE";

// document.write("<br/>"+ str);

// let car_str = str.split(" - ");

// document.write("<br/> Array : "+ car_str);
// document.write("<br/>"+ car_str[2]);


// 4 . push() - add content in array last mai

// document.write("<br/>"+ car);

// car.push('innova');
// document.write("<br/>"+car)

// car.push('320d','q7');
// document.write("<br/>"+car)

// 5. pop() - last object remove from array.

// document.write("<br/>"+ car);

// car.pop();

// document.write("<br/>"+ car);

// 6. shift() - first object remove frome array

// document.write("<br/>"+ car);

// car.shift();
// document.write("<br/>"+ car)
// document.write("<br/>"+ car[0])

// 7. unshift() - add object in array first.

// document.write("<br/>"+ car);

// car.unshift("320d");
// car.unshift("320d","innova");

// document.write("<br/>"+ car)
// document.write("<br/>"+ car[0])

// 8. splice(); - je index par rakhvu hoy te index ma add and remove kare che

// document.write("<br/>"+ car);

// car.splice(2,0,'innova')
// car.splice(1,0,'innova','q7')

// document.write("<br/>"+ car);


// ** remove

// car.splice(2,1)
// car.splice(0,2)
// document.write("<br/>"+ car)

// * delete & insert

// let old = car.splice(2,1,'innova');
// // let old = car.splice(2,1,'t20','innova');

// document.write("<br/> "+ car);
// document.write("<br/> "+ old);

// 9. concat(); -  two array ne merge kare che

// document.write("<br/>"+ car);

// let car3 = ['t20','KTM','honda'];

// const new_car = car.concat(car3);
// const new_car = car3.concat(car);
// document.write("<br/>"+ new_car);


// 10.slice(); - array no katko kare che 

// document.write("<br/>"+ car);

// const new_car = car.slice(2);
// const new_car = car.slice(2,3);
// const new_car = car.slice(1,4);
// document.write("<br/>"+ new_car);




// 11.reverse() - convort array reverse formate

// document.write("<br/>"+ car);

// car.reverse();
// document.write("<br/>"+ car);

// 12.sort() - [A - Z] formate ma gothvay jay che

// ** Asendding order [ A - Z]

// document.write("<br/>"+ car);

// car.sort();
// document.write("<br/>"+ car);

// ** Decending order [Z - A]

// document.write("<br/>"+ car);

// car.sort();
// car.reverse();
// document.write("<br/>"+ car);

// ** numeric sort  - number array

// const no = [ 10,110,11,5,17,45,95];

// document.write("<br/>"+ no)

// ** Asendding order [ 0 - 9]

// no.sort( function (a,b) { return a-b ;});
// document.write("<br/>"+ no);

// ** Decending [ 0 - 9]

// no.sort( function (a,b) { return b-a ;});
// document.write("<br/>"+ no);


// 13.forEach(); - assese one by one element.

// document.write( "<br/> "+ car)

// car.forEach( demo);

// function demo(value , index , arr ){
//     document.write("<br/> Elemant : " + value + " index : " + index + " arrey : " + arr);
// }

// 14.map(); - accese one by one element and return value

// document.write( "<br/> "+ car)

// const n_car = car.map(demo);

// function demo(value , index , arr ){
    // document.write("<br/> Elemant : " + value + " index : " + index + " arrey : " + arr);

    // return value.toUpperCase();

// }
// document.write("<br/>"+ n_car);

// 15 . filter(); - condition pramane array ne filter kare che and ak new array ape che

// let no1 = [10 ,20, 17, 200, 56 , 15 , 95];

// document.write("<br/>"+ no1)

// const n_no = no1.filter(demo);

// function demo (value){
//     return value >= 20;
// }
// document.write("<br/>"+ n_no);


// object

// let studant = {
//     firstName : "isha",
//     lastName : "koladiya",
//     since : "2003",
//     place : "surat"
// };

// let empName = new Object();

// empName.name = "ishu";
// empName.std = "12";
// empName.sellary = 10000;

// ** access

// wrong mehod
// document.write("<br/>" + studant);

// second method

// document.write("<br/>"+ studant.firstName);

// document.write("<br/>"+ data + " . " + empName[data]);


// ** nested

// let mark = {
//     prithvi : {
//         html:55,
//         css:66,
//         js:77
//     },
//     isha : {
//         html : 77,
//         css:88,
//         js : 89
//     }
// }

// access

// m-1
// document.write("<br/>"+ mark.prithvi.css);

// for( let sname in mark){
    // if(typeof(mark[sname])== "object"){
        // document.write("<br/>"+ sname);
    //     for( let sub in mark[sname]){
    //         document.write("<br/>"+ sub + " = "+ mark[sname][sub]);
    //     }

    // }
    // else{
    //     document.write("<br/>"+ sname + " = "+ mark[sname]);
    // }

// }


// 1. simple function

// function addTwoNo(){
//     let no1 = 10;
//     let no2 = 20;

//     document.write("<br/> no1 : "+ no1 + "<br/> no2 : " + no2);

//     ans = no1 + no2;

//     document.write("<br/> Answer : " + ans);
// }

// addTwoNo();
// addTwoNo();

//  ** function print table

// function printTable(){

//     let no = Number(prompt('Enter no : '));

//     for( let i=1; i<=10; i++){
//         document.write("<br/>"+ no + " * " + i + " = " + (no * i));
//     }
// }

// printTable();


// 2. function with argument

// function addTwoNo( no1 , no2){

//     document.write("<br/> no1 : "+ no1 + "<br/> no2 : " + no2);

//     ans = no1 + no2;

//     document.write("<br/> Answer : " + ans);
// }

// addTwoNo(100 , 200);
// addTwoNo(300 , 200);

// or

// let n1 = Number(prompt('enter no1 : '));
// let n2 = Number(prompt('enter no2 : '));

// addTwoNo(n1 , n2);


// ** prectice

// 1. creat one function that accept 3 value outside function and find biggest no from 3 no.

// function three (){

//    let no = Number(prompt('enter No : '));

//     if(no>3){
//         document.write("<br/> big no of 3 : " + no)
//     }
//     else{
//         document.write("<br/> small no of 3 : " + no)
//     }
// }

// three();

// 2. creat one function that accept 5 subject mark outside function and find percentage.


// function sub(){

//     let sub1 = Number(prompt('html mark : '));
//     let sub2 = Number(prompt('css mark : '));
//     let sub3 = Number(prompt('js mark : '));
//     let sub4 = Number(prompt('bootstrap mark : '));
//     let sub5 = Number(prompt('jquery : '));

//     let per = sub1 + sub2 + sub3 + sub4 + sub5;
//     document.write("<br/> total : " + per + " / 500");

//     let ans = per/5;
//     document.write("<br/> parcentage : " + ans+ " % ;");

   
//  }

// sub();  




// 3.  creat one function that check no is dividable by 7 or not.


// function div(){

//     let no = Number(prompt('enter no : '));

//     if(no%7==0){
//         document.write("<br/> dividable by 7 : "+ no);
//     }
//     else{
//         document.write("<br/> not dividable by 7 : " + no);
//     }
// }


// div();

// ** 3 . function return value

// function addTwoNo(){
//     let no1 = Number(prompt('enter No1 : '));
//     let no2 = Number(prompt('enter No2 : '));

//     document.write("<br/> no1 : " + no1 + "<br/> no2 : " + no2);

//     let ans = no1 + no2 ;

//     return ans;
// } 

// js
// let output = addTwoNo();
// document.write("<br/> output is : " + output)

// [or]

// document.getElementById('head').innerHTML = addTwoNo();

// document.write("<br/> output is : " + addTwoNo());


// 4 . function with argument and return value.

// function addTwoNo(no1 , no2){

//     return no1 + no2;
// }

// let n1 = Number(prompt('enter no1 : '));
// let n2 = Number(prompt('enter no2 : '));

// let sum = addTwoNo(n1 , n2);
// document.write("<br/> " + sum);

// function factorial(no){

//     let f = 1;

//     for( let i=1; i<=no ; i++){
//         f = f*i;
//     }
//     return f;
// } 

// document.write("<br/> " + factorial(5));
// document.write("<br/> " + factorial(6));


// ** accept five subject mark from paramater and return parcentage.
// ** accept parsentsge as a argument and difind gread.

// function sub(sub1,sub2,sub3,sub4,sub5){

//     let total = sub1 + sub2 + sub3 + sub4 + sub5;
//     let per = total/5;


// document.write("<br/> HTML : " + sub1 );
// document.write("<br/>  CSS: " + sub2 );
// document.write("<br/> JS : " + sub3 );
// document.write("<br/> Bootstrap : " + sub4 );
// document.write("<br/> Jquery : " + sub5 );

// document.write("<br/> total : " + total + " / 500");

// if (per <= 100 && per >= 90) {
//     document.write("<br/>  A+ grades")
//   }  
//   else if (per <= 90 && per >= 80) {
//     document.write("<br/> A grades")
//   } 
//   else if (per <= 80 && per >= 70) {
//     document.write("<br/>  B+ grades")
//   } 
//   else if (per <= 70 && per >= 60) {
//     document.write("<br/>  B grades")
//   } 
//   else if (per <= 60 && per >= 50) {
//     document.write("<br/>  C+ grades")
//   } 
//   else if (per <= 50 && per >= 40) {
//     document.write("<br/> C grades")
//   } 
//   else if (per <= 40 && per >= 30) {
//     document.write("<br/> D+ grades")
//   } 
//   else if (per <= 30 && per >= 20) {
//     document.write("<br/> D grades")
//   } 
//   else {
//     document.write("<br/> D grades")
//   } 


// document.write("<br/> parsentage :  " + per + " % ");

//     return per;
  
//  }  

//  let sub1 = Number(prompt('html mark : '));
//  let sub2 = Number(prompt('css mark : '));
//  let sub3 = Number(prompt('js mark : '));
//  let sub4 = Number(prompt('bootstrap mark : '));
//  let sub5 = Number(prompt('jquery : '));

//  sub(sub1,sub2,sub3,sub4,sub5);
    

   
 // ** pass array as a function argument.

//  function demo(no){
//     document.write("<br/> " + no);
//  }  

//  let no = [ 100,200,300,400];

// demo(no);

// ** EX 2

// function sumAllElement(arr){
//       let ans = 0;
//       for( let i in arr){
//         ans = ans + arr[i];

//       }
//       return ans;

// }

// let a = [10,20,30,40,90,100];

// let ans = sumAllElement(a);
// document.write("<br/>  Answer is : " + ans);
 

// ** return array from function.

// function sum(){
//     let n1 = Number(prompt('Enter no1 : '));
//     let n2 = Number(prompt('Enter no2 : '));

//     let ans = n1 + n2;
//     let no = [ n1 , n2 , ans];

//     return no;
// }

// let ans = sum();
// document.write("<br/> " + ans[0] + " + " + ans[1] + " = " + ans[2]);


// **default Argument

// function sum(no1=100,no2=200,no3=300){
//     document.write("<br/> No1 : " + no1 );
//     document.write("<br/> No1 : " + no2 );
//     document.write("<br/> No1 : " + no3 );

//     let sum = no1 + no2 + no3;

//     document.write("<br/> Answer is " + sum );
// }

// sum( 100,200,200);
// sum(10,20) - error jyare default set na hoy tyare
// sum(10)
// sum(10,20);
// sum(10,20,30);


// ** nested function calling

// function demoA(){
//     let no1 = 10;
//     let no2 = 20;
//     let ans = no1 + no2;
//      demoB(ans);
//     document.write("<br/> 1st function continue...!")
// }

// function demoB(no){
// document.write("<br/> Answer is : " + no)
// demoC();
// document.write("<br/> 2nd function continue...!")
// }

// function demoC(){
//     document.write("<br/> 3rd function continue...!")
// }

// demoA();

// ** function inside object.

// let studant = {
//     firstName : "Isha",
//     lastName : "Koladiya",
//     age : 18,
//     sallary : 1000000000,
//     fullName : function(){
//         // return this;
//         return this.firstName + " "+ this.lastName;
//     }
// };
// document.write("<br/>" + studant.age);
// document.write("<br/>" + studant.fullName());
// console.log("<br/>" + studant.fullName());

// ** recursion

// EX : 1

// function fact(no){
//     if(no==1){
//         return 1;
//     } 
//     else{
//         return no*fact(no-1);
//     }
// }

// document.write("<br/> factorial of 5 : " + fact(5))
// document.write("<br/> factorial of 6 : " + fact(6))



// ex:1 Block Method

// let sum = (n1 , n2)=>{
//     document.write("<br/> n1 : " + n1);
//     document.write("<br/> n2 : " + n2);

//     let ans = n1 + n2;
//     document.write("<br/> Answer is : " + ans );
// }

// sum(100,10);


//  ex:2  block method with return

// let sum = (n1 , n2)=>{
//     document.write("<br/> n1 : " + n1);
//     document.write("<br/> n2 : " + n2);

//     let ans = n1 + n2;
//    return ans;
// }

// let output = sum(200,300);
// document.write("<br/> Answer is : " + output );

// ex : 3 short Method

// let sum = (n1,n2) => n1+n2;

// let output = sum(200,300);
// document.write("<br/> Answer is : " + output);

// ex : 4 short Method

// let bigNo = (n1,n2) => (n1>n2) ? n1 : n2;

// let output = bigNo(2000,300);
// document.write("<br/> Answer is : " + output);




























































































