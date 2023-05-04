let username=document.querySelector("#username");
let e-mail=document.querySelector("#password");
let signin=document.querySelector("#sign_in");

signin.addEventListener("click",function(e){
    e.preventDefult();
    if(username.value===""||password.value===""||signin.value===""){
    alert("please fill data");
}else{
    localstorage.setItem("username",username.value);
    localstorage.setItem("password",password.value);
    setTimeout(() => {
        window.location="file:///C:/Users/pc/Desktop/udacity/online%20shopping.css/online%20shopping.html";
    }, 1500);
}
})