// patten 1 - 70

//  ptn - 1 - 7

/* 
       **ptn-1          **ptn-2           **ptn-3
                                                
       *                 1                 1
       * *               2 2               1 2 
       * * *             3 3 3             1 2 3
       * * * *           4 4 4 4           1 2 3 4 
       * * * * *         5 5 5 5 5         1 2 3 4 5
       [ * ]              [ i ]             [ j ]



*/
// ptn=1
 


// let no = Number(prompt('enter no: '));
2 
// for( let i=1 ; i<=no ; i++){
//     document.write("<br/>")
//     for(let j=1; j<=i; j++){
//         document.write(" "+ " * "+ " ");
//     }
// }

// ptn=2
 
// let no = Number(prompt('enter no: '));

// for( let i=1 ; i<=no ; i++){
//     document.write("<br/>")
//     for(let j=1; j<=i; j++){
//         document.write(" "+ i + " ");
//     }
// }

// ptn=3

// let no = Number(prompt('enter no: '));

// for( let i=1 ; i<=no ; i++){
//     document.write("<br/>")
//     for(let j=1; j<=i; j++){
//         document.write(" "+ j + " ");
//     }
// }

// ptn=4

//    01
//    02 03 
//    04 05 06 
//    07 08 09 10
//    11 12 13 14 15

// let no = Number(prompt('enter no: '));
// let c=1;
// for( let i=1 ; i<=no ; i++){
//     document.write("<br/>")
//     for(let j=1; j<=i; j++){
//         if(c<10){
//          document.write("0"+ c + " ");
//         }
//         else{
//             document.write(" "+ c + " ");
//         }
//         c++;
//     }
// }

// ptn=5                  ptn=6

// 1                      1
// 0 0                    1 0 
// 1 1 1                  1 0 1 
// 0 0 0 0                1 0 1 0 
// 1 1 1 1 1              1 0 1 0 1
// [i%2==1]                [j%2==1]


// let no = Number(prompt('enter no: '));
// for( let i=1 ; i<=no ; i++){
//     document.write("<br/>")
//     for(let j=1; j<=i; j++){
//         if(i%2==1){
//          document.write(" "+ 1 + " ");
//         }
//         else{
//             document.write(" "+ 0 + " ");
//         }
        
//     }
// }

// ptn=7              

// 1
// 0 1
// 0 1 0
// 1 0 1 0
// 1 0 1 0 1

// let no = Number(prompt('enter no: '));

// let c=1;
// for( let i=1 ; i<=no ; i++){
//     document.write("<br/>")
//     for(let j=1; j<=i; j++){
//         if(c%2==1){
//          document.write(" "+ 1 + " ");
//         }
//         else{
//             document.write(" "+ 0 + " ");
//         }
//         c++;
//     }
// }


// ptn - 8 - 14 reverse

// ptn = 8          ptn = 9            ptn = 10

// * * * * *        5 5 5 5 5           1 2 3 4 5
// * * * *          4 4 4 4             1 2 3 4
// * * *            3 3 3               1 2 3
// * *              2 2                 1 2 
// *                1                   1 

// [ * ]          [ i ]               [ j ]

// let no = Number(prompt('enter no: '));

// for( let i=no ; i>0 ; i--){
//     document.write("<br/>")
//     for(let j=1; j<=i; j++){
//         document.write(" " + " * "  + " ");
//     }
// }

// ptn = 11

// 01 02 03 04 05
// 06 07 08 09
// 10 11 12
// 13 14
// 15

// let no = Number(prompt('enter no: '));
// let c=1;
// for( let i=no ; i>0 ; i--){
//     document.write("<br/>")
//     for(let j=1; j<=i; j++){
//         if(c<10){
//          document.write("0"+ c + " ");
//         }
//         else{
//             document.write(" "+ c + " ");
//         }
//         c++;
//     }
// }

// ptn = 12               ptn = 13

// 1 1 1 1 1              1 0 1 0 1
// 0 0 0 0                1 0 1 0
// 1 1 1                  1 0 1 
// 0 0                    1 0
// 1                      1 

// [ i%2==1 ]              [ j%2==1]

// let no = Number(prompt('enter no: '));
// for( let i=no ; i>0 ; i--){
//     document.write("<br/>")
//     for(let j=1; j<=i; j++){
//         if(j%2==1){
//          document.write(" "+ 1 + " ");
//         }
//         else{
//             document.write(" "+ 0 + " ");
//         }
        
//     }
// }


// ptn = 14

// 1 0 1 0 1
// 0 1 0 1
// 0 1 0
// 1 0
// 1

// let no = Number(prompt('enter no: '));

// let c=1;
// for( let i=no ; i>0 ; i--){
//     document.write("<br/>")
//     for(let j=1; j<=i; j++){
//         if(c%2==1){
//          document.write(" "+ 1 + " ");
//         }
//         else{
//             document.write(" "+ 0 + " ");
//         }
//         c++;
//     }
// }

