const submitBtn = document.getElementById("submit-hyp");
submitBtn.addEventListener("click",(e)=>{
    e.preventDefault();
   let a=Number(document.getElementById("a").value)
   let b=Number(document.getElementById("b").value)
   if(a<=0 || b<=0) {
       alert("Please enter values greater than 0 for both a & b");
       return;
   }
   let output=document.getElementById("output");
   let hyptonuse=Math.sqrt(Math.pow(a,2)+Math.pow(b,2)).toFixed(2);
   output.innerHTML=`Hyptonuse = ${hyptonuse}`
})