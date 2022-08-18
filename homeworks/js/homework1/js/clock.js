let userName=prompt("Adınız Nedir?")
let myName=document.querySelector("#myName")
let myClock=document.querySelector("#myClock")

if(userName) {
    myName.innerHTML=`${userName}`
}else {
    alert("Lütfen Önce Adınızı Girin")
    location.reload();
}

function showTime() {

let today = new Date();
let date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
let dateTime = date+' '+time;
myClock.innerHTML= `${dateTime}`
console.log(dateTime)
setInterval(showTime, 1000);

}

showTime();

