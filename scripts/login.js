function logMeIn(){
    let userName = (document.getElementById("username-id").value).trim();
    let apiKey = (document.getElementById("api-id").value).trim();
    let dataFromLogin = [userName,apiKey];
    // console.log(apiKey.length);
    if(userName && apiKey){
        document.getElementById("login-btn").setAttribute("href","index3.html");
        localStorage.setItem( 'objectToPass', dataFromLogin);
    }
}
   

