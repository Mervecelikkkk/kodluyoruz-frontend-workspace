// Kosullarla Calismak Bolum Sonu Egzersizi:

/* 
1- prompt ile aldigin bilgiye gore asagidaki yapiyi kullanarak notun bilgisini #info'ya yazdir
AA  90-100
BA  85-89
BB  80-84
CB  75-79
CC  70-74
DC  65-69
DD  60-64
FD  50-59
FF  0-49

2- kullanicinin girdigi verinin istedigimiz aralikta olup olmadigini kontrol et
3- ff bilgisinde uzgun surat ikonu cikart, digerlerinde ise gulucuk olsun :)
4- ff class bilgisi text-danger, digerlerinin ise text-primary olsun
*/

let examGrade=prompt("Puani Girin:");
let textInfo;

if(examGrade>=90) {
textInfo="AA"
} else if(examGrade>=85) {
    textInfo="BA"
}
  else if(examGrade>=80) {
    textInfo="BB"
}
  else if(examGrade>=75) {
    textInfo="CB"
}
  else if(examGrade>=70) {
    textInfo="CC"
}
  else if(examGrade>=65) {
    textInfo="DC"
}
else if(examGrade>=60) {
    textInfo="DD"
}
else if(examGrade>=50) {
    textInfo="FD"
}
else if(examGrade<50) {
    textInfo="FF"
}
console.log(textInfo)
