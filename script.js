const card=document.querySelectorAll(".card")
card.forEach((elem)=>{
    var card =document.querySelectorAll(".card");
    elem.addEventListener("mouseenter",()=>{
        for(var i=0; i<card.length;i++){
            card[i].style.width="21%"
        }
        elem.style.width="58%"
    })
    elem.addEventListener("mouseleave",()=>{
        elem.style.width="21%"
        for(var i=0; i<card.length;i++){
            card[i].style.width="21%"
            card[0].style.width="58%"
        }
       
    })

})




