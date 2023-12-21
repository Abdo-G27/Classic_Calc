//numbers
document.querySelector(".b0").onclick = function(){
    document.querySelector(".screen").value += 0 ;
}
document.querySelector(".b1").onclick = function(){
    document.querySelector(".screen").value += 1 ;
}
document.querySelector(".b2").onclick = function(){
    document.querySelector(".screen").value += 2 ;
}
document.querySelector(".b3").onclick = function(){
    document.querySelector(".screen").value += 3 ;
}
document.querySelector(".b4").onclick = function(){
    document.querySelector(".screen").value += 4 ;
}
document.querySelector(".b5").onclick = function(){
    document.querySelector(".screen").value += 5 ;
}
document.querySelector(".b6").onclick = function(){
    document.querySelector(".screen").value += 6 ;
}
document.querySelector(".b7").onclick = function(){
    document.querySelector(".screen").value += 7 ;
}
document.querySelector(".b8").onclick = function(){
    document.querySelector(".screen").value += 8 ;
}
document.querySelector(".b9").onclick = function(){
    document.querySelector(".screen").value += 9 ;
}

//operations
document.querySelector(".b-plus").onclick = function(){
    document.querySelector(".screen").value += "+" ;
}
document.querySelector(".b-minus").onclick = function(){
    document.querySelector(".screen").value += "-" ;
}
document.querySelector(".b-mult").onclick = function(){
    document.querySelector(".screen").value += "*" ;
}
document.querySelector(".b-devi").onclick = function(){
    document.querySelector(".screen").value += "/" ;
}

//speacial
document.querySelector(".b-dot").onclick = function(){
    document.querySelector(".screen").value += "." ;
}
document.querySelector(".mod").onclick = function(){
    document.querySelector(".screen").value += "%" ;
}
document.querySelector(".de").onclick = function(){
    document.querySelector(".screen").value = 
    document.querySelector(".screen").value.toString().slice(0,-1);
}
document.querySelector(".ac").onclick = function(){
    
    document.querySelector(".screen").value = "" ;
}
document.querySelector(".b-equal").onclick = function(){
    document.querySelector(".screen").value = 
    eval(document.querySelector(".screen").value);
}
document.querySelector(".ioo").onclick = function(){
    document.querySelector(".screen").value += "*0.01" ;
}