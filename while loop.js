
// ** while loop


// p-1 simple while 

// let i=1;
// while(i<=10){
//     document.write("<br/>"+i)
//     i++;
// }

// p-2  infine while loop

// let i=1;
// while( true){
//     document.write("<br/>"+ i );
// }

// p-3 nested while loop

// let i=1;

// while(i<=10){
//     document.write("<br/>"+ i + " = ");

//     // inner while

//     let j=1;
//     while(j<=10){
//         document.write(" "+ j + " ");
//         j++;
//     }
//     i++;
// }

// input 1 no and reverse it.

// i/p = 125;
// output = 521;

// let no = Number(prompt('enter no : '));

// document.write("<br/> orignal no : "+ no);
// document.write("<br/> reverse no : ");

// while(no>0){
//     let d=no%10;
//     document.write(d);
//     no = Math.floor(no/10);
// }

// method 2

// i/p = 125;
// output = 521;

// let no = Number(prompt('enter no : '));
// let ans = 0 ;
// document.write("<br/> orignal no : "+ no); 

// while(no>0){
//     let d=no%10;
//     ans = ( ans * 10)+ d;
//     no = Math.floor(no/10);
// }
// document.write("<br/> reverse no : " + ans);


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

// ** input  one no and check no is armstrong or not.

// let no = Number(prompt('enter no : '));
// let cno = no ;
// document.write("<br/> orignal no : "+ no); 

// let ans = 0;
// while(no>0){
//     let d=no%10;
//     ans = ans + ( d * d * d);
//     no = Math.floor(no/10);
// }

// if(cno==ans){
//     document.write("<br/> "+ cno+" is armstrong no....! " );
// }
// else{
//     document.write("<br/> "+ cno+" is not armstrong no...! " );
// }


// ** list from 1 to n no palindrome no;

// let no1 = Number( prompt('start  no1 : '));
// let no2 = Number( prompt('end  no2 : '));

// document.write("palindrom number : ")

// fo4r( let i= no1; i<=no2; i++ ){

//     let rev = 0;
//     let j = i; 
//     while(j>0){
//         let d = j % 10;
//         rev = ( rev * 10) + d;
        
//         j = math.floor (j / 10);

//     }
//     if( rev == i){
//         document.write(i + " , ")
//     } 

// }



// ** do while loop **

// p-1 simple do while

// let i = 1 ;

// do{
//     document.write("<br/>"+ i);
//     i++;
// }while(i <= 10)
   
// p-2  nested  do while 

// let i = 1 ;
// do{
//     document.write("<br/>"+ i + " = ");

//     let j=1;

//     do{
//         document.write( " "+ j + " ");
//         j++;
//     }while(j<=10)


//     i++;
// }while(i <= 10)

// ** break; statment

// p-1 simple
// for( let i=1; i<=20 ;i++){
   
//     if(i>10){
//         break;    }
//     document.write("<br/>"+ i)
// }

// p-2 nested

// for( let i=1; i<=20 ;i++){
//    document.write("<br/>"+i+"=");

//    for( let j=1; j<=10 ; j++){
//     if(j==6){
//         break;   
//      }
//      document.write(" "+ j)
//    }
    
// } 

//  ** countinue statment

// p-1 simple
// for( let i=1; i<=20 ;i++){
   
//     if(i%4==0){
//         continue;   
//      }
//     document.write("<br/>"+ i)
// }
 

// p-2 nested

// for( let i=1; i<=20 ;i++){
//    document.write("<br/>"+i+"=");

//    for( let j=1; j<=10 ; j++){
//     if(j==8){
//         continue;  
//      }
//      document.write(" "+ j)
//    }
    
// } 

 

	   














