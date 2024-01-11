let mydata = {
    name : "peter",
    city :"Karachi",
    age : "56",
    salary :"5666",
    grade : "c"
};

//two methods of getting data form an objrct
// first method

console.log(mydata["city"]);
console.log(mydata["age"]);

//second method

console.log(mydata.salary);
console.log(mydata.grade);
console.log(mydata);


//getting data with using loop

for(let i in mydata){
    console.log(i , mydata[i]);
}
// arthimetic operator

let a = 45;
let b = 74;


console.log("the sum of a+b is , a+b");
console.log("the sub of a+b is , a-b");
console.log("the mul of a+b is , a*b");
console.log("the div of a+b is , a/b");
console.log("the modulus of a+b is , a%b");

//logical opperator


//or opertor

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

//and operator

// INCREMENT

 let q = 70;
q+=10;
 console.log(q);
//post increment
console.log(q+1);  // q= q+1 70+1 => 71
console.log(q);    //71

//pre increment
console.log(++q);   // ++q 71 +1


//descrement
let e = 50;
console.log(e);  // q= e-1 50-1 => 49
console.log(e-1)   //49

console.log(--e);