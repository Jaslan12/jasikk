window.onload=()=>{
    let input=document.querySelector('#pois');
    input.oninput=function(){
        let value=this.value.trim();
        let list=document.querySelectorAll('.game-container ');
        if(value != ''){
            list.forEach(elem=>{
                if (elem.innerHTML.search(value)==-1){
                    elem.classList.add('hide');
                }
            });
        } else{
            list.forEach(elem=>{
                elem.classList.remove('hide');
            });
        }
    }
}