let school1=document.getElementById("school_1");
let city1=document.getElementById("city_1");
let state1=document.getElementById("state_1");
let field1=document.getElementById("field_1");
let month1=document.getElementById("month_1");
let preyear1=document.getElementById("preyear_1");
let postyear1=document.getElementById("postyear_1");
let school2=document.getElementById("school_2");
let city2=document.getElementById("city_2");
let state2=document.getElementById("state_2");
let field2=document.getElementById("field_2");
let month2=document.getElementById("month_2");
let preyear2=document.getElementById("preyear_2");
let postyear2=document.getElementById("postyear_2");
let error=document.getElementsByClassName("error");
let flag=0;

function validateForm(){
    // edu 1
    if(school1.value == ""){
        document.getElementById("school_error_1").innerHTML = "School Name Empty!";
    }
    else if(!(isNaN(school1.value))){
        document.getElementById("school_error_1").innerHTML = "Enter a Proper School Name!";
    }
    else{
        document.getElementById("school_error_1").innerHTML = "";
        flag++;
    }
    if(city1.value == ""){
        document.getElementById("city_error_1").innerHTML = "City Name Empty!";
    }
    else if(!(isNaN(city1.value))){
        document.getElementById("city_error_1").innerHTML = "Enter a Proper City Name!";
    }
    else{
        document.getElementById("city_error_1").innerHTML = "";
        flag++;
    }
    if(state1.value == ""){
        document.getElementById("state_error_1").innerHTML = "State Name Empty!";
    }
    else if(!(isNaN(state1.value))){
        document.getElementById("state_error_1").innerHTML = "Enter a Proper State Name!";
    }
    else{
        document.getElementById("state_error_1").innerHTML = "";
        flag++;
    }
    if(field1.value == ""){
        document.getElementById("field_error_1").innerHTML = "Field of Study Empty!";
    }
    else if(!(isNaN(field1.value))){
        document.getElementById("field_error_1").innerHTML = "Enter a Proper Field of Study!";
    }
    else{
        document.getElementById("field_error_1").innerHTML = "";
        flag++;
    }
    if(preyear1.value == ""){
        document.getElementById("preyear_error_1").innerHTML = "Graduation Year Empty!";
    }
    else if(isNaN(preyear1.value)){
        document.getElementById("preyear_error_1").innerHTML = "Enter a Proper Year!";
    }
    else if(!(preyear1.value>=1960 && preyear1.value<=new Date().getFullYear()+4)){
        document.getElementById("preyear_error_1").innerHTML ="Entered Year Should be between 1960 and "+ (new Date().getFullYear()+4) + "!";
    }
    else{
        document.getElementById("preyear_error_1").innerHTML = "";
        flag++;
    }
    if(postyear1.value == ""){
        document.getElementById("postyear_error_1").innerHTML = "Graduation Year Empty!";
    }
    else if(isNaN(postyear1.value)){
        document.getElementById("postyear_error_1").innerHTML = "Enter a Proper Year!";
    }
    else if(!(postyear1.value>=1960 && postyear1.value<=new Date().getFullYear()+4)){
        document.getElementById("postyear_error_1").innerHTML ="Entered Year Should be between 1960 and "+ (new Date().getFullYear()+4) + "!";
    }
    else{
        document.getElementById("postyear_error_1").innerHTML = "";
        flag++;
    }

    // edu 2
    if(school2.value == ""){
        document.getElementById("school_error_2").innerHTML = "School Name Empty!";
    }
    else if(!(isNaN(school2.value))){
        document.getElementById("school_error_2").innerHTML = "Enter a Proper School Name!";
    }
    else{
        document.getElementById("school_error_2").innerHTML = "";
        flag++;
    }
    if(city2.value == ""){
        document.getElementById("city_error_2").innerHTML = "City Name Empty!";
    }
    else if(!(isNaN(city2.value))){
        document.getElementById("city_error_2").innerHTML = "Enter a Proper City Name!";
    }
    else{
        document.getElementById("city_error_2").innerHTML = "";
        flag++;
    }
    if(state2.value == ""){
        document.getElementById("state_error_2").innerHTML = "State Name Empty!";
    }
    else if(!(isNaN(state2.value))){
        document.getElementById("state_error_2").innerHTML = "Enter a Proper State Name!";
    }
    else{
        document.getElementById("state_error_2").innerHTML = "";
        flag++;
    }
    if(field2.value == ""){
        document.getElementById("field_error_2").innerHTML = "Field of Study Empty!";
    }
    else if(!(isNaN(field2.value))){
        document.getElementById("field_error_2").innerHTML = "Enter a Proper Field of Study!";
    }
    else{
        document.getElementById("field_error_2").innerHTML = "";
        flag++;
    }
    if(preyear2.value == ""){
        document.getElementById("preyear_error_2").innerHTML = "Graduation Year Empty!";
    }
    else if(isNaN(preyear2.value)){
        document.getElementById("preyear_error_2").innerHTML = "Enter a Proper Year!";
    }
    else if(!(preyear2.value>=1960 && preyear2.value<=new Date().getFullYear()+4)){
        document.getElementById("preyear_error_2").innerHTML ="Entered Year Should be between 1960 and "+ (new Date().getFullYear()+4) + "!";
    }
    else{
        document.getElementById("preyear_error_2").innerHTML = "";
        flag++;
    }
    if(postyear2.value == ""){
        document.getElementById("postyear_error_2").innerHTML = "Graduation Year Empty!";
    }
    else if(isNaN(postyear2.value)){
        document.getElementById("postyear_error_2").innerHTML = "Enter a Proper Year!";
    }
    else if(!(postyear2.value>=1960 && postyear2.value<=new Date().getFullYear()+4)){
        document.getElementById("postyear_error_2").innerHTML ="Entered Year Should be between 1960 and "+ (new Date().getFullYear()+4) + "!";
    }
    else{
        document.getElementById("postyear_error_2").innerHTML = "";
        flag++;
    }
    if(flag==error.length){
        console.log(error.length, flag);
        flag=0;
        return true;
    }
    else{
        console.log(error.length, flag);
        flag=0;
        return false;
    }
}

function passvlaues(){
    // edu 1
    let school_31=document.getElementById("school_1").value;
    localStorage.setItem("school31", school_31);
    console.log(school_31);

    let city_31=document.getElementById("city_1").value;
    localStorage.setItem("city31", city_31);
    
    let state_31=document.getElementById("state_1").value;
    localStorage.setItem("state31", state_31);

    let field_31=document.getElementById("field_1").value;
    localStorage.setItem("field31", field_31);

    let preyear_31=document.getElementById("preyear_1").value;
    localStorage.setItem("preyear31", preyear_31)
    
    let postyear_31=document.getElementById("postyear_1").value;
    localStorage.setItem("postyear31", postyear_31)
    
    // edu 2
    let school_32=document.getElementById("school_2").value;
    localStorage.setItem("school32", school_32);

    let city_32=document.getElementById("city_2").value;
    localStorage.setItem("city32", city_32);
    
    let state_32=document.getElementById("state_2").value;
    localStorage.setItem("state32", state_32);

    let field_32=document.getElementById("field_2").value;
    localStorage.setItem("field32", field_32);

    let preyear_32=document.getElementById("preyear_2").value;
    localStorage.setItem("preyear32", preyear_32)
    
    let postyear_32=document.getElementById("postyear_2").value;
    localStorage.setItem("postyear32", postyear_32)
} 