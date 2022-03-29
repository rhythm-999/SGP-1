let skill_1=document.getElementById("skill-1");
let skill_1_level=document.getElementById("skill-1_level");
let skill_2=document.getElementById("skill-2");
let skill_2_level=document.getElementById("skill-2_level");
let skill_3=document.getElementById("skill-3");
let skill_3_level=document.getElementById("skill-3_level");
let error=document.getElementsByClassName("error");
let flag=0;

function validateForm(){
    if(skill_1.value == ""){
        document.getElementById("skill-1_error").innerHTML = "Skill-1 Empty!";
    }
    else if(!(isNaN(skill_1.value))){
        document.getElementById("skill-1_error").innerHTML = "Enter a Proper Name!";
    }
    else{
        document.getElementById("skill-1_error").innerHTML = "";
        flag++;
    }
    if(skill_2.value == ""){
        document.getElementById("skill-2_error").innerHTML = "Skill-2 Empty!";
    }
    else if(!(isNaN(skill_2.value))){
        document.getElementById("skill-2_error").innerHTML = "Enter a Proper Name!";
    }
    else{
        document.getElementById("skill-2_error").innerHTML = "";
        flag++;
    }
    if(skill_3.value == ""){
        document.getElementById("skill-3_error").innerHTML = "Skill-3 Empty!";
    }
    else if(!(isNaN(skill_3.value))){
        document.getElementById("skill-3_error").innerHTML = "Enter a Proper Name!";
    }
    else{
        document.getElementById("skill-3_error").innerHTML = "";
        flag++;
    }
    if(skill_1_level.value == "select"){
        document.getElementById("skill-1_level_error").innerHTML = "Select Skill Level";
    }
    else{
        document.getElementById("skill-1_level_error").innerHTML = "";
        flag++;
    }
    if(skill_2_level.value == "select"){
        document.getElementById("skill-2_level_error").innerHTML = "Select Skill Level";
    }
    else{
        document.getElementById("skill-2_level_error").innerHTML = "";
        flag++;
    }
    if(skill_3_level.value == "select"){
        document.getElementById("skill-3_level_error").innerHTML = "Select Skill Level";
    }
    else{
        document.getElementById("skill-3_level_error").innerHTML = "";
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
    let skill_1_4=document.getElementById("skill-1").value;
    localStorage.setItem("skill_1", skill_1_4);

    let skill_1_level_4=document.getElementById("skill-1_level").value;
    localStorage.setItem("skill_1_level", skill_1_level_4);

    let skill_2_4=document.getElementById("skill-2").value;
    localStorage.setItem("skill_2", skill_2_4);

    let skill_2_level_4=document.getElementById("skill-2_level").value;
    localStorage.setItem("skill_2_level", skill_2_level_4);

    let skill_3_4=document.getElementById("skill-3").value;
    localStorage.setItem("skill_3", skill_3_4);

    let skill_3_level_4=document.getElementById("skill-3_level").value;
    localStorage.setItem("skill_3_level", skill_3_level_4);
}

