
//to open popup
if (Number(localStorage.getItem("login")) == 0) {
  document.querySelector(".c3").addEventListener("click", function () {
    document.querySelector(".bg-modal").style.display = "flex";
  })
} else {
  document.querySelector(".c3").addEventListener("click", function () {
    document.querySelector(".bg-modal").style.display = "none";
    document.querySelector(".c3").setAttribute("href", "myaccount.html")
  })
}

//to close popup
document.querySelector("#close").addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "none";
})
//to go to signup
document.querySelector("#lsignup").addEventListener("click", function () {
  document.querySelector(".bg-modalsignup").style.display = "flex";
})
//to close from signup pagr
document.querySelector("#sclose").addEventListener("click", function () {
  document.querySelector(".bg-modalsignup").style.display = "none";
  document.querySelector(".bg-modal").style.display = "none";
})
//to go to login page from signup 
document.querySelector(".slogin").addEventListener("click", function () {
  document.querySelector(".bg-modalsignup").style.display = "none";
})
//to go to cart
document.querySelector(".c4").addEventListener("click", function () {
  document.querySelector(".bg-modalcart").style.display = "flex";
})
//to close cart
document.querySelector("#cclose").addEventListener("click", function () {
  document.querySelector(".bg-modalcart").style.display = "none";
})
//to CONTINUE SHOPPING
document.querySelector(".CONTINUESHOPPING").addEventListener("click", function () {
  document.querySelector(".bg-modalcart").style.display = "none";
})
//to location
document.querySelector(".c1").addEventListener("click", function () {
  document.querySelector(".bg-modallocation").style.display = "flex";
})
// to close location locclose
document.querySelector("#locclose").addEventListener("click", function () {
  document.querySelector(".bg-modallocation").style.display = "none";
})
//2222222222222222222222222222222222222222222222222
//to close after resister
document.querySelector(".register").addEventListener("click", function () {
  if (document.querySelector("#fname").value == "" || document.querySelector("#smail").value == "" || document.querySelector("#spassword").value == "") {
    alert("please fill all  required data")
  } else {
    document.querySelector(".bg-modalsignup").style.display = "none";
  }
})
//********************************
//signup
document.querySelector(".register").addEventListener("click", handlesignup)
let useararr = JSON.parse(localStorage.getItem("useardata")) || [];
function handlesignup(event) {
  let usearobj = {
    ifname: document.querySelector("#fname").value,
    ilname: document.querySelector("#lname").value,
    iemail: document.querySelector("#smail").value,
    ipass: document.querySelector("#spassword").value
  };
  if (usearobj.iemail == "" || usearobj.ifname == "" || usearobj.ipass == "") {
    event.preventDefault()
  } else {
    useararr.push(usearobj);
    localStorage.setItem("useardata", JSON.stringify(useararr));
  }
}
//********************************
//loginpage
let backenddata = JSON.parse(localStorage.getItem("useardata"));

document.querySelector(".login").addEventListener("click", handlelogin)
function handlelogin() {
  // event.preventDefault()
  let flag = false;
  let lemail = document.querySelector("#lmail").value;
  let lpass = document.querySelector("#lpassword").value;
  //*****************************************************
  backenddata.forEach(function (elem) {
    if (elem.iemail == lemail && elem.ipass == lpass) {
      flag = true;
    }

  });
  //**********************************************************
  if (flag == true) {

    alert("Logged in successfully")
    document.querySelector(".bg-modal").style.display = "none";
    localStorage.setItem("login", 1)
    window.location.reload()
  } else {

    alert("Wrong login credentials")
    localStorage.setItem("login", 0)
  }
}

console.log(localStorage.getItem("login"), typeof localStorage.getItem("login"))
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



let delhi = [110034, 110036, 110038, 110047, 110039, 110061, 110096, 110071, 110065, 110037, 110081, 110082, 110084, 110025, 110073, 110059, 110056, 110004, 110046, 110043, 110010, 110013, 110014, 110018, 110019, 110020, 110024, 110042, 110054, 110058, 110067, 110072, 110091, 110094, 110001, 110002, 110003, 110005, 110006, 110007, 110008, 110011, 110012, 110015, 110016, 110017, 110021, 110022, 110023, 110026, 110027, 110028, 110029, 110030, 110031, 110032, 110033, 110035, 110040, 110041, 110044, 110045, 110048, 110049, 110051, 110052, 110053, 110055, 110057, 110060, 110062, 110063, 110064, 110066, 110083, 110092, 110093]

let mumbai = [400037, 400053, 400050, 400090, 400091, 400092, 400013, 400093, 400017, 400062, 400026, 400058, 400034, 400011, 400049, 400101, 400067, 400068, 400095, 400051, 400006, 400103, 400020, 400059, 400019, 400016, 400104, 400008, 400069, 400065, 400014, 400021, 400004, 400064, 400102, 400012, 400003, 400025, 400009, 400035, 400097, 400060, 400066, 400099, 400029, 400054, 400032, 400096, 400015, 400063, 400028, 400033, 400007, 400002, 400001, 400034, 400027, 400010, 400052, 400005, 400055, 400061, 400098, 400057, 400057, 400056, 400031, 400018, 400030]


// console.log(delhi.length)
// console.log(mumbai.length)

document.querySelector(".location").addEventListener("click", check_pin)

function check_pin() {
  let pin_code = Number(document.querySelector("#check_pin").value);
  // console.log(pin_code)

  let flag1 = false;
  let flag = false;

  for (let i = 0; i < delhi.length; i++) {
    if (pin_code === delhi[i]) {
      flag = true;
      break;
    }
    else if (pin_code === mumbai[i]) {
      flag1 = true;
      break;
    }
    else if (pin_code !== delhi[i]) {
      falg = false;
    }
    else if (pin_code !== mumbai[i]) {
      flag1 = false;
    }

  }

  if (flag == false && flag1 == false) {
    alert("Sorry! We do not deliver to your pincode currently. Showing you results for Mumbai");
    document.querySelector(".bg-modallocation").style.display = "none";
  }
  else if (flag) {
    alert("Welcome to Delhi!");
    document.querySelector("#change_location").innerText = "Delhi";
    document.querySelector(".bg-modallocation").style.display = "none";
  }
  else if (flag1) {
    alert("welcome to Mumbai!")
    document.querySelector("#change_location").innerText = "Mumbai";
    document.querySelector(".bg-modallocation").style.display = "none";
  }
}
