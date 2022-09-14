let task = document.querySelector("#task"); //input id'sini seçerek değişkene atadık.
let liveToastBtn = document.querySelector("#liveToastBtn"); // Ekle butonunun id'sini seçip değişkene atadık.
const ul = document.getElementsByTagName('li'); //Html'deki li taglarını seçtirdik
let list = document.querySelector("#list") //ul listesini değişkene aktardık
document.addEventListener('DOMContentLoaded',GetLocalStorage)

//Yeni madde eklemek ve boş kontrolü için fonksiyon
function newElement() {
    //inputtaki boşlukları silmek için trim fonksiyonunu kullandık böylece input başında boşluk bırakılarak veri girilmesi engellendi.
    if (task.value.trim() == "") {
        $(".error").toast("show");
    }
    else {
        SaveLocalStorage(task.value)
        $(".success").toast("show");
        let li = document.createElement("li")
        list.appendChild(li)   
        li.innerHTML = task.value; 
        task.value = ""

        //eklenen yeni maddeler için yani li elementine close button ekleme ve silme işlemi
        const button = document.createElement('button')
        button.className = 'btn-close'
        li.append(button)
        li.onclick = check; 
        button.onclick = removeButton;

    }

}


//Listeye bootstrap ile close button eklenmesi ve silme işlemi
for (let i = 0; i < ul.length; i++) {
    
    const button = document.createElement('button')
    button.className = 'btn-close'

    //Liste için oluşturulan close butonunun click eventi tetiklendiğinde çalışacak kodlar
    ul[i].appendChild(button);   
    ul[i].onclick = check; 
    button.onclick = removeButton;
 

}

// tıklanan maddein üstünü çizip yanına tik koymak için toggle switch ile oluşturulan fonksiyon
function check(){
    this.classList.toggle("checked"); 
}
function removeButton() {

    this.parentElement.remove();  // çarpı butonuna basarak maddeyi silmek için remove fonksiyonunu kullandık
    console.log(this.parentElement)
    DeleteLocalStorage(this.parentElement.innerText)
}


//item'ları localstorage'e kaydetme
function SaveLocalStorage(item){
    let items;
    if(localStorage.getItem('listItem') == null){
        items = []
    }else{
        items = JSON.parse(localStorage.getItem('listItem'))
    }

    items.push(item);
    localStorage.setItem('listItem',JSON.stringify(items))
}

// itemları localstorage'den silme
function DeleteLocalStorage(item){
    let items;
    if(localStorage.getItem('listItem') == null) {
        items = []
    }
    else {
        items = JSON.parse(localStorage.getItem('listItem'))
    }
    items.splice(items.indexOf(item),1) //Splice ile item parametresini yukarda çektik ve index değerine göre silme işlemini gerçekleştirdik.

    localStorage.setItem('listItem', JSON.stringify(items))
}

//itemları localstorag'den getirme
function GetLocalStorage(){
    let items;
    if(localStorage.getItem('listItem') == null){
        items = []
    }else{
        items = JSON.parse(localStorage.getItem('listItem'))
    }

    items.forEach((item)=>{

        const li = document.createElement("li")
        list.appendChild(li)   
        li.innerHTML = item
        task.value = ""
        const button = document.createElement('button')
        button.className = 'btn-close'
        
        //Liste için oluşturulan close butonunun click eventi tetiklendiğinde çalışacak kodlar
        todoLi.appendChild(button);   
        button.onclick = removeButton;

    })
}