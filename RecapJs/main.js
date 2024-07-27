let num1 = true
let num2 = false
//console.log(num1 && num2);



function anoGlobalScope(){
   console.log('global function ');
   function localScope(){
   console.log('local function');
   }
   localScope()

}






   const controller = (function(){
      const user ={
         name:'steve jobs',
         company : 'Apple'
      }
      return user
   }) ();



   let interface = (function(){
      console.log(`${controller.name}`);

   })()