// ptn - 15 to 21

// ptn 15                    ptn 16                       ptn 17

// *                         1                            1
// * *                       2 2                          1 2
// * * *                     3 3 3                        1 2 3
// * * * *                   4 4 4 4                      1 2 3 4
// * * * * *                 5 5 5 5 5                    1 2 3 4 5
// * * * *                   4 4 4 4                      1 2 3 4    
// * * *                     3 3 3                        1 2 3   
// * *                       2 2                          1 2  
// *                         1                            1

// [ * ]                     [ i ]                         [ j ]  


// let no = Number(prompt('enter no: '));

// for( let i=1 ; i<no ; i++){
//     document.write("<br/>")
//     for(let j=1; j<=i; j++){
//         document.write(" "+ j + " ");
//     }
// }
// for( let i=no ; i>0 ; i--){
//     document.write("<br/>")
//     for(let j=1; j<=i; j++){
//         document.write(" " + j + " ");
//     }
// }


// ptn 18

// 01
// 02 03
// 04 05 06
// 07 08 09 10
// 11 12 13 14 15
// 16 17 18 19
// 20 21 22
// 23 24
// 25

// let no = Number(prompt('enter no: '));
// let c=1;
// for( let i=1 ; i<no ; i++){
//     document.write("<br/>")
//     for(let j=1; j<=i; j++){
//         if(c<10){
//          document.write("0"+ c + " ");
//         }
//         else{
//             document.write(" "+ c + " ");
//         }
//         c++;
//     }
// }
// for( let i=no ; i>0 ; i--){
//     document.write("<br/>")
//     for(let j=1; j<=i; j++){
//         if(c<10){
//          document.write("0"+ c + " ");
//         }
//         else{
//             document.write(" "+ c + " ");
//         }
//         c++;
//     }
// }


// ptn 19                      ptn 20

// 1                           1 
// 0 0                         1 0    
// 1 1 1                       1 0 1    
// 0 0 0 0                     1 0 1 0
// 1 1 1 1 1                   1 0 1 0 1
// 0 0 0 0                     1 0 1 0
// 1 1 1                       1 0 1
// 0 0                         1 0
// 1                           1    

// [ i%2==1]                   [ j%2==1]

// let no = Number(prompt('enter no: '));
// for( let i=1 ; i<no ; i++){
//     document.write("<br/>")
//     for(let j=1; j<=i; j++){
//         if(j%2==1){
//          document.write(" "+ 1 + " ");
//         }
//         else{
//             document.write(" "+ 0 + " ");
//         }
        
//     }
// }
// for( let i=no ; i>0 ; i--){
//     document.write("<br/>")
//     for(let j=1; j<=i; j++){
//         if(j%2==1){
//          document.write(" "+ 1 + " ");
//         }
//         else{
//             document.write(" "+ 0 + " ");
//         }
        
//     }
// }

// ptn 21

// 1
// 0 1
// 0 1 0
// 1 0 1 0
// 1 0 1 0 1
// 0 1 0 1
// 0 1 0
// 1 0
// 1

// let no = Number(prompt('enter no: '));

// let c=1;
// for( let i=1 ; i<no ; i++){
//     document.write("<br/>")
//     for(let j=1; j<=i; j++){
//         if(c%2==1){
//          document.write(" "+ 1 + " ");
//         }
//         else{
//             document.write(" "+ 0 + " ");
//         }
//         c++;
//     }
// }
// for( let i=no ; i>0 ; i--){
//     document.write("<br/>")
//     for(let j=1; j<=i; j++){
//         if(c%2==1){
//          document.write(" "+ 1 + " ");
//         }
//         else{
//             document.write(" "+ 0 + " ");
//         }
//         c++;
//     }
// }


// ph-1

// 15 14 13 12 11
// 10 09 08 07
// 06 05 04
// 03 02
// 01



// let no = Number(prompt('enter no: '));

// let find = (no * (no + 1) / 2);
// for (let i = no; i > 0; i--) {
//     for (let j = 1; j <= i; j++) {
//         if(find<10){
//             document.write("0"+ find + " ");
//         }
//         else{
//             document.write(" "+ find + " ");
//         }
//         find--;
//     }
//      document.write("<br/>")
// }





// ph-2

// 15
// 14 13 
// 12 11 10
// 09 08 07 06
// 05 04 03 02 01

// let no = Number(prompt('enter no: '));
// let find = (no * (no + 1) / 2);
// for( let i=1 ; i<=no ; i++){
//     for(let j=1; j<=i; j++){1++
//         if(find<10){
//          document.write("0"+ find + " ");
//         }
//         else{
//             document.write(" "+ find + " ");
//         }
//         find--;
//     }
//     document.write("<br/>")
// }

//ptn 22 to 28

// ptn 22                     ptn 23                 ptn 24

