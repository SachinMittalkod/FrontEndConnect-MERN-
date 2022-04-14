const react =require("express");
import react from "react";

// console.log('name '.repeat(10));
//Destructing
// const data={
//     'name': "sachin",
//     'city':'badami'
// }

// console.log(dates.name)
// alternate Destructing
// let {names, city}= data;

// console.log(`${city}`);

//-----------method Destructing------------//

// const array=['c','c++','java','phyton'];

// let[a,b,c,d]=array;

// console.log(d)
// console.log(array.length)

// let[a,d]=array
// console.log(`${a} ${d}`)


//swap no without using third variable

// let x=10;
// let y=20;
// console.log("initially"+ x+" and" + y)
// let temp= x;
// x=y
// y=temp;
//below shown is short cut
// [x,y] = [y,x];

// console.log(`x=${x} and y=${y}`)


//  const obj={
//      names, id, password
//  }

//  console.log(obj.names)

 const [count, setCount]=useState(10);
 console.log(count);