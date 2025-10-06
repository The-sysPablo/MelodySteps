const interwaly = document.getElementsByClassName("interwaly");
const komunikat = document.getElementById("tekst3");
const score = document.getElementById(`Score`);
let inters = [];
let odp;
let proby = 0;
let prawidlowe = 0;
const notes = ["C3", "Cg3", "D3", "Dg3", "E3", "F3", "Fg3", "G3", "Gg3", "A3", "Ag3", "B3", 
               "C4", "Cg4", "D4", "Dg4", "E4", "F4", "Fg4", "G4", "Gg4", "A4", "Ag4", "B4", "C5"];
const interwalyWszystkie = ["1", "2m", "2", "3m", "3", "4", "4zw", "5", "6m", "6", "7", "7w", "8"]
const nLength = notes.length;
let inter;
let test = true;
let firstNote;
let secondNote;
let instrument;

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
function odtworzDzwiek(firstNote, secondNote, instrument){
    const note1 = new Intrument(`sounds/${instrument}/${instrument}_${firstNote}.mp3`);
    const note2 = new Intrument(`sounds/${instrument}/${instrument}_${secondNote}.mp3`);
    const r = Math.floor(Math.random() * 3)
    function odt(note){
        note.play();
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
function wybierzInstrument(inst,event){
    event.preventDefault();
    const wInstrument = document.getElementById("wInstrument");
    wInstrument.textContent = `Wybrany instrument: ${inst}`;
}
function odtworz(){
    if(test == true){
        inter = losInterval(inters);
        let firstNoteId = chooseFirstNote(inter);
        let secondNoteId = firstNoteId + inter;
        firstNote = notes[firstNoteId];
        secondNote = notes[secondNoteId];
        instrument = `VIOLA`;
        test = false;
    }
    odtworzDzwiek(firstNote, secondNote, instrument);
}

function sprawdzOdp(){
    let wybrana = document.querySelector('input[name="wybor"]:checked');
    if(wybrana){
        proby++;
        return wybrana.value;
    } else {
        alert("Nie zaznaczyłeś żadnej odpowiedzi!");
    }
}
function zatwierdzOdp(){
    test = true;
    let odpGracza = sprawdzOdp();
    if (odpGracza == inter && inter != null){
        komunikat.textContent = `✅Prawidłowa odpowiedź✅`;
        prawidlowe++;
        score.textContent = `Prawidłowe: ${prawidlowe} Próby: ${proby}`;
    }else if(odpGracza != inter){
        komunikat.textContent = `❌Błąd❌ Prawidłowa odpowiedź: ${interwalyWszystkie[inter]}`
        score.textContent = `Prawidłowe: ${prawidlowe} Próby: ${proby}`;
    }else if(inter == undefined  && odpGracza != inter){
        alert(`Najpierw odtwórz dźwięki!`);
    }
    console.log(`odpg: ${odpGracza}`);
    console.log(`odpp: ${inter}`);
}

function restart(){
    komunikat.textContent = "";
    proby = 0;
    prawidlowe = 0;
    score.textContent = `Prawidłowe: 0 Próby: 0`;

}

