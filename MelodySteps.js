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
    instrumenty.classList.toggle("widoczna");
    instrumenty.classList.toggle("ukryta");
}
function pokazOkienko(){
    const okno = document.getElementById("okno");
    okno.classList.toggle("widoczna");
    okno.classList.toggle("ukryta");
}