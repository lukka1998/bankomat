let arraybank=[["luka",2000],["giorgi",2500],["mate",3400],["nika",2400]];
//ორგანზომილებიანი მასივი ინფორმაციის შესანახად.
let userinput=String(prompt("enter name of user"));
for(let i=0;i<arraybank.length;i++){
    if(arraybank[i][0]===userinput){
        let user=Number(prompt("choose and Enter your suitable number:\n1. გატანა\n2.შეტანა \n3.ბალანსის ნახვა "))
        if(user===1){
            let money=Number(prompt("რამდენილარის გატანა გსურთ?"))
            let result=arraybank[i][1]-money;
            alert("your balance was: "+arraybank[i][1]+"  and now is "+result);
            arraybank[i][1]=result;
        }
        else if(user===2){
            let money=Number(prompt("რამდენილარის შეტანა  გსურთ?"))
            let result=arraybank[i][1]+money;
            alert("your balance was: "+arraybank[i][1]+"  and now is "+result);
            arraybank[i][1]=result;
        }
        else if(user===3){
            alert(" name:  "+arraybank[i][0]+", balance: "+arraybank[i][1])
           
        }
        else{
            alert("invalid input")
        }   
    }
     
}
let result=false;
for (let i = 0; i < arraybank.length; i++) {
    if (arraybank[i].includes(userinput)) {
        result=true;
    }
    
}
if(result){
    alert("thank you for using our app")
}
else{
    alert("invalid user")
}
console.log(arraybank)


