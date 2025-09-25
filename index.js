const interwaly = document.getElementsByClassName("interwaly");
let inters = [];
let odp;
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
    if(przycisk.textContent == "START"){
        przycisk.textContent = "MENU";
    }else{
        przycisk.textContent = "START";
    }
    boxInterwaly.classList.toggle("widoczna");
    boxInterwaly.classList.toggle("ukryta");
    okno.classList.toggle("widoczna");
    okno.classList.toggle("ukryta");
}
function dodajInterwal(inter) {
    const index = inters.indexOf(inter);
    if (index !== -1) {
        inters.splice(index, 1);
    } else {
        inters.push(inter);
    }
    console.log(inters);
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

let inter = losInterval(inters);
let firstNoteId = chooseFirstNote(inter);
let secondNoteId = firstNoteId + inter;
let firstNote = notes[firstNoteId];
let secondNote = notes[secondNoteId];

/*
console.log(inter);
console.log(firstNote);
console.log(secondNote);
*/
