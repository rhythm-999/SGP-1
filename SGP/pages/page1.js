let first_name=document.getElementById("f_name");
let last_name=document.getElementById("l_name");
let address=document.getElementById("address");
let city=document.getElementById("city");
let zipcode=document.getElementById("zipcode");
let country=document.getElementById("country");
let email=document.getElementById("email");
let phone=document.getElementById("phone");
let flag=0;
let error=document.getElementsByClassName("error");

function validateForm(){
    if(first_name.value == ""){
        document.getElementById("f_name_error").innerHTML = "First Name Empty!";
    }
    else if(!(isNaN(first_name.value)))
    {
        document.getElementById("f_name_error").innerHTML = "Enter a Proper Name!";
    }
    else{
        document.getElementById("f_name_error").innerHTML = "";
        flag++;
    }  
    // if(last_name.value == ""){
    //     document.getElementById("l_name_error").innerHTML = "Last Name Empty!";
    // }
    // else if(!(isNaN(last_name.value)))
    // {
    //     document.getElementById("l_name_error").innerHTML = "Enter a Proper Name!";
    // }
    // else{
    //     document.getElementById("l_name_error").innerHTML = "";
    //     flag++;
    // }
    if(address.value == ""){
        document.getElementById("address_error").innerHTML = "Address Empty!";
    }
    else{
        document.getElementById("address_error").innerHTML = "";
        flag++;
    }
    if(city.value == ""){
        document.getElementById("city_error").innerHTML = "City Empty!";
    }
    else if(!(isNaN(city.value))){
        document.getElementById("city_error").innerHTML = "Enter a Proper City!";
    }
    else{
        document.getElementById("city_error").innerHTML = "";
        flag++;
    }
    if(zipcode.value == ""){
        document.getElementById("zipcode_error").innerHTML = "Zipcode Empty!";
    }
    else if(isNaN(zipcode.value)){
        document.getElementById("zipcode_error").innerHTML = "Enter a Proper Zipcode!";
    }
    else{
        document.getElementById("zipcode_error").innerHTML = "";
        flag++;
    }
    if(country.value == ""){
        document.getElementById("country_error").innerHTML = "Country Empty!";
    }
    else if(!(isNaN(country.value))){
        document.getElementById("country_error").innerHTML = "Enter a Proper Country!";
    }
    else{
        document.getElementById("country_error").innerHTML = "";
        flag++;
    }
    if(email.value == ""){
        document.getElementById("email_error").innerHTML = "Email Address Empty!";
    }
    else{
        document.getElementById("email_error").innerHTML = "";
        flag++;
    }
    if(phone.value == ""){
        document.getElementById("phone_error").innerHTML = "Phone Number Empty!";
    }
    else if(isNaN(phone.value) || phone.value.length<10){
        document.getElementById("phone_error").innerHTML = "Enter a Proper Phone Number!";
    }
    else{
        document.getElementById("phone_error").innerHTML = "";
        flag++;
    }
    if(error.length==flag){
        flag=0;
        return true;
    }
    else{
        flag=0;
        return false;
    }
}

function passvalues(){
    let first_name_1=document.getElementById("f_name").value;
    localStorage.setItem("fnamevalue", first_name_1);

    let addressvalue_=document.getElementById("address").value;
    localStorage.setItem("addressvalue", addressvalue_);

    let cityvalue_1=document.getElementById("city").value;
    localStorage.setItem("cityvalue", cityvalue_1);

    let zipcode_1=document.getElementById("zipcode").value;
    localStorage.setItem("zipcodevalue", zipcode_1);

    let country_1=document.getElementById("country").value;
    localStorage.setItem("countryvalue", country_1);

    let email_1=document.getElementById("email").value;
    localStorage.setItem("emailvalue", email_1);

    let phone_1=document.getElementById("phone").value;
    localStorage.setItem("phonevalue", phone_1);
}


// function passvlaue(){
//     let first__name = document.getElementById("f_name").value;
//     localStorage.setItem("fnamevalue",first__name);

//     // window.location.href="/Resume_Temp/1/re1.html";

//     let aboutyou = document.getElementById("address").value;
//     localStorage.setItem("addressvalue",aboutyou);

//     let citydetails = document.getElementById("city").value;
//     localStorage.setItem("cityvalue",citydetails);

//     let countrydetails = document.getElementById("country").value;
//     localStorage.setItem("countryvalue",countrydetails);

//     let emaildetails = document.getElementById("email").value;
//     localStorage.setItem("emailvalue",emaildetails);

//     let phonedetails = document.getElementById("phone").value;
//     localStorage.setItem("phonevalue",phonedetails);



// console.log("done");




// }