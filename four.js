            //13-jan-2024 , saturday
// //LOOP 

// for(let i=10; i<=15; i++){
//     console.log("pjs", i);
// }
// //string interpolation
// for(let i=1; i<=15; i++){
//     console.log(` THIS IS A VALUE OF &{i}`);
// }
//       //table
// let num = prompt("ENTER YOUR NUMBER");
// for(let i=1; i<=10; i++){
//     console.log(`${num} x ${num} = ${num*i}`);
// }

// //while loop
// let myname = 80;
// while(myname<=90){
//     console.log("THIs IS A WHILE LOOP" , myname);
//     myname++;
// }
// let z = 44;
// do {
//     console.log("THIS IS A WHILE LOOP",z);
//     z++;
// } while (z<=50);

// //game
// let gamenum = 100;
// let usernum = prompt("ENTEr YOUR NUMBER");
// while (usernum !=  gamenum){
//     usernum = prompt("YOU GUESS THE RONG NUMBER : GUESS AGAIN");
// }
// swal("You win the match!")

let obj = {
    name : "farhan",
    age  : "60",
    grade : "A",
    city : "Karachi",
    number : "74867"
}
for(let n in obj){
    console.log(n ,obj[n] )
}

let num = 50;
for(let i=0; i<=30; i++){
   if(i%2==0){
    console.log(`${i} is EVEN`)
}
else{
    console.log(`${i} is odd`)
}
}








