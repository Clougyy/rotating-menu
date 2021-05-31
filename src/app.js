const burger = document.querySelector(".burger");
const content = document.querySelector(".content");
const menu_items = document.querySelectorAll(".menu div");
const home = document.querySelector(".home");
const about = document.querySelector(".about");
const contact = document.querySelector(".contact");

let open = 0;



burger.addEventListener("click", e=>{
    if (open == 0){
        content.style.transform = "rotate(25deg)";
        burger.style.transform = "rotate(90deg)";
        burger.style.height = "1rem";
        burger.style.background = "#feceab";
        setTimeout(function(){
            burger.style.background = "none";
            burger.style.height = "4rem";
        },1000);
        open = 1;
    }else{
        burger.style.transform = "rotate(0deg)";
        content.style.transform = "rotate(0deg)";
        burger.style.height = "1rem";
        burger.style.background = "#feceab";
        setTimeout(function(){
            burger.style.background = "none";
            burger.style.height = "4rem";
        },1000);
        open = 0;
    }

});


function changeView(toView){
    switch (toView){
        case "home":
            home.style.display = "block";
            about.style.display = "none";
            contact.style.display = "none";
            break;
        case "about":
            home.style.display = "none";
            about.style.display = "block";
            contact.style.display = "none";
            break;
        case "contact":
            home.style.display = "none";
            about.style.display = "none";
            contact.style.display = "block";
            break;
    }
}

menu_items.forEach(function(item){
   
    item.addEventListener("click" , e=>{
        content.style.transform = "rotate(100deg)";
        setTimeout(function(){
            open = 0;
            changeView(item.innerHTML.toLowerCase());
            content.style.transform = "rotate(0deg)";
            burger.style.transform = "rotate(0deg)";
            burger.style.background = "none";
            burger.style.height = "4rem";
        },1000);
    });
});