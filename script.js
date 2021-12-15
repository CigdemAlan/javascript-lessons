console.log   ("merhaba from script");
//alert("sayfada uyarı mesajı")//
document.write("<p>merhaba</p>");
/*console.log("merhaba Alan ailesi")*/
var firstname="Çiğdem";
let lastname="Alan";
const age=30;
//console.log("Memet 46 Yaşında");//
console.log(firstname,age,"yaşında");
//Paccal Case
let FirstName="çiğdem";
//camel Case
let firstName="çiğdem"; //tavsiye
//snake case
let first_name="çiğdem";
//kebap case
//let first-name="çiğdem"//CSSde kullanıyoruz
console.log(firstName,firstName,firstName)
firstName="Bekir"
console.log(firstName);
const lastName="Alan"


let isMarried=true;
console.log(isMarried);
let ageisover18=true;
console.log(ageisover18);
let team1="şahin",team2="doğan",team3="kartal",team4="atmaca";
console.log(team1+team2+team3,team4);
console.log("merha"+"ba");
console.log(age+5);
console.log(age+"10");
//string

let dataString1="merhaba"
let dataString2='merhaba' + " " +age+" " + "yaşındaki" +" " + firstName;
let dataString3=`merhaba ${age} yaşındaki ${firstName}`
console.log(dataString3);
console.log(dataString2);
//Number
let numberValue=5;

//Boolean
let isMaried=true;//false;
let ageIsover18=false;//true;
//undefined
let telefon="10";
console.log(telefon);
//Null
let nullValue="";
console.log(nullValue)
function nameFunch(params){
    let test="fonksiyon içi";
    console.log(test);
    console.log(firstName);//local scope ,global scope'a erişebilir
}
nameFunch()
//console.log(test);//test local scope olduğu içinn çalışmaz


let firtName="Çiğdem"
let latName="Alan"
let date="15.12.2021"
let agge="31"
let cv=`${firtName} ${latName} ${date}'inde ${agge} yaşındadır.`;
console.log(cv)
