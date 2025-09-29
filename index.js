const interwaly = document.getElementsByClassName("interwaly");
let inters = [];
let odp;

class Intrument {
    constructor(name,soundFile, type){
        this.name = name;
        this.soundFile = soundFile;
        this.type = type;
    }
    play(){
        const audio = new Audio(this.soundFile);
        audio.play();
    }
}

function rozwinListe(){
    const lista = document.getElementById("lista");
    lista.classList.toggle("widoczna");
    lista.classList.toggle("ukryta");
}
function rozwinMenu(){
    const menu = document.getElementById("menu");
    menu.classList.toggle("ukryta");
    menu.classList.toggle("widoczna");
}
function rozwinInstrumenty(){
    const zawartosc = document.getElementById("zawartosc");
    zawartosc.classList.toggle("ukryta");
    zawartosc.classList.toggle("widoczna")
}
function startGry(){
    const okno = document.getElementById("okno");
    const przycisk = document.getElementById("startPrzycisk");
    const boxInterwaly = document.getElementById("boxInterwaly");
    const tekst1 = document.getElementById("tekst1");
    if(przycisk.textContent == "START"){
        przycisk.textContent = "MENU";
    }else{
        przycisk.textContent = "START";
    }
    boxInterwaly.classList.toggle("widoczna");
    boxInterwaly.classList.toggle("ukryta");
    okno.classList.toggle("widoczna");
    okno.classList.toggle("ukryta");
    tekst1.classList.toggle("widoczna");
    tekst1.classList.toggle("ukryta");
}
function dodajInterwal(inter) {
    const index = inters.indexOf(inter);
    if (index !== -1) {
        inters.splice(index, 1);
    } else {
        inters.push(inter);
    }
    console.log(inters);
    return inters;
}
for (let i = 0; i < interwaly.length; i++) {
    interwaly[i].addEventListener("click", function () {
        this.classList.toggle("interwalyactive");
});
}


const notes = ["c1", "#c1", "d1", "#d1", "e1", "f1", "#f1", "g1", "#g1", "a1", "#a1", "h1", 
               "c2", "#c2", "d2", "#d2", "e2", "f2", "#f2", "g2", "#g2", "a2", "#a2", "h2"];
const nLength = notes.length;

function losInterval(inters){
    const iLength = inters.length;
    const r = Math.floor(Math.random() * iLength);
    const inter = inters[r];
    return inter;
}

function chooseFirstNote(inter){
    let maxFirst = nLength - inter;
    let firstNoteId = Math.floor(Math.random() * maxFirst);
    return firstNoteId;
}

function wybierzOdp(){

}

function wyswietlInterwaly(inters){
    const inputs = document.querySelectorAll("input[type='radio']");
    let wybrane = inters;
    const wszystkie = [0,1,2,3,4,5,6,7,8,9,10,11,12];
    inputs.forEach(e => {
        e.style.display = "none";
        e.nextElementSibling.style.display = "none";
    })
    for(let i = 0; i < wybrane.length ; i++){
        for(let k = 0; k < 12 ; k++){
            if(wybrane[i] == wszystkie[k]){
                let input1 = document.getElementById(`${wybrane[i]}`);
                input1.style.display = "block";
                input1.nextElementSibling.style.display = "block";
            }
        }
    }
}


function odtworz(){
    const viola = new Intrument("viola", "c1-c2/VIOLA A4.mp3","strunowe");
    viola.play();
}

let inter = losInterval(inters);
let firstNoteId = chooseFirstNote(inter);
let secondNoteId = firstNoteId + inter;
let firstNote = notes[firstNoteId];
let secondNote = notes[secondNoteId];
