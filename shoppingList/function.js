const items = [];

function inputBtn(){
    const inputItem = document.getElementById('inputItem')
    const itemValue = inputItem.value ;

    if(itemValue){
        items.push(itemValue)
        inputItem.value =''
        addItem()
    }else{
        console.log('Nothing Added Here');
    }

}

function addItem (){
    const ulList = document.getElementById('ulList')
    ulList.innerHTML=''

    items.forEach((list,index)=>{
        const li = document.createElement('li')
        li.textContent = list;
        const btn = document.createElement('button')
        btn.textContent='x'
        btn.onclick=()=>removeItem(list)
        ulList.appendChild(btn)
        ulList.appendChild(li)
    })
}


function removeItem(index){
   items.splice(index,1)
   addItem()
   console.log('remove');
}