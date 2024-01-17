//ma promesse
let ajax = new Promise((resolve, reject) => {
    // Création de l'objet XMLHttpRequest
    // XMLHttpRequest est une api!!! Appelée plus couramment XHR
    let request = new XMLHttpRequest();
    //initialisation requête.
    request.open("GET", "https://www.tbads.eu/greta/kercode/ajax/?article=3");
    //répond en format json
    request.responseType = "json";
    //ajoute un écouteur d'événement à request
    //,vérifie et...
    request.addEventListener("load", function () {
        if (request.status === 200) {
            resolve(request.response);
        } else {
            reject("Erreur du serveur : " + request.status);
        }
    }, false);
    request.addEventListener("error", function () {
        reject("La requête ajax a échoué");
    }, false);
    // ...envoie la requête
    request.send();
    //affiche dans la console mon objet json récupéré
    console.log(request.response)
});


//la méthode then est déclenchée par le résultat de vérif de ma fonction (if ou else)
ajax.then(function (response) {
    console.log("Response : %o", response);
    //appel de ma fonction
    contenu(response);
})
    .catch(function (msg) {
        console.log("Message d'erreur :", msg)
    });

// remplace les données de mon html par les données json
// function contenu(jsonObj) {
//     //récupère mes éléments html
//     let myTitle = document.querySelector("#title");
//     let myDate = document.querySelector("#date");
//     let myContent = document.querySelector("#content");
//     let myPicture = document.querySelector("#picture");

//     myTitle.textContent = jsonObj["title"];
//     myDate.textContent = jsonObj["date"];
//     myContent.textContent = jsonObj["content"];
//     myPicture.textContent = jsonObj["picture"];
// }

function contenu(jsonObj) {
    //récupère mes éléments html
    let myTitle = document.querySelector("#title");
    let myDate = document.querySelector("#date");
    let myContent = document.querySelector("#content");
    let myPicture = document.querySelector("#picture");
    //remplace le contenu de mes variables par du contenu de mon json
    myTitle.textContent = jsonObj["title"];
    myDate.textContent = jsonObj["date"][0];
    myContent.textContent = jsonObj["content"];
    myPicture.textContent = jsonObj["picture"];
}

/*
* MDN manipulation des données json
* pour atteindre le 3eme pouvoir du deuxième super-héros
* superHeroes["members"][1]["powers"][2];
*/