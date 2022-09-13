let task = document.querySelector("#task"); //input id'sini seçerek değişkene atadık.
let liveToastButton = document.querySelector("#liveToastButton"); // Ekle butonunun id'sini seçip değişkene atadık.
const ul = document.getElementsByTagName('li');
function newElement() {

}
for(let i=0;i<ul.length;i++) {
const button = document.createElement('button')
button.className = 'btn-close'

//Liste için oluşturulan close butonunun click eventi tetiklendiğinde çalışacak kodlar

ul[i].appendChild(button);

button.addEventListener('click', () => {
    alert('Oh, you clicked me!')
})

}
function removeButton(){
    this.parentElement.remove();  // burda maddeyi silmek için yanı çarpının bulunduğu maddeyi silmek için parentElement.remove classını kullandık.
  }