//          *                     1                         1
//        * *                   2 2                       1 2
//      * * *                 3 3 3                     1 2 3
//    * * * *               4 4 4 4                   1 2 3 4
//  * * * * *             5 5 5 5 5                 1 2 3 4 5 

//     [ * ]                [ i ]                      [ j ] 


// let no = Number(prompt('enter no : '));

// for( let i=1; i<=no ; i++){
//        document.write("<br/>");

//        for( let k=1; k<=no-i ; k++){
//               document.write(" " + "&nbsp;&nbsp;" + " " );
//        }

//        for( let j=1 ; j<=i ; j++){
//               document.write(" "+ j +" ");
//        }

// }           

// ptn 25

//             01
//          02 03
//       04 05 06
//    07 08 09 10
// 11 12 13 14 15

// let no = Number(prompt('enter no: '));
// let c=1;
// for( let i=1 ; i<=no ; i++){
//     document.write("<br/>")

//     for( let k=1; k<=no-i ; k++){
//            document.write(" " + "&nbsp;&nbsp;&nbsp;&nbsp;" + " " );
//         }
//     for(let j=1; j<=i; j++){
//         if(c<10){
//          document.write("0"+ c + " ");
//         }
//         else{
//             document.write(" "+ c + " ");
//         }
//         c++;
//     }
// }


// ptn 26                               ptn 27

//           1                                 1
//         0 0                               1 0
//       1 1 1                             1 0 1 
//     0 0 0 0                           1 0 1 0
//   1 1 1 1 1                         1 0 1 0 1 

//    [ i%2==1 ]                        [ j%2==1 ]


// let no = Number(prompt('enter no: '));
// for( let i=1 ; i<=no ; i++){
//     document.write("<br/>")

//     for( let k=1; k<=no-i ; k++){
//        document.write(" " + "&nbsp;&nbsp;" + " " );
//        }

//     for(let j=1; j<=i; j++){
//         if(j%2==1){
//          document.write(" "+ 1 + " ");
//         }
//         else{
//             document.write(" "+ 0 + " ");
//         }
        
//     }
// }


// ptn 28

//         1
//       0 1
//     0 1 0
//   1 0 1 0
// 1 0 1 0 1


// let no = Number(prompt('enter no: '));

// let c=1;
// for( let i=1 ; i<=no ; i++){
//     document.write("<br/>")

//     for( let k=1; k<=no-i ; k++){
//        document.write(" " + "&nbsp;&nbsp;" + " " );
//        }

//     for(let j=1; j<=i; j++){
//         if(c%2==1){
//          document.write(" "+ 1 + " ");
//         }
//         else{
//             document.write(" "+ 0 + " ");
//         }
//         c++;
//     }
// }

// ptn = 29 to 35

// ptn 29                      ptn 30                   ptn 31

//   * * * * *                 5 5 5 5 5                1 2 3 4 5  
//     * * * *                   4 4 4 4                  1 2 3 4 
//       * * *                     3 3 3                    1 2 3 
//         * *                       2 2                      1 2  
//           *                         1                        1 
//         [ * ]                     [ i ]                    [ j ] 


// let no = Number(prompt('enter no : '));

// for( let i=no; i>0 ; i--){
//        document.write("<br/>");

//        for( let k=1; k<=no-i ; k++){
//               document.write(" " + "&nbsp;&nbsp;" + " " );
//        }

//        for( let j=1 ; j<=i ; j++){
//               document.write(" "+ j +" ");
//        }

// } 

// ptn 32

// 01 02 03 04 05
//    06 07 08 09
//       10 11 12
//          13 14
//             15

// let no = Number(prompt('enter no: '));
// let c=1;
// for( let i=no ; i>0 ; i--){
//     document.write("<br/>")

//     for( let k=1; k<=no-i ; k++){
//            document.write(" " + "&nbsp;&nbsp;&nbsp;&nbsp;" + " " );
//         }
//     for(let j=1; j<=i; j++){
//         if(c<10){
//          document.write("0"+ c + " ");
//         }
//         else{
//             document.write(" "+ c + " ");
//         }
//         c++;
//     }
// }

// ptn 33                     ptn 34

// 1 1 1 1 1                  1 0 1 0 1
//   0 0 0 0                    1 0 1 0
//     1 1 1                      1 0 1 
//       0 0                        1 0 
//         1                          1          

// [i%2==1]                        [ j%2==1]


// let no = Number(prompt('enter no: '));
// for( let i=no ; i>0 ; i--){
//     document.write("<br/>");

//     for( let k=1; k<=no-i ; k++){
//        document.write(" " + "&nbsp;&nbsp;" + " " );
//        }

//     for(let j=1; j<=i; j++){
//         if(j%2==1){
//          document.write(" "+ 1 + " ");
//         }
//         else{
//             document.write(" "+ 0 + " ");
//         }
        
//     }
// }

// ptn 35

