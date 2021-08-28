let submitBtn = document.getElementById("submit-quiz");


let quiz_ans = [
    "equilateral",
    "polygon",
    "centroid",
    "concurrent",
    "10.4"
]
submitBtn.addEventListener("click", function(e){
    e.preventDefault();
    let score = 0;
    for(let i=0;i<5;i++)
    {
        var q = document.getElementsByName("q"+(i+1));
        for(let j=0;j<3;j++)
        {
            if(q[j].checked && q[j].value === quiz_ans[i])
                score++;
        }
    }
    document.getElementById("output").innerHTML = "<p>You have scored "+ score +" points.</p>";
})

