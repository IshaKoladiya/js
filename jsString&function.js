// how to create a string?

// 1. string  literals

// let str_name = "hello world";
// let str2_name = ' hello world';

// 2.using string object

// let str_name = new String('value');

// 3. string template

// let str_name = "value";
// let str_name2 = `multi
//                  line
//                  string`;


// length property

// 1. length = 
               //count the length of string

            //    str_name.length;


// ** access string

// 1 . print whole String

                        // document.write(Str_name);

// 2. print spacific character of string

                        // document.write(str_name[ index ]);
                    
                        // ==> index  always start with 0

// 3 . print character one by one.

                        // for( let i=0;i<str_name.length;i++){
                        //     ...
                        // }
   
// ** create

// let str1 = "Hello world";
// let str2 = 'Hello world';

// let str_3 = new String('Isha Koladiya');

// let str4 = `prithvi goyani`
// let str5 = `nova
// one
// click
// solution`

// * length property

// document.write(str5.length)

// * access

// document.write(str1)
// document.write(str1 [4])

// for(i=0; i<str1.length;i++){
//     document.write("<br/> "+ i + " = " + str1[i])
// }
    

// for(let i=str1.length-1; i>=0;i--){
//     document.write("<br/> "+ i + " = " + str1[i])
// } 


// * advantages of string template

// 1 . quote use inside string template

// let str = "\"nova solution\"";
// document.write(str+"<br/>");

// // templet string
// let str2 = `hello user , wel come to "nova solution"`;

// document.write(str2)


//  2.variable subsitution inside string templet

//   let sname = "isha";

// let wish = "hello , "+ sname + " good morning...";
// document.write(wish);

// templete

// let wish = `hello , ${sname} good morning...${sname}`;
// document.write(wish)
    
// 3. multiline string inside string templet

// let multi = "hello , 
// nova
// one click solution";

// document.write(multi);

// templet
// let multi = `hello , 
// nova
// one click solution`;

// document.write(multi);
      

//                                              ** string method ** 

// 1. slice()

// let str = "Nova One Click Solution"
// document.write("<br/> string : "+ str);

// let part = str.slice( 5 );
// let part = str.slice(9, 14 );
// let part = str.slice(-8);
// let part = str.slice(-14,-9);

// document.write("<br/> part : "+ part);

// 2. substring()

// let str = "Nova One Click Solution"
// document.write("<br/> string : "+ str);

// let part = str.substring( 5 );
// let part = str.substring(9, 14 );


// document.write("<br/> part : "+ part);


// 3. substr()

// let str = "Nova One Click Solution"
// document.write("<br/> string : "+ str);

// let part = str.substr( 5 );
// let part = str.substr(9, 5 );
// let part = str.substr(5, 10 );
// let part = str.substr(-14, 5 );
// let part = str.substr(-23,4 );


// document.write("<br/> part : "+ part);

// 4. touppercase()

// let str = "Nova One Click Solution"
// document.write("<br/> string : "+ str);

// let upper =  str . toUpperCase();
// document.write("<br/> string : "+ upper);


// 5. toLowercase()

// let str = "Nova One Click Solution"
// document.write("<br/> string : "+ str);

// let lower =  str . toLowerCase();
// document.write("<br/> string : "+ lower);

 
// 6 . concat()

// let str1 = "NOVA";
// let str2 = "  ";
// let str3 = "SOLUTION";


// mehod 1

// let mer = str1 + str2 + str3;


// method 2

// let mer = str1.concat(str2,str3);
// let mer2 = str3.concat(str2,str1);
// let mer3 = str1.concat(str3,str2);

// document.write("<br/> string : "+ mer3)

// 7. trimstart()

// let str = " Nova Solution"
// document.write("<br/> string : test"+ str);

// let n_str = str.trimStart()
// document.write("<br/> string : test" + n_str)

// 8. trimEnd()

// let str = "Nova Solution "
// document.write("<br/> string : "+ str+ "test");

// let n_str = str.trimEnd()
// document.write("<br/> string : " + n_str + "test")

// 9. trim()

// let str = " Nova Solution "
// document.write("<br/> string : test"+ str+ "test");

// let n_str = str.trim()
// document.write("<br/> string : test" + n_str + "test")

// 10 . replace()

// let str = "hello Nova , wel come to nova one click solution";

// let str2 = str.toUpperCase();

// document.write("<br/> string : "+ str2)

// // let n_str = str2 . replace('NOVA','isha');
// // let n_str = str2 . replace('O','o');
// // let n_str = str2 . replace('H','h');
// // let n_str = str2 . replace('H','HHH');
// let n_str = str2 . replace('NOVA','H');


