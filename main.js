function getpara1(){

    var inputs=[];

    for(i=1; i<=6; i++){
        inputs.push(document.getElementById("input"+i).value);
}
document.getElementById("show1").innerHTML=inputs.join(" ");

}

function getpara2(){

    var inputs=[];

    for(i=7; i<=12; i++){
        inputs.push(document.getElementById("input"+i).value);
}
document.getElementById("show2").innerHTML=inputs.join(" ") 
    
}


