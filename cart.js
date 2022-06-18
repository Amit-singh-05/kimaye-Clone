
    var arr = JSON.parse(localStorage.getItem("cartdata"))||[]; 
      
      let cost=0
      let itms=0
      
      let exact=0


           showfruitall(arr);
          function showfruitall(arr){
              document.querySelector("#cart").innerHTML ="";
            arr.forEach(function(element,ind){
               var dv = document.createElement("div");
               var img = document.createElement("img");
               img.src = element.img;
//****************************************************************************** */
               let Ibox = document.createElement("div")
                let Inc = document.createElement("button");
                Inc.innerText= "+";
                let c=1
                
                Inc.addEventListener("click",function(){
                  c++
                  localStorage.setItem(element.img,c)
                  window.location.reload()
                    })
                    c=localStorage.getItem(element.img)
                
                let Itm =document.createElement("h2");
                if(localStorage.getItem(element.img)==null){
                  Itm.innerText=0
                }else{
                Itm.innerText=localStorage.getItem(element.img)
                }

                let Idec = document.createElement("button");
                Idec.innerText= "-";
                Idec.addEventListener("click",function(){
                    if(c>0){
                        c--
                        localStorage.setItem(element.img,c)
                        window.location.reload()
                    }
                   
                })
                Ibox.append(Inc,Itm,Idec)
                
//*********************************************************************************** */
               var pname = document.createElement("p");
               var pprice = document.createElement("p");
               var pdelete = document.createElement("button");
               pdelete.innerText= "Delete";
               pdelete.addEventListener("click",function(){
                deleteitm(ind);
                localStorage.setItem(element.img,0)
                        window.location.reload()
              })
                pname.innerText = element.fruitname;
                pname.style.fontSize="15px";
                pprice.innerText = element.fruitprice;
                pprice.style.color = "red";
                pprice.style.fontSize = "25px";
               dv.append(img, Ibox,pname,pprice,pdelete);
           document.querySelector("#cart").append(dv);

           cost = cost+(Number(localStorage.getItem(element.img))*Number(element.price))
          //  itms = itms+Number(localStorage.getItem(element.img))
          itms = itms+Number(Itm.innerText)

           if(itms>0){
            exact=cost+50
         }
         if(cost>500){
            exact=exact-50
         }
         console.log(cost)
         console.log(itms)
            });
            
          }

          function deleteitm(ind){
            arr.splice(ind,1);
            localStorage.setItem("cartdata",JSON.stringify(arr));
            window.location.reload();
          }
       
document.querySelector(".itemsandprice>h1").innerText="Total items -"+" "+itms

document.querySelector(".itemsandprice>h1+h1").innerText="Subtotal -"+" "+exact