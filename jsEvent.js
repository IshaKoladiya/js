
// js Event

// 1. By using Html

function datetime(){
    let d = new Date();
    document.getElementById('output').innerHTML = d.toLocaleString();
} 

// 2 . By using Javascript DOM

// method - 1
// document.getElementById('dt').onclick = datetime;

// method - 2
// document.getElementById('dt').onclick = function(){
//     datetime();
// };

// method 3
// document.getElementById('dt').onclick = function(){
//     let d = new Date();
//     document.getElementById('output').innerHTML = d.toLocaleString();
// };

// 3. by using javascript addeventlistener();

// method 1
// document.getElementById('mybtn2').addEventListener("click",function(){
//     alert('click by addeventlistener');
// });

// method 2
// document.getElementById('dt2').addEventListener("click",function(){
//     let d = new Date();
//     document.getElementById('output').innerHTML = d.toLocaleString();
// });

// method 3 

// document.getElementById('dt2').addEventListener("click",function(){
 
// datetime();

// });

// ** List of event

// 1. mouse event

// >> onclick

// document.getElementById('mybtn').addEventListener("click" , function(){
//     document.getElementById('output').innerHTML = " onclick Event "
// });

// >> ondblclick

// document.getElementById('mybtn').addEventListener("dblclick" , function(){
//     document.getElementById('output').innerHTML = "dbclick Event";
// });

// >> oncontextmenu

// document.getElementById('mybtn').addEventListener("contextmenu" , function(){
//     document.getElementById('output').innerHTML = "contextmenu Event";
// });

// >> onmouseover

// document.getElementById('mybtn').addEventListener("mouseover" , function(){
//     document.getElementById('output').innerHTML = "mouseover Event";
// });

// >> onmouseout

// document.getElementById('mybtn').addEventListener("mouseout" , function(){
//     document.getElementById('output').innerHTML = "mouseout Event";
// });

// >> onmousemove

// document.getElementById('mybtn').addEventListener("mousemove" , function(){
//     document.getElementById('output').innerHTML = "mousemove Event";
// });

// >> onmousedown

// document.getElementById('mybtn').addEventListener("mousedown" , function(){
//     document.getElementById('output').innerHTML = "mousedown Event";
// });

// >> onmouseup

// document.getElementById('mybtn').addEventListener("mouseup" , function(){
//     document.getElementById('output').innerHTML = "mousedown Event";
// });

// **2. keyboard Event

// // onkeypress

// document.getElementById('val').addEventListener("keypress" , function(){
//     document.getElementById('output').innerHTML = " Key Press";
// });

// onkeydown

// document.getElementById('val').addEventListener("keydown" , function(){
//     document.getElementById('output').innerHTML = " Key down";
// });

// onkeyup
// document.getElementById('val').addEventListener("keyup" , function(){
//     document.getElementById('output').innerHTML = " Key up";
// });

// **3. formevent

//  onfocus

// document.getElementById('val').addEventListener("focus" , function(){
//     document.getElementById('output').innerHTML = " control get focus";
// });

// onblur
// document.getElementById('val').addEventListener("blur" , function(){
//     document.getElementById('output').innerHTML = " control get blur";
// });

// onchange
document.getElementById('city').addEventListener("change" , function(){
    document.getElementById('output').innerHTML = " value change";
});

// onsubmit
// document.getElementById('myform').addEventListener("submit" , function(){
//     document.getElementById('output').innerHTML = " form submit";
// });

// 4. **browser

// // onload
// window.addEventListener('load',function(){
//     alert('Load sucess')
// });

// onunload
// window.addEventListener('unload',function(){
//     alert('unLoad sucess')
// });

// onresize
// window.addEventListener('resize',function(){
//     alert('resize sucess')
// });


