class Viaggio{
    constructor(id, destinazione, prezzo, immagine, disponibilita){
        this.id = id;
        this.destinazione = destinazione;
        this.prezzo = prezzo;
        this.immagine = immagine;
        this.disponibilita = disponibilita;
    }
}

let b = document.getElementById("send");
b.setAttribute("onclick", "process()");

function process(){

    let destination = document.getElementById("destination");
    let price = document.getElementById("price");
    let image = document.getElementById("image");

    const v = new Viaggio("1", destination.value, price.value, image.value, "true");

    alert(v.destinazione);
}