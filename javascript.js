

// alert('hello world');


// nnerHTML

// document.getElementById('ishu').innerHTML='<i> content</i> change by javascript';

// document.write
// document.write(" <font color='red'> hello world </font>");

// window.alert('popup message');
// window.alert('popup message');
// alert('contect');

// console
// console.log('contact');
// console.log('console message print');

// javascript popup box

// 1.window.alert('msg')
// 2.window.confirm('')
// 3.window.prompt('')



// 1.window.alert('msg')
// window.alert('hello ishu')
// alert('hello ishu')

// 2.window.confirm('')

// syntax 1
//  let ishu = window.confirm('hello hello allways be happy');
//  document.getElementById('i').innerHTML= ishu;

 // syntax 2

//  document.getElementById('i').innerHTML=confirm('are you sure want to d elet?');

 // 3.window.prompt('')

//   let age = window.prompt('enter your age?');
//   document.getElementById('i').innerHTML= age;

// type of variable

// 1.declaration
// var name;

// assign value
//  name='value';

// initiolizetion
// var name ="ishu";

// document.write(name);

// override
// var companyName ="mi"
// var companyName ="mi2"
// var companyName ="mi3"
// var companyName ="mi4"



// document.write(companyName);


// 2.let

// 1.declaration
// let name;

// assign value
//  var_name='value';

// initiolizetion
// let var_name ="ishu"

// let empNo;
// empNo='emp101'
// empNo='emp10000001' // override
// print
// document.write("<br/>" + empNo);


// let empNo='412715';                    //error you can not redecler
// document.write("<br/>" + empNo);


// initlization

// let mishu='mi';
// document.write("<br/>" + mishu);


// multiple declartion
// let studID,studName,studstd,studclgName;

// multiple initlization
// let studID=101,studName='ishu',studstd='wd';

// multiple printing / concat multiple msg
// document.write('<br/> studant ID: '+ studID,'<br/> studant Name: '+ studName ,'<br/> studant std: '+ studstd)
// document.write('<br/>'+ studID,'<br/>'+ studName ,'<br/>'+ studstd)

// asign same value to all variable
// studID=studName=studstd='demo';

// document.write('<br/> studant ID:'+studID,'<br/> studant name:'+studName,'<br/> studant std:'+studstd);


// 3.const

const pi = 3.14;

// const pi = 5.5; - error throw
//  const pi = 5.5;- error throw


document.write(pi);


// 4.nathing

empName = "NOVA";
document.write("<br/>"+ empName);

// type conversion
/*
1.parseInt() - it Convert string into integer.
2.parsefloat() - it Convert string into float.
3.tostring() - it Convert number into string.

[or]

4.number() - it convert string into number.
5.string() - it convert number into string.

*/

// 1.parseInt()

// let str = "10";
// document.write("<br/> No : "+ str);
// document.write("<br/> datatype: "+ typeof(str));
// let no = parseInt(str);
// document.write("<br/> no :"+ no);
// document.write("<br/> datatype :"+ typeof(no));

// 2.parsefloat()
// let str = "10.5";
// document.write("<br/> No : "+ str);
// document.write("<br/> datatype : "+ typeof(str));
// let no = parseFloat(str);
// document.write("<br/> No : "+ no);
// document.write("<br/> datatype : "+ typeof(no));

// // 3.tostring()
// let no = 10.5;
// document.write("<br/> No : "+ no);
// document.write("<br/> datatype : "+ typeof(str));
// let str = no.toString();
// document.write("<br/> No : "+ str);
// document.write("<br/> datatype : "+ typeof(str));

// 4.number()
// let str = "10.5";
// document.write("<br/> No : "+ str);
// document.write("<br/> datatype : "+ typeof(str));
// let no = Number(str);
// document.write("<br/> No : "+ no);
// document.write("<br/> datatype : "+ typeof(no));

// 5.string()
// let no = 10.5;
// document.write("<br/> No : "+ no);
// document.write("<br/> datatype : "+ typeof(no));
// let str = String(no);
// document.write("<br/> No : "+ str);
// document.write("<br/> datatype : "+ typeof(str));


// 1.arithmetic oprators

// let no1 = 10;
// let no2 = 20;

// +(addition)
// let ans = no1 + no2;
// let ans = no2 + no1;

// -(subscription)
// let ans = no1 - no2;
// let ans = no2 - no1;

// *(multiplication)
// let ans = no1 * no2;
// let ans = no2 * no1;

// /(division)
// let ans = no1 / no2;
// let ans = no2 / no1;

// **(exponation)
// let ans = no1**no2;
// let ans = no2**no1;
// let ans = 2**5;
// let ans = 3**3;

// %(module)
// let ans = no1 % 3;
// let ans = no2 % 4;



// document.write("<br/> answer is : " + ans);
// document.write(no1 + no2);
// document.write("<br/>" + (no1 + no2));
// document.write("<br/>" + no1 + "+" + no2 + "=" + (no1 + no2));


// user input

// let no1 = Number(prompt('enter no1 : '));
// let no2 = Number(prompt('enter no2 : '));
// document.write("<br/> ans : " +(no1 + no2));

// program 1 - marksheet

let name = prompt('enter your name :  ');
let m1 = Number(prompt('enter HTML mark :  '));
let m2 = Number(prompt('enter Javascript mark :  '));
let m3 = Number(prompt('enter sql mark :  '));
let m4 = Number(prompt('enter php mark :  '));
let m5 = Number(prompt('enter css mark :  '));

document.write("<br/> *****************");
document.write("<br/> **** marksheet ****");
document.write("<br/> *****************");
document.write("<br/> Name :" + name );
document.write("<br/> *****************");

document.write("<br/> * HTML : " + m1 +"*");
document.write("<br/> * CSS : " + m2 +"*");
document.write("<br/> * Javascript : " + m3 +"*");
document.write("<br/> * SQL : " + m4 +"*");
document.write("<br/> * php : " + m5 +"*");

document.write("<br/>******************");
let total = m1+ m2 + m3 + m4 + m5 ;
let per = total / 5 ;

document.write("<br/> * <b> total : " + total + "<b/> * ");
document.write("<br/> * <b> parsentage : " + per + " % <b/> * ");
document.write("<br/>******************");

