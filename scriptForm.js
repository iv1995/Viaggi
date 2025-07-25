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
                if (Number(viaggio.id) > max){
                    max = Number(viaggio.id);
                    localStorage.setItem("max", max+1);
                }
            });
        })
    }catch (error){
        console.error("Errore nella fetch: ", error);
    }
}

document.addEventListener("DOMContentLoaded", findMaxId);

let b = document.getElementById("send");
b.setAttribute("onclick", "process()");

function process(){

    let destination = document.getElementById("destination");
    let price = document.getElementById("price");
    let image = "./db/public/img/" + document.getElementById("immagine").value + ".jpg";
    let disponibilita = getRadioValue("availability");
    let id = localStorage.getItem("max");

    const v = new Viaggio(id, destination.value, price.value, image, disponibilita);
    addInViaggi(v);
}

/**
 * @param {Viaggio} viaggio 
 */
function addInViaggi(viaggio){
    const URL = "http://localhost:3000/viaggi";

    //Passo solo le informazioni che mi servono nel carrello
    let viaggioDaCarrello = {
        id: viaggio.id,
        destinazione: viaggio.destinazione,
        prezzo: viaggio.prezzo,
        immagine: viaggio.immagine,
        disponibilita: viaggio.disponibilita
    }


    //uso la fetch con il metodo post per registrare un viaggio nel carrello
    fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        //dentro il body passo l'oggetto formato json (string) che voglio registrare
        body: JSON.stringify(viaggioDaCarrello)
    })
    .then(data =>{
        console.log(data);
    })


}

function getRadioValue(radioName){

    let value = false;
    let radio = document.getElementsByName(radioName);

    for(let i = 0; i < radio.length; i++){
        if(radio[i].checked){
            if(radio[i].value === 'true')
                value = true;
        }
    }

    return value;
}