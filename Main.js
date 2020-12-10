let eleman = document.querySelectorAll("li");

for(let i = 0; i < eleman.length; i++){
    eleman[i].addEventListener("mouseover",()=>{
        eleman[i].style.color="red";
    });
        eleman[i].addEventListener("mouseout",()=>{
            eleman[i].style.color="black";
        });
       
        eleman[i].addEventListener("click",()=>{
            eleman[i].classList.toggle("benimsin"); //toggle aç kapa gibi kullanılabilir
        });
            
       
   
}

let ad=document.querySelector("p");   
ad.addEventListener("mouseover",()=>{
    ad.style.backgroundColor="blue";
})

ad.addEventListener("mouseout",()=>{
ad.style.backgroundColor="white";
})
