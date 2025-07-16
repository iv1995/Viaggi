let max = 0;

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

function findMaxId(){

    const URL = "http://localhost:3000/viaggi";
    try{
        fetch(URL)
        .then(data => {
            //inserire regole per controllare 
            return data.json();
        })
        .then(response => {
            //response è un array da 10 oggetti
            console.log(response);
            response.forEach(viaggio => {
                if (viaggio.id > max){
                    max = viaggio.id;
                    localStorage.setItem("max", max);
                }
            });
        })
    }catch (error){
        console.error("Errore nella fetch: ", error);
    }
}

document.addEventListener("DOMContentLoaded", findMaxId);

alert(localStorage.getItem("max"));