// 1 0 1 0 1
//   0 1 0 1
//     0 1 0
//       1 0
//         1


// let no = Number(prompt('enter no: '));

// let c=1;
// for( let i=no ; i>0 ; i--){
//     document.write("<br/>")

//     for( let k=1; k<=no-i ; k++){
//        document.write(" " + "&nbsp;&nbsp;" + " " );
//        }

//     for(let j=1; j<=i; j++){
//         if(c%2==1){
//          document.write(" "+ 1 + " ");
//         }
//         else{
//             document.write(" "+ 0 + " ");
//         }
//         c++;
//     }
// }

// ptn 36 to 42

// ptn 36                     ptn 37                 ptn 38

//          *                     1                         1
//        * *                   2 2                       1 2
//      * * *                 3 3 3                     1 2 3
//    * * * *               4 4 4 4                   1 2 3 4
//  * * * * *             5 5 5 5 5                 1 2 3 4 5 
//    * * * *               4 4 4 4                   1 2 3 4 
//      * * *                 3 3 3                     1 2 3 
//        * *                   2 2                       1 2  
//          *                     1                         1 

//          [ * ]                [ i ]                      [ j ] 


// let no = Number(prompt('enter no : '));

// for( let i=1; i<no ; i++){
//        document.write("<br/>");

//        for( let k=1; k<=no-i ; k++){
//               document.write(" " + "&nbsp;&nbsp;" + " " );
//        }

//        for( let j=1 ; j<=i ; j++){
//               document.write(" "+ j +" ");
//        }

// } 
// for( let i=no; i>0 ; i--){
//        document.write("<br/>");

//        for( let k=1; k<=no-i ; k++){
//               document.write(" " + "&nbsp;&nbsp;" + " " );
//        }

//        for( let j=1 ; j<=i ; j++){
//               document.write(" "+ j +" ");
//        }

// } 

// ptn 39

//             01
//          02 03
//       04 05 06
//    07 08 09 10
// 11 12 13 14 15
//    16 17 18 19
//       20 21 22
//          23 24
//             25


// let no = Number(prompt('enter no: '));
// let c=1;
// for( let i=1 ; i<no ; i++){
//     document.write("<br/>")

//     for( let k=1; k<=no-i ; k++){
//            document.write(" " + "&nbsp;&nbsp;&nbsp;&nbsp;" + " " );
//         }
//     for(let j=1; j<=i; j++){
//         if(c<10){
//          document.write("0"+ c + " ");
//         }
//         else{
//             document.write(" "+ c + " ");
//         }
//         c++;
//     }
// }
// for( let i=no ; i>0 ; i--){
//     document.write("<br/>")

//     for( let k=1; k<=no-i ; k++){
//            document.write(" " + "&nbsp;&nbsp;&nbsp;&nbsp;" + " " );
//         }
//     for(let j=1; j<=i; j++){
//         if(c<10){
//          document.write("0"+ c + " ");
//         }
//         else{
//             document.write(" "+ c + " ");
//         }
//         c++;
//     }
// }


// ptn 40                                ptn 41

//           1                                 1
//         0 0                               1 0
//       1 1 1                             1 0 1 
//     0 0 0 0                           1 0 1 0
//   1 1 1 1 1                         1 0 1 0 1 
//     0 0 0 0                           1 0 1 0
//       1 1 1                             1 0 1 
//         0 0                               1 0 
//           1                                 1 

//      [ i%2==1 ]                          [ j%2==1 ]

// let no = Number(prompt('enter no: '));

// for( let i=1 ; i<no ; i++){
//     document.write("<br/>")

//     for( let k=1; k<=no-i ; k++){
//        document.write(" " + "&nbsp;&nbsp;" + " " );
//        }

//     for(let j=1; j<=i; j++){
//         if(j%2==1){
//          document.write(" "+ 1 + " ");
//         }
//         else{
//             document.write(" "+ 0 + " ");
//         }
        
//     }
// }
// for( let i=no ; i>0 ; i--){
//     document.write("<br/>");

//     for( let k=1; k<=no-i ; k++){
//        document.write(" " + "&nbsp;&nbsp;" + " " );
//        }

//     for(let j=1; j<=i; j++){
//         if(j%2==1){
//          document.write(" "+ 1 + " ");
//         }
//         else{
//             document.write(" "+ 0 + " ");
//         }
        
//     }
// }


// ptn 42

//         1
//       0 1
//     0 1 0
//   1 0 1 0
// 1 0 1 0 1
//   0 1 0 1
//     0 1 0
//       1 0
//         1


// let no = Number(prompt('enter no: '));

// let c=1;
// for( let i=1 ; i<no ; i++){
//     document.write("<br/>")

//     for( let k=1; k<=no-i ; k++){
//        document.write(" " + "&nbsp;&nbsp;" + " " );
//        }

