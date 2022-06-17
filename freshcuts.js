
    var freshcuts =[
      {
        "img": "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/47dfb7d1-d8d3-4c96-bda9-7dc85dfdec51_360x.png?v=1613364164",
        "choosefruit": "Add to cart",
        "fruitname": "Pomegranate Seeds (Arils Cup)125g",
        "fruitprice": "₹55-₹140"
      },
      {
        "img": "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/24d0f9c9-fe83-40a3-84ab-300e73e4ff8d_360x.png?v=1611811511",
        "choosefruit": "Add to cart",
        "fruitname": "Coconut Chunks Cup(100g)",
        "fruitprice": "₹51-₹130"
      },
      {
        "img": "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/0fce7fd6-f30e-45df-8c52-234acbd62023_360x.png?v=1611811509",
        "choosefruit": "Add to cart",
        "fruitname": "Grated Coconut Punnet",
        "fruitprice": "₹51"
      },
      {
        "img": "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/62cef687-de59-4f5a-acf3-4df1238c3e29-min_360x.png?v=1614324446",
        "choosefruit": "Add to cart",
        "fruitname": "Kimaye Arils-Coco Cup(125G)",
        "fruitprice": "₹55-₹140"
      },

    ]
    let cartarr=JSON.parse(localStorage.getItem("cartdata"))||[]; 
    freshcutsfun(freshcuts);
    function freshcutsfun(arr){
        document.querySelector("#freshcuts").innerHTML="";
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
        document.querySelector("#freshcuts").append(dv);      
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