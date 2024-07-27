// console.log(this);
//console.log(this===window);




function sayMsg (){
    this.name = 'saifur'
}

sayMsg();
//console.log(name);


var  users = 'saifur'
//const users = 'sakib'
function userName (){
}


userName()
//console.log(this.users);


let myCustom = {
    name:'sakib al hasan',
    age:29,
    jon:'student',
    msg: function(){
        console.log(this.name);
    }

}


console.log(myCustom.msg());