//     for(let j=1; j<=i; j++){
//         if(c%2==1){
//          document.write(" "+ 1 + " ");
//         }
//         else{
//             document.write(" "+ 0 + " ");
//         }
//         c++;
//     }
// }
// for( let i=no ; i>0 ; i--){
//     document.write("<br/>")

//     for( let k=1; k<=no-i ; k++){
//        document.write(" " + "&nbsp;&nbsp;" + " " );
//        }

//     for(let j=1; j<=i; j++){
//         if(c%2==1){
//          document.write(" "+ 1 + " ");
//         }
//         else{
//             document.write(" "+ 0 + " ");
//         }
//         c++;
//     }
// }

// ptn 43 to 49


// ptn  43                           ptn  44                         ptn  45

//          *                            1                                1
//        * * *                        2 2 2                            1 1 2
//      * * * * *                    3 3 3 3 3                        1 2 1 2 3
//    * * * * * * *                4 4 4 4 4 4 4                    1 2 3 1 2 3 4
//  * * * * * * * * *            5 5 5 5 5 5 5 5 5                1 2 3 4 1 2 3 4 5

//     [ * ]                           [ i ]                             [ j ] 


// let no = Number(prompt('enter no : '));

// for( let i=1; i<=no ; i++){
//        document.write("<br/>");

//        for( let k=1; k<=no-i ; k++){
//               document.write(" " + "&nbsp;&nbsp;" + " " );
//        }

//        for( let j=1 ; j<i ; j++){
//               document.write(" "+ j +" ");
//        }

//        for( let l=1 ; l<=i ; l++){
//               document.write(" "+ l +" ");
//        }


// } 

// ptn 46

//             01
//          02 03 04
//       05 06 07 08 09
//    10 11 12 13 14 15 16
// 17 18 19 20 21 22 23 24 25



// let no = Number(prompt('enter no: '));
// let c=1;
// for( let i=1 ; i<=no ; i++){
//     document.write("<br/>")

//     for( let k=1; k<=no-i ; k++){
//            document.write(" " + "&nbsp;&nbsp;&nbsp;&nbsp;" + " " );
//         }
//     for(let j=1; j<i; j++){
//         if(c<10){
//          document.write("0"+ c + " ");
//         }
//         else{
//             document.write(" "+ c + " ");
//         }
//         c++;
//     }
//     for( let l=1 ; l<=i ; l++){
//        if(c<10){
//               document.write("0"+ c + " ");
//        }
//        else{
//               document.write(" "+ c + " ");
//        }
//        c++;
//        }
// }

// ptn 47                               ptn 48

//       1                                 1
//     0 0 0                             1 1 0
//   1 1 1 1 1                         1 0 1 0 1
// 0 0 0 0 0 0 0                     1 0 1 1 0 1 0     

//    [ i%2==1]                      [ i%2==1] [ l%2==1]         



// let no = Number(prompt('enter no: '));

// for( let i=1 ; i<no ; i++){
//     document.write("<br/>")

//     for( let k=1; k<=no-i ; k++){
//        document.write(" " + "&nbsp;&nbsp;" + " " );
//        }

//     for(let j=1; j<i; j++){
//         if(j%2==1){
//          document.write(" "+ 1 + " ");
//         }
//         else{
//             document.write(" "+ 0 + " ");
//         }

//        }
//     for(let l=1; l<=i; l++){
//        if(l%2==1){
//         document.write(" "+ 1 + " ");
//        }
//        else{
//            document.write(" "+ 0 + " ");
//        }
        
//     }

// }


// ptn 49


//       1
//     0 1 0
//   1 0 1 0 1
// 0 1 0 1 0 1 0



// let no = Number(prompt('enter no: '));

// let c=1;
// for( let i=1 ; i<no ; i++){
//     document.write("<br/>")

//     for( let k=1; k<=no-i ; k++){
//        document.write(" " + "&nbsp;&nbsp;" + " " );
//        }

//     for(let j=1; j<i; j++){
//         if(c%2==1){
//          document.write(" "+ 1 + " ");
//         }
//         else{
//             document.write(" "+ 0 + " ");
//         }
//         c++;
//     }
    
//     for(let l=1; l<=i; l++){
//        if(c%2==1){
//         document.write(" "+ 1 + " ");
//        }
//        else{
//            document.write(" "+ 0 + " ");
//        }
//        c++;
//    }
// }

// ptn =  50 to 56

//      ptn 50                           ptn 52                           ptn 51
 
// * * * * * * * * *                1 2 3 4 1 2 3 4 5                5 5 5 5 5 5 5 5 5
//   * * * * * * *                    1 2 3 1 2 3 4                    4 4 4 4 4 4 4
//     * * * * *                        1 2 1 2 3                         3 3 3 3 3     
//       * * *                            1 1 2                             2 2 2
//         *                                1                                 1

//        [ * ]                           [ j ]                             [ i ]     


// let no = Number(prompt('enter no : '));

