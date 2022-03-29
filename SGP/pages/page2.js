let title1=document.getElementById("title_1");
let start_month1=document.getElementById("start_month_1");
let start_year1=document.getElementById("start_year_1");
let end_month1=document.getElementById("end_month_1");
let end_year1=document.getElementById("end_year_1");
let error=document.getElementsByClassName("error");
let exp_description_1 = document.getElementById("exp_description_1");
let bullet_1_1 = document.getElementById("bullet_1_1");
let bullet_2_1 = document.getElementById("bullet_2_1");

let title2=document.getElementById("title_2");
let start_month2=document.getElementById("start_month_2");
let start_year2=document.getElementById("start_year_2");
let end_month2=document.getElementById("end_month_2");
let end_year2=document.getElementById("end_year_2");
let exp_description_2 = document.getElementById("exp_description_2");
let bullet_1_2 = document.getElementById("bullet_1_2");
let bullet_2_2 = document.getElementById("bullet_2_2");

let flag=0;

function validateForm(){
    
    // exp 1
    if(title1.value == ""){
        document.getElementById("title_error_1").innerHTML = "Title Empty!";
    }
    else if(!(isNaN(title1.value))){
        document.getElementById("title_error_1").innerHTML = "Enter a Proper Title!";
    }
    else{
        document.getElementById("title_error_1").innerHTML = "";
        flag++;
    }

    if(exp_description_1.value == ""){
        document.getElementById("description_error_1").innerHTML = "Description is Empty!";
    }
    else{
        document.getElementById("description_error_1").innerHTML = "";
        flag++;
    }

    if(bullet_1_1.value == ""){
        document.getElementById("bulle_error_1_1").innerHTML = "Bullet Point(1) is Empty!";
    }
    else{
        document.getElementById("bulle_error_1_1").innerHTML = "";
        flag++;
    }

    if(bullet_2_1.value == ""){
        document.getElementById("bullet_error_2_1").innerHTML = "Bullet Point(2) is Empty!";
    }
    else{
        document.getElementById("bullet_error_2_1").innerHTML = "";
        flag++;
    }

    if(start_month1.value == "select"){
        document.getElementById("start_month_error_1").innerHTML = "Select Start Month!";
    }
    else{
        document.getElementById("start_month_error_1").innerHTML = "";
        flag++;
    }
    if(start_year1.value == ""){
        document.getElementById("start_year_error_1").innerHTML = "Start Year Empty!";
    }
    else if(isNaN(start_year1.value)){
        document.getElementById("start_year_error_1").innerHTML = "Enter a Proper Year!";
    }
    else if(!(start_year1.value>=1960 && start_year1.value<=new Date().getFullYear())){
        document.getElementById("start_year_error_1").innerHTML ="Entered Year Should be between 1960 and "+ new Date().getFullYear() + "!";
    }
    else{
        document.getElementById("start_year_error_1").innerHTML = "";
        flag++;
    }
    if(end_month1.value == "select"){
        document.getElementById("end_month_error_1").innerHTML = "Select End Month!";
    }
    else{
        document.getElementById("end_month_error_1").innerHTML = "";
        flag++;
    }
    if(end_year1.value == ""){
        document.getElementById("end_year_error_1").innerHTML = "End Year Empty!";
    }
    else if(isNaN(end_year1.value)){
        document.getElementById("end_year_error_1").innerHTML = "Enter a Proper Year!";
    }
    else if(!(end_year1.value>=1960 && end_year1.value<=new Date().getFullYear())){
        document.getElementById("end_year_error_1").innerHTML ="Entered Year Should be between 1960 and "+ new Date().getFullYear() + "!";
    }
    else{
        document.getElementById("end_year_error_1").innerHTML = "";
        flag++;
    }


    // exp 2
    if(title2.value == ""){
        document.getElementById("title_error_2").innerHTML = "Title Empty!";
    }
    else if(!(isNaN(title2.value))){
        document.getElementById("title_error_2").innerHTML = "Enter a Proper Title!";
    }
    else{
        document.getElementById("title_error_2").innerHTML = "";
        flag++;
    }

    if(exp_description_2.value == ""){
        document.getElementById("description_error_2").innerHTML = "Description is Empty!";
    }
    else{
        document.getElementById("description_error_2").innerHTML = "";
        flag++;
    }

    if(bullet_1_2.value == ""){
        document.getElementById("bulle_error_1_2").innerHTML = "Bullet Point(1) is Empty!";
    }
    else{
        document.getElementById("bulle_error_1_2").innerHTML = "";
        flag++;
    }

    if(bullet_2_2.value == ""){
        document.getElementById("bullet_error_2_2").innerHTML = "Bullet Point(2) is Empty!";
    }
    else{
        document.getElementById("bullet_error_2_2").innerHTML = "";
        flag++;
    }

    if(start_month2.value == "select"){
        document.getElementById("start_month_error_2").innerHTML = "Select Start Month!";
    }
    else{
        document.getElementById("start_month_error_2").innerHTML = "";
        flag++;
    }
    if(start_year2.value == ""){
        document.getElementById("start_year_error_2").innerHTML = "Start Year Empty!";
    }
    else if(isNaN(start_year2.value)){
        document.getElementById("start_year_error_2").innerHTML = "Enter a Proper Year!";
    }
    else if(!(start_year2.value>=1960 && start_year2.value<=new Date().getFullYear())){
        document.getElementById("start_year_error_2").innerHTML ="Entered Year Should be between 1960 and "+ new Date().getFullYear() + "!";
    }
    else{
        document.getElementById("start_year_error_2").innerHTML = "";
        flag++;
    }
    if(end_month2.value == "select"){
        document.getElementById("end_month_error_2").innerHTML = "Select End Month!";
    }
    else{
        document.getElementById("end_month_error_2").innerHTML = "";
        flag++;
    }
    if(end_year2.value == ""){
        document.getElementById("end_year_error_2").innerHTML = "End Year Empty!";
    }
    else if(isNaN(end_year2.value)){
        document.getElementById("end_year_error_2").innerHTML = "Enter a Proper Year!";
    }
    else if(!(end_year2.value>=1960 && end_year2.value<=new Date().getFullYear())){
        document.getElementById("end_year_error_2").innerHTML ="Entered Year Should be between 1960 and "+ new Date().getFullYear() + "!";
    }
    else{
        document.getElementById("end_year_error_2").innerHTML = "";
        flag++;
    }
    if(flag==error.length){
        console.log(flag,error.length);
        flag=0;
        return true;
    }
    else{
        console.log(flag,error.length);
        flag=0;
        return false;
    }
}

