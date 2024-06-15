let count=0;

const countSpan=document.getElementById("counter");
const errorMsg=document.getElementById("error");

const DecrementBtn=document.getElementById("Decrement");
const IncrementBtn=document.getElementById("Increment");
const ClearBtn=document.getElementById("Clear");

DecrementBtn.addEventListener('click',()=>{
if(count>0){
    count--;
}
else{
    errorMsg.style.visibility="visible";
}
UpdateCounter();
});

IncrementBtn.addEventListener('click',()=>{
    count++;
    UpdateCounter();
});


ClearBtn.addEventListener('click',()=>{
count=0;
UpdateCounter();
ClearBtn.style.display="none";
errorMsg.style.visibility="hidden";

});

function UpdateCounter(){
    countSpan.innerHTML=`${count}`;
    if(count>0){
        ClearBtn.style.display="inline-block";
        errorMsg.style.visibility="hidden";

    }
    // clear button on count=0
    else {
        ClearBtn.style.display = 'none';
    }
    
}