// for( let i=no; i>0 ; i--){
//        document.write("<br/>");

//        for( let k=1; k<=no-i ; k++){
//               document.write(" " + "&nbsp;&nbsp;" + " " );
//        }

//        for( let j=1 ; j<i ; j++){
//               document.write(" "+ i +" ");
//        }

//        for( let l=1 ; l<=i ; l++){
//               document.write(" "+ i +" ");
//        }


// } 

// ptn 53

// 01 02 03 04 05 06 07 08 09
//    10 11 12 13 14 15 16
//       17 18 19 20 21
//          22 23 24
//             25


// let no = Number(prompt('enter no: '));
// let c=1;
// for( let i=no ; i>0 ; i--){
//     document.write("<br/>")

//     for( let k=1; k<=no-i ; k++){
//            document.write(" " + "&nbsp;&nbsp;&nbsp;&nbsp;" + " " );
//         }
//     for(let j=1; j<i; j++){
//         if(c<10){
//          document.write("0"+ c + " ");
//         }
//         else{
//             document.write(" "+ c + " ");
//         }
//         c++;
//     }
//     for( let l=1 ; l<=i ; l++){
//        if(c<10){
//               document.write("0"+ c + " ");
//        }
//        else{
//               document.write(" "+ c + " ");
//        }
//        c++;
//        }
// }

//             ptn 54                           ptn 55

//         1 1 1 1 1 1 1 1 1                 1 0 1 0 1 0 1 0 1
//           0 0 0 0 0 0 0                     1 0 1 1 0 1 0
//             1 1 1 1 1                         1 0 1 0 1
//               0 0 0                             1 1 0
//                 1                                 1

//             [ i%2==1 ]                    [ j%2==1 ] [ l%2==1 ]


   
// let no = Number(prompt('enter no: '));

// for( let i=no ; i>0 ; i--){
//     document.write("<br/>")

//     for( let k=1; k<=no-i ; k++){
//        document.write(" " + "&nbsp;&nbsp;" + " " );
//        }

//     for(let j=1; j<i; j++){
//         if(i%2==1){
//          document.write(" "+ 1 + " ");
//         }
//         else{
//             document.write(" "+ 0 + " ");
//         }

//        }
//     for(let l=1; l<=i; l++){
//        if(i%2==1){
//         document.write(" "+ 1 + " ");
//        }
//        else{
//            document.write(" "+ 0 + " ");
//        }
        
//     }

// }

// ptn 56

// 1 0 1 0 1 0 1 0 1
//   0 1 0 1 0 1 0
//     1 0 1 0 1
//       0 1 0
//         1


// let no = Number(prompt('enter no: '));

// let c=1;
// for( let i=no ; i>0 ; i--){
//     document.write("<br/>")

//     for( let k=1; k<=no-i ; k++){
//        document.write(" " + "&nbsp;&nbsp;" + " " );
//        }

//     for(let j=1; j<i; j++){
//         if(c%2==1){
//          document.write(" "+ 1 + " ");
//         }
//         else{
//             document.write(" "+ 0 + " ");
//         }
//         c++;
//     }
    
//     for(let l=1; l<=i; l++){
//        if(c%2==1){
//         document.write(" "+ 1 + " ");
//        }
//        else{
//            document.write(" "+ 0 + " ");
//        }
//        c++;
//    }
// }


// ptn 57 to 63

//       ptn 57                        ptn 58                          ptn 59

//          *                            1                                1
//        * * *                        2 2 2                            1 1 2
//      * * * * *                    3 3 3 3 3                        1 2 1 2 3
//    * * * * * * *                4 4 4 4 4 4 4                    1 2 3 1 2 3 4
//  * * * * * * * * *            5 5 5 5 5 5 5 5 5                1 2 3 4 1 2 3 4 5
//    * * * * * * *                4 4 4 4 4 4 4                    1 2 3 1 2 3 4
//      * * * * *                    3 3 3 3 3                        1 2 1 2 3      
//        * * *                        2 2 2                            1 1 2 
//          *                            1                                1

//     [ * ]                           [ i ]                             [ j ] 


// let no = Number(prompt('enter no : '));

// for( let i=1; i<no ; i++){
//        document.write("<br/>"); 

//        for( let k=1; k<=no-i ; k++){
//               document.write(" " + "&nbsp;&nbsp;" + " " );
//        }

//        for( let j=1 ; j<i ; j++){
//               document.write(" "+ "*" +" ");
//        }

//        for( let l=1 ; l<=i ; l++){
//               document.write(" "+ "*" +" ");
//        }


// } 
// for( let i=no; i>0 ; i--){
//        document.write("<br/>");

//        for( let k=1; k<=no-i ; k++){
//               document.write(" " + "&nbsp;&nbsp;" + " " );
//        }

//        for( let j=1 ; j<i ; j++){
//               document.write(" "+ "*" +" ");
//        }

