class Viaggio{
    constructor(id, destinazione, prezzo, immagine, disponibilita){
        this.id = id;
        this.destinazione = destinazione;
        this.prezzo = prezzo;
        this.immagine = immagine;
        this.disponibilita = disponibilita;
    }
}

function process(){
    let viaggio = {};

    viaggio.immagine;

    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    let h4 = document.createElement("h4");
    h4.setAttribute("class", "card-title");
    h4.textContent = viaggio.destinazione;

    let p1 = document.createElement("p");
    p1.setAttribute("class", "card-text");
    p1.textContent = `€ ${viaggio.prezzo}`;

    let p2 = document.createElement("p");
    p2.setAttribute("class", "card-text");
    p2.textContent = `disponibilità: ${viaggio.disponibilita}`;

    let btn = document.createElement("button");
    btn.setAttribute("class", "btn btn-primary");
    btn.textContent = "Annulla";
}