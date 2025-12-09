const form=document.getElementById("form");


    function validateForm(){
    const name=document.getElementById("name").value.trim();
    const email=document.getElementById("email").value.trim();
    const pass=document.getElementById("pass").value.trim();
    const conpass=document.getElementById("conpass").value.trim();
    const phn=document.getElementById("phn").value.trim();


    const Pname=document.getElementById("Pname");
    const Pemail=document.getElementById("Pemail");
    const Ppass=document.getElementById("Ppass");
    const Pconpass=document.getElementById("Pconpass");
    const Pphn=document.getElementById("Pphn");
    const result=document.getElementById("result");

    Pname.innerText="";
    Pemail.innerText="";
    Ppass.innerText="";
    Pconpass.innerText="";
    Pphn.innerText="";
    result.innerText="";

    let isValid=true;

    if(name==""){
        isValid=false;
        Pname.innerText="Please Fillup";
    }

    if(!email.includes("@") || !email.includes(".com")){
        isValid=false;
        Pemail.innerText="Please Fillup valid email";
    }

    if(pass.length<=5){
        isValid=false;
        Ppass.innerText="Please give atleast 6 digit pass";
    }

    if(pass!=conpass && pass.length <=5){
        isValid=false;
        Pconpass.innerText="Password Mismatched";
    }

    if(isNaN(phn)){
        isValid=false;
        Pphn.innerText="Please provide a valid Phone Number";
    }

    if(isValid){
        return true;
    }
    else{
        return false;
    }
}

if(validateForm){
    result.innerText="Registration Successful";
}