//        for( let l=1 ; l<=i ; l++){
//               document.write(" "+ "*" +" ");
//        }


// } 

// ptn 60



//             01
//          02 03 04
//       05 06 07 08 09
//    10 11 12 13 14 15 16
// 17 18 19 20 21 22 23 24 25
//    26 27 28 29 30 31 32
//       33 34 35 36 37
//          38 39 40
//             41



// let no = Number(prompt('enter no: '));
// let c=1;
// for( let i=1 ; i<no ; i++){
//     document.write("<br/>")

//     for( let k=1; k<=no-i ; k++){
//            document.write(" " + "&nbsp;&nbsp;&nbsp;&nbsp;" + " " );
//         }
//     for(let j=1; j<i; j++){
//         if(c<10){
//          document.write("0"+ c + " ");
//         }
//         else{
//             document.write(" "+ c + " ");
//         }
//         c++;
//     }
//     for( let l=1 ; l<=i ; l++){
//        if(c<10){
//               document.write("0"+ c + " ");
//        }
//        else{
//               document.write(" "+ c + " ");
//        }
//        c++;
//        }
// }

// for( let i=no ; i>0 ; i--){
//     document.write("<br/>")

//     for( let k=1; k<=no-i ; k++){
//            document.write(" " + "&nbsp;&nbsp;&nbsp;&nbsp;" + " " );
//         }
//     for(let j=1; j<i; j++){
//         if(c<10){
//          document.write("0"+ c + " ");
//         }
//         else{
//             document.write(" "+ c + " ");
//         }
//         c++;
//     }
//     for( let l=1 ; l<=i ; l++){
//        if(c<10){
//               document.write("0"+ c + " ");
//        }
//        else{
//               document.write(" "+ c + " ");
//        }
//        c++;
//        }
// }


//           ptn 61                              ptn 62

//                 1                                 1
//               0 0 0                             1 1 0
//             1 1 1 1 1                         1 0 1 0 1
//           0 0 0 0 0 0 0                     1 0 1 1 0 1 0  
//         1 1 1 1 1 1 1 1 1                 1 0 1 0 1 0 1 0 1
//           0 0 0 0 0 0 0                     1 0 1 1 0 1 0
//             1 1 1 1 1                         1 0 1 0 1
//               0 0 0                             1 1 0
//                 1                                 1

//             [ i%2==1 ]                    [ j%2==1 ] [ l%2==1 ]         


// let no = Number(prompt('enter no: '));

// for( let i=1 ; i<no ; i++){
//     document.write("<br/>")

//     for( let k=1; k<=no-i ; k++){
//        document.write(" " + "&nbsp;&nbsp;" + " " );
//        }

//     for(let j=1; j<i; j++){
//         if(j%2==1){
//          document.write(" "+ 1 + " ");
//         }
//         else{
//             document.write(" "+ 0 + " ");
//         }

//        }
//     for(let l=1; l<=i; l++){
//        if(l%2==1){
//         document.write(" "+ 1 + " ");
//        }
//        else{
//            document.write(" "+ 0 + " ");
//        }
        
//     }

// }

// for( let i=no ; i>0 ; i--){
//     document.write("<br/>")

//     for( let k=1; k<=no-i ; k++){
//        document.write(" " + "&nbsp;&nbsp;" + " " );
//        }

//     for(let j=1; j<i; j++){
//         if(j%2==1){
//          document.write(" "+ 1 + " ");
//         }
//         else{
//             document.write(" "+ 0 + " ");
//         }

//        }
//     for(let l=1; l<=i; l++){
//        if(l%2==1){
//         document.write(" "+ 1 + " ");
//        }
//        else{
//            document.write(" "+ 0 + " ");
//        }
        
//     }

// }

// ptn 63

//         1
//       0 1 0
//     1 0 1 0 1
//   0 1 0 1 0 1 0
// 1 0 1 0 1 0 1 0 1
//   0 1 0 1 0 1 0
//     1 0 1 0 1
//       0 1 0
//         1


// let no = Number(prompt('enter no: '));

// let c=1;
// for( let i=1 ; i<no ; i++){
//     document.write("<br/>")

//     for( let k=1; k<=no-i ; k++){
//        document.write(" " + "&nbsp;&nbsp;" + " " );
//        }

//     for(let j=1; j<i; j++){
//         if(c%2==1){
//          document.write(" "+ 1 + " ");
//         }
//         else{
//             document.write(" "+ 0 + " ");
//         }
//         c++;
//     }
    
//     for(let l=1; l<=i; l++){
//        if(c%2==1){
//         document.write(" "+ 1 + " ");
//        }
//        else{
//            document.write(" "+ 0 + " ");
//        }
//        c++;
//    }
// }

// for( let i=no ; i>0 ; i--){
//     document.write("<br/>")

