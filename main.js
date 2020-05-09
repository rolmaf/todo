let schetchik = 1;
let max_schetchik = 11;
document.querySelector("input").onkeypress = function(event) {
    if (event.keyCode == 13) {
        if (schetchik < max_schetchik) {
            let text = document.querySelector("input").value;
            let li = document.createElement("li");
            let img = document.createElement("img");
            img.setAttribute("src" , "garbage.svg");
            document.querySelector(".all ul").appendChild(li).appendChild(img);
            li.innerHTML += text;
            schetchik++;
        }
        else {
            console.log(schetchik);
            alert("У вас слишком много задач!Уберите парочку!");
        }
    }
}
let i = 2;
document.querySelector(".all ul").onclick = function() {
    if (event.target.tagName == "IMG") {            
        event.target.parentElement.remove();
        schetchik = schetchik - 1;
    }
    else {
        if (event.target.classList.contains("delete")) {
            event.target.classList.remove("delete"); 
            i++;
        }
        else {  
            event.target.classList.add("delete");    
            i++;
        }
    }
}
document.querySelector("#button_1").onclick = function() {
    let all_li = document.querySelectorAll(".all li");
    schetchik = 0
    while (all_li.length > 0) {
        document.querySelector(".all li").remove();
    } 
}
document.querySelector("#button_2").onclick = function() {   
    let all_li_class = document.querySelectorAll(".all li").length;
    while (all_li_class > 0) {
        document.querySelectorAll(".all li")[all_li_class - 1].classList.add("delete");
        console.log("Зачеркнуто");
        all_li_class = all_li_class - 1;
    }
    i++;
}
// if(window.matchMedia("(max-width: 1420px)").matches) {
//     max_schetchik = 10;
// }
let window_size = document.documentElement.clientHeight;
window_size = window_size - 100;
max_schetchik = window_size / 60;
max_schetchik = max_schetchik - 3;
console.log(window_size);