const interwaly = document.getElementsByClassName("interwaly");
let inters = [];
let odp;
const notes = ["C3", "Cg3", "D3", "Dg3", "E3", "F3", "Fg3", "G3", "Gg3", "A3", "Ag3", "B3", 
               "C4", "Cg4", "D4", "Dg4", "E4", "F4", "Fg4", "G4", "Gg4", "A4", "Ag4", "B4", "C5"];
const nLength = notes.length;

class Intrument {
    constructor(soundFile){
        this.soundFile = soundFile;
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
        for(let k = 0; k < 13 ; k++){
            if(wybrane[i] == wszystkie[k]){
                let input1 = document.getElementById(`${wybrane[i]}`);
                input1.style.display = "block";
                input1.nextElementSibling.style.display = "block";
            }
        }
    }
}

function odtworzDzwiek(firstNote, secondNote, instrument, inter){
    const note1 = new Intrument(`sounds/${instrument}/${instrument}_${firstNote}.mp3`);
    const note2 = new Intrument(`sounds/${instrument}/${instrument}_${secondNote}.mp3`);
    const r = Math.floor(Math.random() * 3)
    function odt(note){
        note.play()
    }

    if(r == 0){
        note1.play();
        setTimeout(() => odt(note2), 3000);
    }else if(r == 1){
        note2.play();
        setTimeout(() => odt(note1), 3000);
    }else if(r == 2){
        note1.play();
        note2.play();
    }
    console.log(r);
    console.log(`in ${inter}`);
    console.log(`n1 ${firstNote}`);
    console.log(`n2 ${secondNote}`);
}

function odtworz(){
    let inter = losInterval(inters);
    let firstNoteId = chooseFirstNote(inter);
    let secondNoteId = firstNoteId + inter;
    let firstNote = notes[firstNoteId];
    let secondNote = notes[secondNoteId];
    let instrument = `VIOLA`;
    odtworzDzwiek(firstNote, secondNote, instrument, inter);
}