// document.write("<br/> string : "+ n_str)

// 11 . replacAll()

// let str = "hello Nova , wel come to nova one click solution";

// let str2 = str.toUpperCase();

// document.write("<br/> string : "+ str2)

// // let n_str = str2 . replaceAll('NOVA','isha');
// // let n_str = str2 . replaceAll('O','o');
// // let n_str = str2 . replaceAll('H','h');
// // let n_str = str2 . replaceAll('H','HHH');
// let n_str = str2 . replaceAll('NOVA','H');


// document.write("<br/> string : "+ n_str)


// 12.padStart()

// let str = "NOVA";
// document.write("<br/> string : "+ str)

// let n_str = str.padStart(10,'x');
// document.write( " <br/> string : " + n_str);

// let str2 = "NOVA SOLUTION";
// document.write("<br/> string : "+ str2)

// let n_str2 = str2.padStart(10,'x');
// document.write( " <br/> string : " + n_str2);

// 13.padEnd()

// let str = "NOVA";
// document.write("<br/> string : "+ str)

// let n_str = str.padEnd(10,'x');
// document.write( " <br/> string : " + n_str);

// let str2 = "NOVA SOLUTION";R
// document.write("<br/> string : "+ str2)

// let n_str2 = str2.padEnd(10,'x');
// document.write( " <br/> string : " + n_str2);


// // mobile 

// let no = "9979260896"; 
// let no = "9724389578";

// let sec = no.slice(7).padStart(10 , 'X');
// document.write("<br/> "+ sec);

// Email

// let no = "ishakoladiya111@gmail.com";

// let sec = no.slice(-13).padStart(30 , 'X');
// document.write("<br/> "+ sec);

// // 14 . charAt()

// let str = "NOVA SOLUTION";

// document.write("<br/> string : " + str);
// document.write("<br/>" + str.charAt(3));

// for( let i=0; i<str.length; i++){
// document.write("<br/> "+i+"="+str[i]+ " = "+ str.charAt(i));
// }

// 15 . charCodeAt() - return ASCII code

// let str = "NOVA SOLUTION";

// document.write("<br/> string : " + str);
// // document.write("<br/>" + str.charCodeAt(3));

// for( let i=0; i<str.length; i++){
// document.write("<br/> "+i+"="+str[i]+ " = "+ str.charCodeAt(i));
// }


// 16.indexOf()

// let str = "NOVA ONE CLICK SOLUTION";
// document.write("<br/> string : "+ str)

// document.write("<br/> "+ str.indexOf('O'));
// document.write("<br/> "+ str.indexOf('CLICK'));
// document.write("<br/> "+ str.indexOf('K'));
// document.write("<br/> "+ str.indexOf('O',4));   ==> 
                                                      // 4 index pachi no first O


// 17. lastIndexOf()

// let str = "NOVA ONE CLICK SOLUTION";
// document.write("<br/> string : "+ str)

// document.write("<br/> "+ str.lastIndexOf('O'));      
// 21
// document.write("<br/> "+ str.lastIndexOf('CLICK'));
// 9
// document.write("<br/> "+ str.lastIndexOf('K'));
// 13
// document.write("<br/> "+ str.lastIndexOf('O',4));
// 5

// // 18. startWith() ==> only starting point match

// let str = "NOVA ONE CLICK SOLUTION";
// document.write("<br/> string : "+ str)

// document.write("<br/> "+ str.startsWith('N'));
// document.write("<br/> "+ str.startsWith('NOVA'));
// document.write("<br/> "+ str.startsWith('nova'));

// if( str.startsWith('N')){
// document.write("<br/> "+ str.replaceAll('N','n'));
// }

// 19. endsWith() ==> only anding point match

// let str = "NOVA ONE CLICK SOLUTION";
// document.write("<br/> string : "+ str)

// document.write("<br/> "+ str.endsWith('N'));
// document.write("<br/> "+ str.endsWith('SOLUTION'));
// document.write("<br/> "+ str.endsWith('solution'));

// if( str.endsWith('N')){
//    document.write("<br/> "+ str.replaceAll('N','n'));
//    }

// 20. includes() 

// let str = "NOVA ONE CLICK SOLUTION";
// document.write("<br/> string : "+ str)

// document.write("<br/> "+ str.includes('ONE'));
// document.write("<br/> "+ str.includes('K'));
// document.write("<br/> "+ str.includes('click'));

// if( str.includes('CLICK')){
//    document.write("<br/> "+ str.replaceAll('ONE','DOUBLE'));
//    }

