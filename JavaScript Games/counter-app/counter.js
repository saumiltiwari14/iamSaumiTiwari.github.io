
let i=0;
const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');
c1.addEventListener("click", incr);
//c1.addEventListener(click, );
c3.addEventListener("click", decr);

function incr(){
    i=i+1;
    c2.innerHTML=i;
}
function decr(){
    i=i-1;
    c2.innerHTML=i;
}