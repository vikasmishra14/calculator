// let add=document.querySelector("#add");
// let minus=document.querySelector("#minus");
// let multiply=document.quesrselector("#multiply");
// let divide=document.querySelector("#divide");
// let cancle=document.querySelector("#cancle");
// let equal=document.queryselector("#equal");

let data="";
function calculator(event){
    let value=event.target.innerHTML;
    data+=value;
    document.querySelector("#display").innerHTML=data;
}
function calculate(data){
    let result=(eval(data));
    document.querySelector("#display").innerHTML=result;
}
document.querySelector("#equal").addEventListener("click",function(){
    if(data==""){
        let dis=document.querySelector("#display");
        dis.innerHTML="Please enter number..";
        dis.style.color="brown";
        dis.style.textShadow="1px 1px black";
        dis.style.fontWeight="bolder";
        dis.style.fontSize="18px";
    }else{
        let dis=document.querySelector("#display");
        dis.style.color="white";
        dis.style.fontSize=="xx-large";
        dis.style.fontWeight="bolder";
        calculate(data);
    }
});
function clearScreen(){
    data="";
    document.querySelector("#display").innerHTML="";
}
document.querySelector("#display").innerHTML=0;
