
//  EX:1 

// document.getElementById('data').addEventListener('keyup', function(){
//     let data = document.getElementById('data').value;
// // alert(data)
// let ptn = /^[a-zA-Z ]+$/;
// if(ptn.test(data)){
//     document.getElementById('data').style.cssText = "outline:2px solid green";
// }
// else{
//     document.getElementById('data').style.cssText = "outline:2px solid red";
// }

// });

// EX : 2


document.getElementById('btn').addEventListener('click', function(){
    // alert()
    let data = document.getElementById('Email').value;
   // alert(data.length);

if(data.length == 0){ 
    document.getElementById('msg').innerHTML = 'pleace Enter Email';
}
else{
    let ptn = /^[a-zA-Z0-9 ]+[@][a-zA-Z]{3,7}[.][a-zA-Z]{2,5}$/;
    //  ishakoladiya111@gmail.com

    if(data.match(ptn)){
        
        document.getElementById('msg').innerHTML = 'Thank your Ragistration';
        document.getElementById('Email').value = " ";
    }
    else{
        document.getElementById('msg').innerHTML = 'pleace Enter valid Email';
    }
}
});

