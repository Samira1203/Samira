const yes8tn=document.querySelector("#yes8tn");

yes8tn.addEventListener("click",function(){alert("Mi princesa Samira siempre ganara punto final la amo :)"

const no8tn =document.querySelector("#no8tn");

no8tn.addEventListener("mouseover",function(){
    const randomX = parseInt(Math.random()*50);
    const randomY = parseInt(Math.random()*50);
    no8tn.style.setProperty("top",randomY+"%");
    no8tn.style.setProperty("left",randomX+"%")
    no8tn.style.setProperty("transform","translate(-${randomX}%,-${randoY}%)");
})

