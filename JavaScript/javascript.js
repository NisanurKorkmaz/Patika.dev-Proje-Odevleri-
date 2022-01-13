// STRING VERI TURLERI TANIMLAMA 
//var ile degisken tanimlama 
var serverName="api.kodluyoruz.org";
console.log(serverName);

//let ile degisken tanimlama 
//let serverName;

//let ile degiskene bilgi atamak
serverName="https://kodluyoruz.org"

let fullName="Nisanur Korkmaz"

//let ile tanimlanan degiskene eleman ekleme veya degistirme 

fullName = fullName+ "  Bilgisayar muh";
console.log(fullName);

//const ile degisken tanimlama 
//const s; //yanlis tanimlama bos olmuyor
const s="selam"; // const ile tanimlanan degiskenler degistirilemez !! sabit tanimlamak icin kullanilir (constante)

//--------------------------------------------------------
// NUMBER VERI TURLERI TANIMLAMA 

let price = 100 ;
let taxe = 0.2 ;
let taxeprice = taxe*price ;
console.log("fiyat: " ,price,"KDV orani: ",taxe,"KDV tutari: " ,taxeprice);

//artrima ve azaltma islemleri 
count=320 ; 
count = count + 5;
count++; 

count--; 
 
count*=10; // degiskeni 10 ile carpar 

//string bir number'i int cevirme
let number="11";
let nexNumber=Number(number);
console.log(nexNumber);

//-----------------
//boolean veri turu ile calismak 

let isActive = false; //0
isActive= true ; // 1

//let a;
//console.log(Boolean(a)); // false cunku ici bos 

var x = 10 / 'a' ;
console.log(Boolean(x));

var a = true;
console.log(Boolean(a));

//degiskenlerin tipini bulma 
console.log(typeof(a)) ;

//stringin icindeki  int alip inte cevirme 
w="12px";
z=parseInt(w);
console.log(z);

//parsFloat float degerler icin kullanilir 

// int degeri stringe cevirme 

let num55= 55 ;
num55= num55.toString();
console.log(num55, typeof(num55));

//---------------------------------
// TEMPLATS LITERALS KULLANIMI 

let username = "Nisanur";
const DOMAIN = "kodluyoruz.org";

let email = username + "@" + DOMAIN ;
let info =  ` Merhaba ${username} sitemize hosgeldiniz, mail adresin ${email} ` ;
console.log(info);

//-----------------------------------
//STRING VERI TURLERI ILE ISLEMLER 

let firstName = "Nisanur";
let lastName = "Korkmaz";
let maill = "nisanurkmkz29@gmail.com";

//string karakter sayisi 
console.log(maill.length);

//ilk karakteri bulma 
console.log(firstName[0]);
console.log(firstName.charAt(0));

//buyuk harf / kucuk harf 
firstName= firstName.toLocaleUpperCase()
lastName= lastName.toLowerCase()

//string icinde istedigimiz bilgiyi aramak ve yerini bulmak -> search
console.log(email.search("@"));

//belirli bir yeri almak -> slice 
console.log(email.slice(0,5));

//domain bilgisini al 
console.log(email.slice(email.search("@") +1));

//bilgiyi degistir ->replace 
email = email.replace("kodluyoruz.org", "live.fr");
console.log(email);

//istedigim bilgi var mi ->includes 
email.includes("@"); // true 
email.includes("lol"); //false 

//istedigim bilgiyle basladi mi, bitti mi -> startsWith , endsWith
email.endsWith(".fr"); // true 


//-------------------------------------
//DOM : Document Object Model 
console.log(document.URL);
console.log(document.location.pathname);

document.body.style.backgroundColor = "aqua"; 

//DOM icinden oge secimi 

let title = document.getElementById("title");
console.log(title);
title.innerHTML = "Degisen Bilgi";
console.log(title.innerHTML);


let link = document.querySelector("#kodluyoruzLink")
link.innerHTML += " degisti"
link.style.color = "red"
link.classList.add('btn')

//--------------------------------------
//Prompt ile kullanicidan bilgi almak 

//let fullNamee = prompt("Lutfen adinizi giriniz : ")
console.log(fullNamee)
let greeting = document.querySelector("#greeting");
greeting.innerHTML= ` ${greeting.innerHTML} <small style = "color : pink" > ${fullNamee}</small> ` 

// Liste icerisinde elemana ulasmak veya eleman eklemek 
let item = document.querySelector("ul#list>li:last-child").innerHTML
console.log(item)

//ul nin ilk elemanini degistiriyor 
item =document.querySelector("ul#list>li:first-child").innerHTML = "degisti"

//ul'ye eleman ekleme
let ulDom =document.querySelector("ul#list")
let liDom = document.createElement('li')
liDom.innerHTML = "kendi olusturdugumuz oge "
ulDom.append(liDom)  // liDom'u en sona ekliyoruz 
ulDom.prepend(liDom) // liDom'u en basa ekler 



//-------------------------------------
//KARSILASTIRMA OPERATORLERI 

//  == ESIT MI
//  != ESIT DEGIL
//  < KUCUKSE 
//  <= KUCUK ESIT 
//  && VE
//  || VEYA
//  ! DEGIL(TERSI)

//ternary kullanimi ( short if else )

let isim = prompt("kullanici adi giriniz : ");
let info = document.querySelector("#info");

//tenary kullanimi:  kosul ? dogruysa : yanlissa 

info.innerHTML = ` ${ isim.length>0 ? isim : "Kullanici adi bulunamadi :( "}   ` 

