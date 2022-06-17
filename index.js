
  //to open popup
  if(Number(localStorage.getItem("login"))==1){
    document.querySelector(".c3").addEventListener("click",function(){
      document.querySelector(".bg-modal").style.display="none";
      document.querySelector(".c3").setAttribute("href","myaccount.html")
  })
  }else{
    document.querySelector(".c3").addEventListener("click",function(){
      document.querySelector(".bg-modal").style.display="flex";
      
  })
  }
 
  //to close popup
  document.querySelector("#close").addEventListener("click",function(){
      document.querySelector(".bg-modal").style.display="none";
  })
  //to go to signup
  document.querySelector("#lsignup").addEventListener("click",function(){
      document.querySelector(".bg-modalsignup").style.display="flex";
  })
  //to close from signup pagr
  document.querySelector("#sclose").addEventListener("click",function(){
      document.querySelector(".bg-modalsignup").style.display="none";
      document.querySelector(".bg-modal").style.display="none";
  })
  //to go to login page from signup 
  document.querySelector(".slogin").addEventListener("click",function(){
      document.querySelector(".bg-modalsignup").style.display="none";
  })
  //to go to cart
  document.querySelector(".c4").addEventListener("click",function(){
      document.querySelector(".bg-modalcart").style.display="flex";
  })
  //to close cart
  document.querySelector("#cclose").addEventListener("click",function(){
      document.querySelector(".bg-modalcart").style.display="none";
  })
  //to CONTINUE SHOPPING
  document.querySelector(".CONTINUESHOPPING").addEventListener("click",function(){
      document.querySelector(".bg-modalcart").style.display="none";
  })
  //to location
  document.querySelector(".c1").addEventListener("click",function(){
      document.querySelector(".bg-modallocation").style.display="flex";
  })
  // to close location locclose
  document.querySelector("#locclose").addEventListener("click",function(){
      document.querySelector(".bg-modallocation").style.display="none";
  })
  //2222222222222222222222222222222222222222222222222
  //to close after resister
  document.querySelector(".register").addEventListener("click",function(){
    if(document.querySelector("#fname").value==""||document.querySelector("#smail").value==""||document.querySelector("#spassword").value==""){
            alert ("please fill all  required data")
        }else{
          document.querySelector(".bg-modalsignup").style.display="none";
          window.location.reload()
        } 
  })
  //********************************
  //signup
  document.querySelector(".register").addEventListener("click",handlesignup)
    let useararr = JSON.parse(localStorage.getItem("useardata"))||[];
    function handlesignup(event){
        let usearobj={
        ifname:document.querySelector("#fname").value,
        ilname:document.querySelector("#lname").value,   
        iemail:document.querySelector("#smail").value,
        ipass:document.querySelector("#spassword").value
        };
        if(usearobj.iemail==""||usearobj.ifname==""||usearobj.ipass==""){
            event.preventDefault()
        }else{
        useararr.push(usearobj);
        localStorage.setItem("useardata",JSON.stringify(useararr));
        }    
    }
  //********************************
  //loginpage
  let backenddata = JSON.parse(localStorage.getItem("useardata"))||[];
    
    document.querySelector(".login").addEventListener("click",handlelogin)
    function handlelogin(){
        // event.preventDefault()
        let flag = false;
        let lemail = document.querySelector("#lmail").value;
        let lpass = document.querySelector("#lpassword").value;
        //*****************************************************
        if(backenddata.length>0){
          backenddata.forEach(function(elem){
            if(elem.iemail==lemail&&elem.ipass==lpass){
                flag=true;
            }
        });
        }
        
    //**********************************************************
    if(flag == true){
        
          alert ("Logged in successfully")
          document.querySelector(".bg-modal").style.display="none";
          localStorage.setItem("login",1)
          window.location.reload()
        }else {
            
            alert ("Wrong login credentials")
            localStorage.setItem("login",0)
        }
    }
    
    console.log(localStorage.getItem("login"),typeof localStorage.getItem("login"))
  //put your js


  
// ------------------------------------------------------------- slider javaScript 
let slide = document.getElementById("slider");
  let btn1 = document.getElementById("btn1");
  let btn2 = document.getElementById("btn2");
  let btn3 = document.getElementById("btn3");
  let btn4 = document.getElementById("btn4");
  let btn5 = document.getElementById("btn5");
  let btn6 = document.getElementById("btn6");

  btn1.onclick = function () {
    slide.style.transform = "translateX(0%)"
    btn1.classList.add("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");
    btn4.classList.remove("active");
    btn5.classList.remove("active");
    btn6.classList.remove("active");
  }
  btn2.onclick = function () {
    slide.style.transform = "translateX(-16.7%)"
    btn1.classList.remove("active");
    btn2.classList.add("active");
    btn3.classList.remove("active");
    btn4.classList.remove("active");
    btn5.classList.remove("active");
    btn6.classList.remove("active");
  }
  btn3.onclick = function () {
    slide.style.transform = "translateX(-33.4%)"
    btn1.classList.remove("active");
    btn2.classList.remove("active");
    btn3.classList.add("active");
    btn4.classList.remove("active");
    btn5.classList.remove("active");
    btn6.classList.remove("active");
  }
  btn4.onclick = function () {
    slide.style.transform = "translateX(-50%)"
    btn1.classList.remove("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");
    btn4.classList.add("active");
    btn5.classList.remove("active");
    btn6.classList.remove("active");
  }
  btn5.onclick = function () {
    slide.style.transform = "translateX(-66.7%)"
    btn1.classList.remove("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");
    btn4.classList.remove("active");
    btn5.classList.add("active");
    btn6.classList.remove("active");
  }
  btn6.onclick = function () {
    slide.style.transform = "translateX(-83.3%)"
    btn1.classList.remove("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");
    btn4.classList.remove("active");
    btn5.classList.remove("active");
    btn6.classList.add("active");
  }

  