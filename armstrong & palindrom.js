
// ** input one no and check no is polindrum or not


// let no = Number(prompt('enter no : '));
// let cno = no ;
// document.write("<br/> orignal no : "+ no); 

// let ans = 0;
// while(no>0){
//     let d=no%10;
//     ans = ( ans * 10)+ d;
//     no = Math.floor(no/10);
// }
// document.write("<br/> reverse no : " + ans);

// if(cno==ans){
//     document.write("<br/> "+ cno+" is palindrome no....! " );
// }
// else{
//     document.write("<br/> "+ cno+" is not palindrome no...! " );
// }

// ** list from 1 to n no palindrome no;

let number = Number( prompt('start  no1 : '));
let no2 = Number( prompt('end  no2 : '));

        document.write("palindrom number : ")
        var rem, temp, final = 0;
        for(let i=number;i<=no2;i++){
           
            temp = i;
            // let j =i;
            // while(i>0)
            // {
                rem = i%10;
                i = parseInt(i/10);
                final = final*10+rem;
            // }
           
            // else
            // {
            //     window.alert("The inputted number is not palindrome");
            // }
        }
        if(final==temp)
        {
            document.write(temp +',')		
        }


// for( let i= no1; i<=no2; i++ ){

//     let rev = 0;
//     let j = i; 

//     while(j>0){
//         let d = j % 10;
//         rev = ( rev * 10) + d;
        
//         j = math.floor (j / 10);

//     }
//     document.write(i + " , ")

//     if( rev == i){
//         document.write(i + " , ")
//     } 

// }

// ** list from 1 to n no armstrong no

// for(i=0; i<=200;i++){

// let num = i ;
// let sum = 0 ;
// let arm = num;
// var len  = num.toString().length;
// let power = 0;
// var check = num;

// while(num !=0){
//     arm = num % 10;
//     power = Math.pow(arm,length)
//     sum = sum + power
//     num = parseInt(num / 10);
// }

// if(check==sum){
//     document.write(check + "is armstrong <br/>")
// }
// else{
//     document.write(check + " is not armstrong  <br/>")
// }




// }

