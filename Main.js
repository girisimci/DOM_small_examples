let eleman = document.querySelectorAll("li");

for(let i = 0; i < eleman.length; i++){
    eleman[i].addEventListener("mouseover",()=>{
        eleman[i].style.color="red";
    });
        eleman[i].addEventListener("mouseout",()=>{
            eleman[i].style.color="black";
        });
       
        eleman[i].addEventListener("click",()=>{    //classList ile css clası tanımlandı
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


function myName(obj){
    obj.innerHTML="Mehmet Sait"
}

function mySurname(obj){
    obj.innerHTML="Işık"
}

    /*
    
    Tarih göstermek için Date fonksiyonunu kullandık
    
    **/ 
document.getElementById("tarihGoster").onclick=tarihGosterici;
function tarihGosterici(){
    document.getElementById("tarih").innerHTML=Date();
}