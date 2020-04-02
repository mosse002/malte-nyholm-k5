let knapp1 = document.querySelector(".active");
let knapp2 = document.querySelector(".andra");
let knapp3 = document.querySelector(".tredje");
let knapp4 = document.querySelector(".fjärde"); 

knapp1.addEventListener("click",bytBoll1);
knapp2.addEventListener("click",bytBoll2);
knapp3.addEventListener("click",bytBoll3);
knapp4.addEventListener("click",bytBoll4);

function bytBoll1() {
    document.getElementById("#fotboll").style.display = "block"; 
    document.getElementById("#tennisboll").style.display = "none";
    document.getElementById("#basketboll").style.display = "none";
    document.getElementById("#biljard").style.display = "none";
}
function bytBoll2() {
    document.getElementById("#fotboll").style.display = "none"; 
    document.getElementById("#tennisboll").style.display = "block";
    document.getElementById("#basketboll").style.display = "none";
    document.getElementById("#biljard").style.display = "none";
}
function bytBoll3() {
    document.getElementById("#fotboll").style.display = "none"; 
    document.getElementById("#tennisboll").style.display = "none";
    document.getElementById("#basketboll").style.display = "block";
    document.getElementById("#biljard").style.display = "none";
}
function bytBoll4() {
    document.getElementById("#fotboll").style.display = "none"; 
    document.getElementById("#tennisboll").style.display = "none";
    document.getElementById("#basketboll").style.display = "none";
    document.getElementById("#biljard").style.display = "block";
}