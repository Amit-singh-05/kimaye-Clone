
    fruitcomboarr =[{
        "img": "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/litchi--_-keasr_360x.jpg?v=1654850892",
        "choosefruit": "Add to cart",
        "fruitname": "Pomegranate Seeds (Arils Cup)125g",
        "fruitprice": "₹55-₹140"
      },
      {
        "img": "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Cherry--_-blueberry_360x.jpg?v=1654851019",
        "choosefruit": "Add to cart",
        "fruitname": "Pomegranate Seeds (Arils Cup)125g",
        "fruitprice": "₹55-₹140"
      },
      {
        "img": "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/peach--_-litchi_360x.jpg?v=1654850921",
        "choosefruit": "Add to cart",
        "fruitname": "Pomegranate Seeds (Arils Cup)125g",
        "fruitprice": "₹55-₹140"
      },
      {
        "img": "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/peach--_-Plum_360x.jpg?v=1654851067",
        "choosefruit": "Add to cart",
        "fruitname": "Pomegranate Seeds (Arils Cup)125g",
        "fruitprice": "₹55-₹140"
      },
      {
        "img": "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Plum_BB_360x.jpg?v=1621068661",
        "choosefruit": "Add to cart",
        "fruitname": "Pomegranate Seeds (Arils Cup)125g",
        "fruitprice": "₹55-₹140"
      },
      {
        "img": "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Kesar_BB_360x.jpg?v=1623393336",
        "choosefruit": "Add to cart",
        "fruitname": "Pomegranate Seeds (Arils Cup)125g",
        "fruitprice": "₹55-₹140"
      },
      {
        "img": "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/FL-Sharad_Combo_360x.png?v=1652163520",
        "choosefruit": "Add to cart",
        "fruitname": "Pomegranate Seeds (Arils Cup)125g",
        "fruitprice": "₹55-₹140"
      },
      {
        "img": "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/MicrosoftTeams-image_1_360x.jpg?v=1649415923",
        "choosefruit": "Add to cart",
        "fruitname": "Pomegranate Seeds (Arils Cup)125g",
        "fruitprice": "₹55-₹140"
      },
      {
        "img": "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Wholesome-combo_360x.jpg?v=1618497683",
        "choosefruit": "Add to cart",
        "fruitname": "Pomegranate Seeds (Arils Cup)125g",
        "fruitprice": "₹55-₹140"
      },
      {
        "img": "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Grapescombo_1_360x.png?v=1642492575",
        "choosefruit": "Add to cart",
        "fruitname": "Pomegranate Seeds (Arils Cup)125g",
        "fruitprice": "₹55-₹140"
      },
      
      {
        "img": "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/KiwiBlueberry_360x.png?v=1617983685",
        "choosefruit": "Add to cart",
        "fruitname": "Pomegranate Seeds (Arils Cup)125g",
        "fruitprice": "₹55-₹140"
      },
      ]
      let cartarr=JSON.parse(localStorage.getItem("cartdata"))||[]; 
      fruitcombofun(fruitcomboarr);
    function fruitcombofun(arr){
        document.querySelector("#fruitcombo").innerHTML="";
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
        document.querySelector("#fruitcombo").append(dv);      
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