function passvalues(){
    // expi. 1
    let title_12=document.getElementById("title_1").value;
    localStorage.setItem("title1", title_12);

    let description_1 = document.getElementById("exp_description_1").value;
    localStorage.setItem("descri_1", description_1);

    let bull_1_1 = document.getElementById("bullet_1_1").value;
    localStorage.setItem("bullet_1_1", bull_1_1);

    let bull_2_1 = document.getElementById("bullet_2_1").value;
    localStorage.setItem("bullet_2_1", bull_2_1);

    let start_month_12=document.getElementById("start_month_1").value;
    localStorage.setItem("start_month1", start_month_12);

    let start_year_12=document.getElementById("start_year_1").value;
    localStorage.setItem("start_year1", start_year_12);

    let end_month_12=document.getElementById("end_month_1").value;
    localStorage.setItem("end_month1", end_month_12);

    let end_year_12=document.getElementById("end_year_1").value;
    localStorage.setItem("end_year1", end_year_12);

    console.log(description_1);


    // expi. 2
    let title_22=document.getElementById("title_2").value;
    localStorage.setItem("title2", title_22);

    let description_2 = document.getElementById("exp_description_2").value;
    localStorage.setItem("descri_2", description_2);

    let bull_1_2 = document.getElementById("bullet_1_2").value;
    localStorage.setItem("bullet_1_2", bull_1_2);

    let bull_2_2 = document.getElementById("bullet_2_2").value;
    localStorage.setItem("bullet_2_2", bull_2_2);
    
    let start_month_22=document.getElementById("start_month_2").value;
    localStorage.setItem("start_month2", start_month_22);

    let start_year_22=document.getElementById("start_year_2").value;
    localStorage.setItem("start_year2", start_year_22);

    let end_month_22=document.getElementById("end_month_2").value;
    localStorage.setItem("end_month2", end_month_22);

    let end_year_22=document.getElementById("end_year_2").value;
    localStorage.setItem("end_year2", end_year_22);

    
}