//     for( let k=1; k<=no-i ; k++){
//        document.write(" " + "&nbsp;&nbsp;" + " " );
//        }

//     for(let j=1; j<i; j++){
//         if(c%2==1){
//          document.write(" "+ 1 + " ");
//         }
//         else{
//             document.write(" "+ 0 + " ");
//         }
//         c++;
//     }
    
//     for(let l=1; l<=i; l++){
//        if(c%2==1){
//         document.write(" "+ 1 + " ");
//        }
//        else{
//            document.write(" "+ 0 + " ");
//        }
//        c++;
//    }
// }

// ptn 64

// $ $ $ $ $
// $       $
// $       $
// $       $
// $ $ $ $ $

// let no = Number(prompt('enter No : '));

// for( i=1; i<=no; i++){
//        document.write("<br/>"); 

//        for( j=1; j<=no; j++){
//               if(i==1 || i==no || j==1 || j==no){
//                      document.write(" "+ "$"+ " ");
//               }
//               else{
//                      document.write(" "+ "&nbsp;&nbsp;"+ " ");
//               }
//        }
// }

// ptn 65

// $        $
//    $   $   
//      $     
//    $   $   
//  $        $


// let no = Number(prompt('enter No : '));
// let k=no;
// for( let i=1; i<=no; i++){
//        document.write("<br/>"); 
      
//        for( let j=1; j<=no; j++){
//               if(i==j || j==k ){
//                      document.write(" "+ "$"+ " ");
//               }
//               else{
//                      document.write(" "+ "&nbsp;&nbsp;"+ " ");
//               }
//        }
//        k--;
// }


// p-1 swapping value

// no1=10          no2=20
// no1=20          no2=10

//  let no1 = 10;
//  let no2 = 20;

//  document.write( "Befor swapping No1 = " + no1 +" No2 = " + no2);
// // logic 1

// // let t = no1;
// // //      [10]
// //    no1 = no2;
// // // [10]= [20]  
// //    no2 = t;
// // // [20] = [10] 

// // logic 2

// // no1 = no1 + no2;
// // no2 = no1- no2;
// // no1 = no1- no2;


//  document.write( "<br/> After swapping No1 = " + no1 + " No2 = " + no2);



// p-2 fibonacci series : 0 ,1 ,1 ,2,3,5,8,13,21,34....


// let no = Number(prompt('enter No: '));

// let a = 1;
// let b = 1;
// let c = 0;
// document.write("fibbomaci series: ")

// for( i=1;i<=no;i++){
//        document.write(c + ",");

//        a = b;
//        b = c;
//        c = a + b;
// }


// p-3     print table frome n to n

// let start_no = Number(prompt('enter Starting No : '));
// let end_no = Number(prompt('enter ending No : '));

// let c=0;
// document.write("<table border='1' > <tr>")
// for(let i=start_no ; i<=end_no ; i++){
//     c++;
//     if(c>5){
//         document.write("</tr><tr>");
//         c=0;
//     }

//        document.write("<td><h4> Table of "+ i +"</h4>");
//        for( let j=1 ; j<=10; j++){
//               document.write("<br/>"+i+"%"+j+"="+(i*j));
//        }
//        document.write("</td>");
// }
// document.write("</tr></table>");
 


// ph-3

//    * *   * *
//    *       *   

//    *       *
//    * *   * *

// let no = Number(prompt('enter No : '));

// for( i=1; i<=no; i++){
//        document.write("<br/>"); 

//        for( j=1; j<=no; j++){
//               if( i==1 || i==no || j==1 || j==no ){
//                      if(j==3 || i==3){
//                             document.write(" "+ "&nbsp;&nbsp;"+ " ");    
//                      }
//                     else{
//                      document.write(" "+ "$" + " ");
//                     }
//               }
//               else{
//                      document.write(" "+ "&nbsp;&nbsp;"+ " ");

//               }
//        }
// }

// ph-4

//       * * * * *
//       * *   * *
//       *       *


// let no = Number(prompt('enter no: '));

// for( let i=no ; i>0 ; i--){
//     document.write("<br/>")
//     for(let j=1; j<=i; j++){
//         document.write(" " + " * "  + " ");
//     }
//     for( let k=1; k<=no-i ; k++){
//               document.write(" " + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + " " );
//        }

//        for( let j=1 ; j<=i ; j++){
//               document.write(" "+ " * " +" ");
//        }
// }

// ph-5

// 15
// 13 14
// 10 11 12
// 06 07 08 09
// 01 02 03 04 05 


// let no = Number(prompt("enter no : "));

// for( let i=1;i<=5;i++){
//     for(let j=1 ; j<=i ; j++){
//         if(no<10 ){
//             document.write("0"+ no + " ");
//             }     
//             else{
//                 document.write(" "+ no + " ");
//             }
        
//         if(j<i){
//             no++
            
//         }
       
//     }
//     document.write("<br/>")

//     no = no -(i*2);
// }