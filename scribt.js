let yosh=prompt("yoshni kiriting")

let yosh2=prompt("ota-ona ruhsati")



let natija1 = (yosh >= 18 && yosh2 == "bor" ) ? "kirish mumkin"  :  "kirish mumkin emas"

console.log(natija1)

// agar ball 70 dan baland daavomat 80% bolsa imtihondan otti bolsin

let imtihon =prompt("ballni kiriting")

let imtihon2 =prompt("foizni kiriting")



let natija2 = (imtihon >= 70 && imtihon2 >= 80 ) ? "imtihondan ottingiz" : "imtihondan yiqildingiz"

console.log(natija2)


// agar batareya 20% dan kam qolsa va zaryadka bor bolsa zaryatlash kerak yoki 20% kam va zaryadka yoq bolsa davom eting


let batareya =prompt("zaraydni kiriting")

let batareya2 =prompt("zaryatchik bor yoki yo'q")



let natija3 = (batareya >= 20 && batareya2 >= "bor" ) ? "quvattalantiring" : "davom eting"

console.log(natija3)




// agar ball 6.5 bolsa va sertifikat bolsa universitetga topshiring bolmasa yana tayyorlaring


let ielts =prompt("IELTS nechchi")

let ielts2 =prompt("sertifikat bormi")



let natija4 = (ielts >= 6.5 && ielts2 > "xa") ? "UNIVERSITETGA Topshiring"  : "Tayyorlanishni davom eting"

console.log(natija4)


// agar harorat 15 dan past va yomgirli bolsa soyabon va kurtka ol aks holda oddiy kiyin



let harorat =prompt("harorat nechchi")

let yomgir =prompt("yomgir yogyaptimi")



let natija5 = (harorat <= 15 || yomgir == "xa") ? "issiq kiyin" : "shunday chiqaver"

console.log(natija5)

