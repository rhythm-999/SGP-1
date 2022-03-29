let summary_a=document.getElementById("summary5");
let error=document.getElementsByClassName("error");
let flag=0;

function validateForm(){
    if(summary_a.value == ""){
        document.getElementById("summary_error").innerHTML = "Summary Empty!";
    }
    else{
        document.getElementById("summary_error").innerHTML = "";
        flag++;
    }
    
    if(flag==error.length){
        flag=0;
        return true;
    }
    else{
        flag=0;
        return false;
    }
}

function passvlaues(){
    let summary5_=document.getElementById("summary5").value;
    localStorage.setItem("summ", summary5_);
}