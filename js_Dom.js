
// 1 . getElementById();

// let data = document.getElementById('lorem');
// document.getElementById('output').innerHTML = data.innerHTML;


// 2. getElementsByClassName()

// let data = document.getElementsByClassName('demo');
// document.write(data[1].innerHTML);

// document.write("<br/>" + data.length + " element ");

// for( let i=0 ; i<data.length ; i++){
//     document.write("<br/>"+data[i].innerHTML)
// }


// 3. getElementsByTagName()

// let data = document.getElementsByTagName('h1');
// document.write(data[0].innerHTML);

// document.write("<br/>" + data.length + " element ");

// for( let i=0 ; i<data.length ; i++){
//     document.write("<br/>"+data[i].innerHTML)
// }


// 4. queryselectorAll()

// let data = document.querySelectorAll('h1.demo');
// let data = document.querySelectorAll('*');
// let data = document.querySelectorAll('body');
// let data = document.querySelectorAll('div:nth-child(0)');
// let data = document.querySelectorAll('body p');
// let data = document.querySelectorAll('#heading');
// let data = document.querySelectorAll('p');

// document.write(data[0].innerHTML);

// document.write("<br/>" + data.length + " element ");

// for( let i=0 ; i<data.length ; i++){
//     document.write("<br/> " + data[i].innerHTML);
// }


                                              // ** working with HTML and CSS **

// 1. get contant

// let data = document.getElementById('heading').innerHTML;
//    document.write(data);

// 2.chenge contact

// document.getElementById('heading').innerHTML= "hello world";

// document.getElementById('btn').onclick = function(){
//     document.getElementById('heading').innerHTML = "this is new contant "
// }

// 3. get Attribute

// let title = document.getElementById('heading').title;
// document.write(title)

// let title1 = document.getElementById('heading').getAttribute('title');
// document.write(title1);

// document.getElementById('btn').onclick = function(){
//     let cls = document.getElementById('heading').className;

//     document.write(cls);

    // let clsArray = cls.split(" ");
    // document.getElementById('output').innerHTML= clsArray[1];

    // let clsArray = cls.split(" ");
    // document.getElementById('output').innerHTML= clsArray[0];

    // let clsArray = cls.split(" ");
    // document.getElementById('output').innerHTML= clsArray.length;
// };

// 4. change Attribute value

// document.getElementById('heading').title = ' since 2022 ';

// document.getElementById('btn').onclick = function(){
//     document.getElementById('img').src ="https://cdn.pixabay.com/photo/2020/05/11/15/38/tom-5158824_960_720.png" ;
// }

// 5. add new attribute

// document.getElementById('img').setAttribute('src','https://cdn.pixabay.com/photo/2020/05/11/15/38/tom-5158824_960_720.png');


// 6.get css

// let val = document.getElementById('heading').style.backgroundColor;
// document.write(val);

// 7. set css / chenge css

// document.getElementById('btn').addEventListener('click', function(){

//     let h = document.getElementById('heading');
//     h.style.padding = '20px' ;
//     h.style.backgroundColor = 'yellowgreen';
//     h.style.color = 'red';
// });

// ==> EX : 1.   password  hide - show 

// document.addEventListener("click",function(){
//     let box = document.getElementById('box');

//     let current = box.getAttribute('type');

//     if( current=="password"){
//         box.setAttribute('type',"text");

//         document.getElementById('icon').className="fa-regular fa-eye-slash";
//     }

//     else{
//         box.setAttribute("type","password");
//         document.getElementById("icon").className = "fa-regular fa-eye"
//     }
// });


// EX : 2  image Hide / show

// let imgStatus = "display";

// document.getElementById('btn2').addEventListener("click",function(){
// let current = document.getElementById('img').style.display;

// if(imgStatus == "display"){
//     document.getElementById('img2').style.display = "none";

//     imgStatus = "none";
// }
// else{
//     document.getElementById('img2').style.display = "inline";

//     imgStatus = "display";

// }
// });

// EX : 3  ligth mode / Dark mode

// document.getElementById("ld").addEventListener("click", function(){
// let curr = document.body.getAttribute('data-theme');
// // alert(curr)
// if(curr=="light"){
//     document.body.setAttribute('data-theme = "dark"');
// }
// else{
//     document.body.setAttribute('data-theme = "light"');
// }
// });


                                         