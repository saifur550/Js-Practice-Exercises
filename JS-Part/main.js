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
//console.log(r);

let num = [3, 6, 7, 12, 18, 23, 44, 62, 81];
let even_num = num.filter(function(e){
  return e%2 == 0;
})

//console.log(even_num);


let people = [

  {name: 'Rachel', age: 24},

  {name: 'David', age: 16},

  {name: 'Aakash', age: 23},

  {name: 'Franklin', age: 26},

  {name: 'Ricky', age: 17}

];

let resultNum = people.filter(big=> big.age >= 30)

//console.log(resultNum);

let myNumber = [1,2,3,4,5]
//console.log(myNumber.concat(myNumber));


function duplicateNumber(arr){
   return arr
}

let test = duplicateNumber('sakib')
console.log(test);















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