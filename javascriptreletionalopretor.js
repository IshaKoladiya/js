
// 1. == ( eual to) - [ it only compare value]

// let no1 = 10;
// let no2 = 10;
// document.write("<br/> " + (no1 == no2));
// let no3 = "10";
// document.write("<br/> " + (no1 == no3));
// let no4 = 50;
// document.write("<br/> " + (no1 == no4));



// 2. === ( double eual to) - [ it only compare value]

// let no1 = 10;
// let no2 = 10;
// document.write("<br/> " + (no1 === no2));
// let no3 = "10";
// document.write("<br/> " + (no1 === no3));
// let no4 = 50;
// document.write("<br/> " + (no1 === no4));



// 3. != ( not eual to) - sarskhu hoy to false return kare
                        // - sarkhu hoy to true return kare   

// let no1 = 10;
// let no2 = 10;
// document.write("<br/> " + (no1 != no2));
// let no3 = "20";
// document.write("<br/> " + (no1 != no3));


// 4. big > small ( greterthen) - motu hoy to true return kare
                                // - nanu hoy to false return kare

// let no1 = 10;
// let no2 = 10;
// document.write("<br/> " + (no1 > no2));
// let no3 = "20";
// document.write("<br/> " + (no3 > no1));
// let no4 = "50";
// document.write("<br/> " + (no4 > no3));
// let no5 = "50";
// document.write("<br/> " + (no1 > no5));


// 5. big < small ( less then ) - nanu hoy to true return kare
                                // - motu hoy to false return kare

// let no1 = 10;
// let no2 = 10;
// document.write("<br/> " + (no1 < no2));
// let no3 = "20";
// document.write("<br/> " + (no3 < no1));
// let no4 = "50";
// document.write("<br/> " + (no4 < no3));
// let no5 = "50";
// document.write("<br/> " + (no1 < no5));

// 6. >= ( gretarthen or eual to)
// - first value biji value jetli or moti hoy to -true return thase
//  - first value biji value jetli or nani hoy to -false return thase

// let no1 = 10;
// let no2 = 10;
// document.write("<br/> " + (no1 >= no2));
// let no3 = "20";
// document.write("<br/> " + (no1 >= no3));


// 7. <= ( gretarthen or eual to)
// - biji value first value jetli or moti hoy to -true return thase
//  - biji value first value jetli or nani hoy to -false return thase

// let no1 = 10;
// let no2 = 10;
// document.write("<br/> " + (no1 <= no2));
// let no3 = "20";
// document.write("<br/> " + (no1 <= no3));
// let no4 = "20";
// document.write("<br/> " + (no4 <= no1));



// in short

//  big > - true
//  < big - true 



// 3.Logical oprator

// 1. && ( and )

// - it is use to combine to or more conditions. 
// also return true or false.

//   condition1     condition2    Result

//     TRUE    +      TRUE    =    TRUE    T
//     TRUE    +      FALSE   =    FALSE
//     FALSE   +      TRUE    =    FALSE
//     FALSE   +      FALSE   =    FALSE

// Ex:1
// let no = -50;
// let ans = ( no > 0) && ( no < 10);
// document.write("<br/> ans is : " + ans);

// Ex:2
// let no1 = 5;
// let no2 = 5;
// let ans = ( no1 > 0) && ( no2 < 10) && ( no1 != no2);
// document.write("<br/> ans is : " + ans);


// 2. || ( OR )


// - it return true when any one condition become true. 


//   condition1     condition2    Result

//     TRUE    +      TRUE    =    TRUE    T
//     TRUE    +      FALSE   =    TRUE
//     FALSE   +      TRUE    =    TRUE
//     FALSE   +      FALSE   =    FALSE

// Ex:1
// let no = 0;
// let ans = ( no > 0) || ( no != 10);
// document.write("<br/> ans is : " + ans);

// Ex:2
// let no1 = 0;
// let no2 = 10;
// let ans = ( no1 == no2);
// document.write("<br/> ans is : " + ans);

// 3. !( not )

// it reverse the output.

    // condition         output

    //  true              false
    //  false              true



    // Ex:1
// let no = 10;
// let ans = !( no > 0);
// document.write("<br/> ans is : " + ans);

// Ex:2
// let no1 = 10;
// let ans = !( no1 == 0);
// document.write("<br/> ans is : " + ans);

// ex.3
// let no = 10;
// let ans = !(!( no > 0) && !( no < 10));
// document.write("<br/> ans is : " + ans);



// * and - or

// let no1 = 10;
// let no2 = 20;
// let ans = (no1 > 0) && (( no2 > 0) || ( no2 < 10));
// document.write("<br/> ans is : " + ans);

// 4.increment - Decriment operator

// ++(Incriment)
// pre - incriment - ++var
// post - incriment - var++

// --(Decriment)
// pre - Decriment - --var
// post - Decriment - var--


// * pre Incriment

// document.write("<br/> <h1> pre Incriment </h1>")

// let no = 10;
// document.write("<br/> original : " + no);
// let ans = ++no;
// document.write("<br/> original : " + no);
// document.write("<br/> Answer is  : " + ans);


// document.write("<br/>")


// * post Incriment

// document.write("<br/> <h1> post Incriment </h1>")

// let no1 = 10;
// document.write("<br/> original : " + no1);
// let ans1 = no1++;
// document.write("<br/> original : " + no1);
// document.write("<br/> Answer is  : " + ans1);


// document.write("<br/>")

// * pre Decriment

// document.write("<br/> <h1>pre Decriment </h1>")

// let no2 = 10;
// document.write("<br/> original : " + no2);
// let ans2 = --no2;
// document.write("<br/> original : " + no2);
// document.write("<br/> Answer is  : " + ans2);


// document.write("<br/>")


// * post Decriment

// document.write("<br/> <h1>post Decriment </h1>")

// let no3 = 10;
// document.write("<br/> original : " + no3);
// let ans3 = no3--;
// document.write("<br/> original : " + no3);
// document.write("<br/> Answer is  : " + ans3);


//  Asignment opretor / shorthand opretor

// 1. = [Asignment opretor]
// let no = 10;
// let no2 = no;
// document.write("<br/> no : " + no);
// document.write("<br/> no2  : " + no2);

// 2. +=
// no = no + 100;
// no += 100;

// 3. -=
// no = no - 100;
// no -= 100;

// 4. *=
// no = no * 100;
// no *= 100;

// 5. /=
// no = no / 100;
// no /= 100;

// 6. %=
// no = no % 100;
// no %= 100;

// 7. **=
// no = no**2;
// no**=2;



// document.write("<br/> no : " + no);


// 6.conditional opretors

// ?:

// syntax

// ( condition )? true part : false part;

// ex : 1

// let no1 = 100;
// let no2 = 20;
// let ans = (no > no2) ? no1 : no2;
// document.write("<br/> ans is : " + ans);


// // ex : 2

// let no3 = 50;
// let ans1 = (no3 > 20) ? ( no3 + " is positive...!") : ( no3 + " is nagetive...!");
// document.write("<br/> ans is : " + ans1);



// 7.bitwise opretors

// [ & ]
// [ | ]

// let no = 10;
// document.write("<br/> no : " + no);

// let ans = ( no < 20 ) & ( no > 0);
// document.write("<br/> ans is : " + ans);
// document.write("<br/> no : " + no);

// 8.type opretors

// 1.typeof
// - it is use to check data type of variable.

// 2. instance of 
// - it check instanceof specific object or not.

