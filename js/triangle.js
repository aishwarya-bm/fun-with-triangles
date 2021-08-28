const submitBtn = document.getElementById("submit-angles");

submitBtn.addEventListener("click",(e)=>{
        e.preventDefault();
        let a=Number(document.getElementById("a").value);
        let b=Number(document.getElementById("b").value);
        let c=Number(document.getElementById("c").value);
        if(a <=0 || b<=0 || c <=0)  {
            alert("Please enter values greater than 0 for all inputs.");
            return;
        }
        if(a+b+c === 180){
            output.innerHTML="YAY! These angles form a triangle."
        }else{
            output.innerHTML="OOPS! These angles cannot form triangle, Note that the sum of all angles should be equal 180 degrees.";
        }
    });