
    var giftsbykimayearr =[
    {
        "img": "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/2I8A7790_360x.jpg?v=1631346990",
        "choosefruit": "Add to cart",
        "fruitname": "Pomegranate Seeds (Arils Cup)125g",
        "fruitprice": "₹55-₹140"
      },
      {
        "img": "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/2I8A7807_360x.jpg?v=1631347621",
        "choosefruit": "Add to cart",
        "fruitname": "Pomegranate Seeds (Arils Cup)125g",
        "fruitprice": "₹55-₹140"
      },
      {
        "img": "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/2I8A7821_360x.jpg?v=1631350656",
        "choosefruit": "Add to cart",
        "fruitname": "Pomegranate Seeds (Arils Cup)125g",
        "fruitprice": "₹55-₹140"
      },
      {
        "img": "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/I8A9400copy_360x.jpg?v=1651844098",
        "choosefruit": "Add to cart",
        "fruitname": "Pomegranate Seeds (Arils Cup)125g",
        "fruitprice": "₹55-₹140"
      },
    ]
    let cartarr=JSON.parse(localStorage.getItem("cartdata"))||[]; 
    
   giftkimayefun(giftsbykimayearr);
   
    
        function giftkimayefun(arr){
        document.querySelector("#giftkimaye").innerHTML="";
        arr.forEach(function(element){
        dv = document.createElement("div");
        img = document.createElement("img");
        addtocart = document.createElement("button");
        pn = document.createElement("p");
        pp = document.createElement("p");
         img.src = element.img;
         addtocart.innerText= element.choosefruit;
         addtocart.addEventListener("click",function(){
          if (cartdatapresent(cartarr, element) === false) {
            cartarr.push(element);
            localStorage.setItem("cartdata", JSON.stringify(cartarr));
        }
        else {
            alert("Item already in cart");
        }
        })
         pn.innerText= element.fruitname;
         pn.style.fontSize="17px";
         pp.innerText=element.fruitprice;
         pp.style.color = "red";
         pp.style.fontSize = "25px";
         dv.append(img,addtocart,pn,pp);
        document.querySelector("#giftkimaye").append(dv);      
        });
    }
    function cartdatapresent(cartarr, element) {
      for (let i = 0; i < cartarr.length; i++) {
          if (cartarr[i].img === element.img) {
              return true;
          }
      }
      return false;
  }