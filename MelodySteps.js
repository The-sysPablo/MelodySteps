const interwaly = document.getElementsByClassName("interwaly");
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
    const instrumenty = document.getElementById("przyciskInst");
    const zawartosc = document.getElementsByClassName("zawartosc");
    zawartosc.classList.toggle("ukryta");
    zawartosc.classList.toggle("widoczna");
}
function pokazOkienko(){
    const okno = document.getElementById("okno");
    okno.classList.toggle("widoczna");
    okno.classList.toggle("ukryta");
}
for (let i = 0; i < interwaly.length; i++) {
    interwaly[i].addEventListener("click", function () {
        this.classList.toggle("interwalyactive");
    });
}
