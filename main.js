let hello =  'https://www.youtube.com/watch?v=3l3gqpxxQpY'

let greet = `My Js ${hello}`;
//console.log(greet);



// ! print the numbers from 1 to 5 to the console.log using the loop

for ( 
  let aa = 0 ;
      aa<=50; 
      aa+=2){
  let result  = aa++
  //console.log(result);
}




let xx = 0 
while(xx<=10){
  //console.log(xx);
  xx++
}


let num1 = 0 ;

do {
   //console.log(num1) 
   num1++
  }
while(num1<1) 

let fewArray = Array.from('1234', Number)
//console.log(fewArray);



let r = ('1-2-3'.split('-'));
console.log(r);
















// initialize array
const  arr1 = [
    "Hi",
    "Hello",
    "Bonjour"
  ];

  arr1.push('new')

  //console.log(arr1);
  

  //display all array 

  for ( let x = 0 ; x<arr1.length; x++){
    //console.log(arr1[x]);
  }


  const arr = [
    "Hi",
    "Hello",
    "Bonjour",
  ];
  
  const newArr1 = [
    ...arr,
    "Salut",
  ];
  const newArr2 = [
    "Salut",
    ...arr,
  ];
  
  //console.log(newArr1, newArr2);


  const newArr3 = arr.concat(newArr1)
  //console.log(newArr3);