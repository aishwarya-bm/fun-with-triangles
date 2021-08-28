const submitBtn = document.getElementById("submit-area");

submitBtn.addEventListener("click",(e)=>{
    e.preventDefault();
        let a=Number(document.getElementById("a").value);
        let b=Number(document.getElementById("b").value);
        let c=Number(document.getElementById("c").value);
        if(a<=0 || b<=0 || c<=0)
        {
            alert("Please enter all values greater than 0.")
        }
        if((a+b)>c && (b+c)>a && (c+a)>b){
            const s=(a+b+c)/2;
            const area=Math.sqrt((s*(s-a)*(s-b)*(s-c))).toFixed(4)
            output.innerHTML=`Area=${area}`
        }else{
            output.innerHTML=`Please enter side lengths such that sum of two sides is greater than third side`;
        }
    });