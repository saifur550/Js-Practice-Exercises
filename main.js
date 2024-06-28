
// initialize array
const  arr1 = [
    "Hi",
    "Hello",
    "Bonjour"
  ];

  arr1.push('new')

  console.log(arr1);
  

  //display all array 

  for ( let x = 0 ; x<arr1.length; x++){
    console.log(arr1[x]);
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
  
  console.log(newArr1, newArr2);


  const newArr3 = arr.concat(newArr1)
  console.log(newArr3);