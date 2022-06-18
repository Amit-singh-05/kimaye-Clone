
 
  //put your js


  let data = [
    {
      logo: "26 MAY ",
      image1: "https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/fruitfull_quarantine-min_540x.jpg?v=1614598130",
      head: "Having a Friuts Quarantine this Summer",
      para: "April 23, 2020 (IANSlife) With the COVID-19 situation,  your summer may appear to be a tad dull, but it doesn’t have to be! Cooking seems to have hit the new trend as food cravings are really hard to...",
      para1: "Read More",
      email: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBCAMAAADQfiliAAAAY1BMVEX///80NDQrKysfHx/a2tp/f38PDw/8/PwvLy8AAAAnJyciIiIXFxfMzMy4uLiCgoJKSkr29vbl5eVqamqOjo5zc3M8PDywsLB5eXldXV2fn5+np6dFRUXFxcWWlpZjY2NUVFRTziPmAAAB/0lEQVR4nO2afW+CMBCHaaul8iZURIUpfP9PuTKVVocTyXUu2e/5w5jQeI937R0SgwAAAAAAAAAAAAAAAAAALdl6+TrrjCx+kUs+B5kXRAZlzOYRl0QG0UwBxjiVgZibgxWRQVBHc9LAxSmkMgj0NlEvxlfJZkEWvyerXtuOEduRxjcU5Wp6GtRqTXUQXfRhaimSnLYAlt2kUsRVQ7cDz6TDO70Uz9KgxFYP66lS4RY1/Uh+FBDVcVgbnqj6gYwiZ2M3EX8Yn4vGLsxULKkMzFdrbUL1Jh4vhRKtdlaZghEaMB45De44uiPjyo7jsOZ9pigNTBrUTYXvS6FWpbNbqvMooTVgSm7cJN82B+kWYCsv14gN+lZbD6UI3T5tCmAvNGyYY+QGptt1tjkU1+agxN4WYHFwjqsHA1MKN1rXX0pyx2ot3eL4MDCnItnZU7FTiXJbgLi9kfBjcNccTk4Pbu9vpnwZmNZXjsyeMv7WLL0ZmM2v7n8MHNlIl/JoYPb/QTtLdDs6NH0a9H26vp6KouHj08qvgT2GafdoYvs2MLNgrwO9f3wD6d3AlIKzBwX4LYMnwAAGMIABtUH36tOLKyonMkjlPAUlj88/fBpZLubwQfdIMygWc/DxGAUAAAAAAAAAAAAAAPBnoP4j0cSoX5jg/et7DC4O4dsMLhr/l0/O5hnN1dlS5AAAAABJRU5ErkJggg=="


    },
    {
      logo: "16 JUN ",
      image1: "https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/fuits_safety_resize-min_540x.jpg?v=1614598156",
      head: "5-Hygiene tips to practice while buying & eating fritus",
      para: "The fruits you purchase require special attention in view of the current situation. So here's a quick overview of things you need to keep in mind while buying fruits. In the wake of coronavirus pandemic,...",
      para1: "Read More",
      email: "data:image/png;base64,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:image/png;base64,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"


    }


  ]

  displaytable(data)
  function displaytable(data) {
    data.forEach(function (el) {
      console.log("kalesha")
      // create an element for child box;
      let box = document.createElement("div");
      // creating elemnts iside that div
      let avatar = document.createElement("img");
      avatar.setAttribute("src", el.image1);
      let h = document.createElement("h3");
      h.innerText = el.head;
      let p = document.createElement("p");
      p.innerText = el.para;
      let p1 = document.createElement("a");
      p1.innerText = el.para1;
      p1.setAttribute("href", "#")
      let em = document.createElement("img");
      em.setAttribute("class", "email")
      em.setAttribute("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBCAMAAADQfiliAAAAY1BMVEX///80NDQrKysfHx/a2tp/f38PDw/8/PwvLy8AAAAnJyciIiIXFxfMzMy4uLiCgoJKSkr29vbl5eVqamqOjo5zc3M8PDywsLB5eXldXV2fn5+np6dFRUXFxcWWlpZjY2NUVFRTziPmAAAB/0lEQVR4nO2afW+CMBCHaaul8iZURIUpfP9PuTKVVocTyXUu2e/5w5jQeI937R0SgwAAAAAAAAAAAAAAAAAALdl6+TrrjCx+kUs+B5kXRAZlzOYRl0QG0UwBxjiVgZibgxWRQVBHc9LAxSmkMgj0NlEvxlfJZkEWvyerXtuOEduRxjcU5Wp6GtRqTXUQXfRhaimSnLYAlt2kUsRVQ7cDz6TDO70Uz9KgxFYP66lS4RY1/Uh+FBDVcVgbnqj6gYwiZ2M3EX8Yn4vGLsxULKkMzFdrbUL1Jh4vhRKtdlaZghEaMB45De44uiPjyo7jsOZ9pigNTBrUTYXvS6FWpbNbqvMooTVgSm7cJN82B+kWYCsv14gN+lZbD6UI3T5tCmAvNGyYY+QGptt1tjkU1+agxN4WYHFwjqsHA1MKN1rXX0pyx2ot3eL4MDCnItnZU7FTiXJbgLi9kfBjcNccTk4Pbu9vpnwZmNZXjsyeMv7WLL0ZmM2v7n8MHNlIl/JoYPb/QTtLdDs6NH0a9H26vp6KouHj08qvgT2GafdoYvs2MLNgrwO9f3wD6d3AlIKzBwX4LYMnwAAGMIABtUH36tOLKyonMkjlPAUlj88/fBpZLubwQfdIMygWc/DxGAUAAAAAAAAAAAAAAPBnoP4j0cSoX5jg/et7DC4O4dsMLhr/l0/O5hnN1dlS5AAAAABJRU5ErkJggg==");
      box.append(avatar, h, p, p1, em)
      document.querySelector("#child1").append(box);
    })
  }

