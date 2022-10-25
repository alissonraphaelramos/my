var dataFutura = new Date("March 23, 2022 00:00").getTime();

var dias, horas, minutos, segundos;

setInterval(function(){
var dataAtual = new Date().getTime();

var segundosTotal = (dataFutura - dataAtual)/1000;

dias = segundosTotal/86400
dias = parseInt(segundosTotal/86400);
segundosTotal = segundosTotal%86400;


horas= parseInt(segundosTotal/3600);
segundosTotal = segundosTotal%3600;

minutos = parseInt(segundosTotal/60);
segundos = parseInt(segundosTotal%60);

document.getElementById("days").innerHTML = dias;
document.getElementById("hours").innerHTML = horas;
document.getElementById("minutes").innerHTML = minutos;
document.getElementById("seconds").innerHTML = segundos;
},1000);




