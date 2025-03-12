let partnerQuestions = [
    "Jeff i Agatka Robiąca Loda Zgredkowi",
    "Jeff Kłamiący że nie ćpa",
    "Jeff ruchający 14 latke",
    "Jeff ruchający Agatkę",
    "Jeff mający drame z Łukaszem o to że Łukasz ćpa z Agatką",
    "Jeff kradnący Ray ukraince",
    "Jeff kradnący Nacie 1900zł",
    "Jeff zmuszający ludzi aby robili coś czego nie chcą (np sytuacja z rybą)",
    "Jeff szantażujący że powie coś rodzicom",
    "Jeff kłamiący że Ep jest jego",
    "Jeff przywłaszczający sb rzeczy",
    "Jeff który prawie zdradził Nikolę",
    "Jeff który PODOBNO kręcił z Alex",
    "Jeff który kręcił z nieletnimi",
    "Jeff który ćpał u szczurek pomimo zakazu",
    "Jeff gadający dziwne rzeczy przy rodzicach",
    "Jeff zmuszający do picia alkoholu",
    "Jeff mieszkający za darmo u ludzi",
    "Jeff kupujący dragi nieletnim",
    "Jeff handlujący dragami",
    "Jeff bijący ludzi",
    "Jeff kurwiący na Alex",
    "Jeff kurwiący na Nate",
    "Jeff liżący się z ilomaś laskami podczas przerwy z Nikolą",
    "Jeff mowiący że wyruchałby Tośkę",
    "Jeff kłamiący że był w tym samym pokoju co Nata i Wojskowy",
    "Jeff całujący się z nieletnimi",
    "Jeff cwel",
    "Jeff wystawiający ludzi",
    "Jeff mówiący Mice że wiek to tylko liczba",
    "Jeff zabraniający ćpać i każąćy oddać temat a potem sam go biorący",
    "Jeff kupujący komuś temat a potem mówiący że w kieszeni znalazł więcej",
    "Jeff chcący sprzedać głośnik Nikoli",
    "Jeff szukający haków na Alex",
    "Jeff dający narkotyki osobom które nigdy nie brały i udawający że on jest dobry bo kontroluje ilość",
    "Jeff zabraniający innym ludziom kontaktu z Alex",
    "Jeff niszczący relacje między ludźmi"
];

let resetQstns = [...partnerQuestions]

let lQ = document.getElementById("loveQuiz")

lQ.innerHTML = `${partnerQuestions[Math.floor(Math.random() * partnerQuestions.length)]}` 
function qstnRst() {
    let randNum = Math.floor(Math.random() * partnerQuestions.length)
    lQ.innerHTML = `${partnerQuestions[randNum]}` 
    partnerQuestions.splice(randNum, 1)
    console.log(partnerQuestions)
    
    if (partnerQuestions.length === 0) {
        lQ.innerHTML = "Congratulations! Wszystkie jeff-o-trivia pytania zostały zapoznane, kliknij guzik aby zresetować trivie :3"
        partnerQuestions = [...resetQstns]
        console.log(partnerQuestions)
    }
}

// ADD A LIST WHICH KEEPS TRACK OF QUESTIONS VISIBLE, ONCE ALL QUESTIONS HAVE  BEEN DISPLAYED AT LEAST ONCE, DISPLAY A CONGRATULATINS MESSAGE