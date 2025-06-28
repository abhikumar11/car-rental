const regUser=()=>{
    let username=document.querySelector("#username").value;
    let usernum=document.querySelector("#num").value;
    let email=document.querySelector("#email").value;
    let userpass=document.querySelector("#password").value;
    localStorage.setItem("count",0);
    localStorage.setItem("username",JSON.stringify(username));
    localStorage.setItem("mobno",JSON.stringify(usernum));
    localStorage.setItem("useremail",JSON.stringify(email));
    localStorage.setItem("pass",JSON.stringify(userpass));
    location.href="login.html";
    return false;
}
const loginUser=()=>{
    let email=document.querySelector("#email").value;
    let userpass=document.querySelector("#password").value;
    let storeemail=JSON.parse(localStorage.getItem("useremail"));
    let storepass=JSON.parse(localStorage.getItem("pass"));
    if(email==storeemail&&userpass==storepass){
        JSON.stringify(localStorage.setItem("count",1));
        location.href="index.html";
    }
    return false;
}
