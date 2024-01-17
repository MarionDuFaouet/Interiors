//ARTICLE 1

//ma promesse
let ajax = new Promise((resolve, reject) => {
    // Création de l'objet XMLHttpRequest
    // XMLHttpRequest est une api!!! Appelée plus couramment XHR
    let request = new XMLHttpRequest();
    //initialisation requête.
    request.open("GET", "https://www.tbads.eu/greta/kercode/ajax/?article=1");
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

function contenu(jsonObj) {
    //récupère mes éléments html
    let myTitle = document.querySelector("#title");
    let myDate = document.querySelector(".date");
    let myContent = document.querySelector(".content");
    let myPicture = document.querySelector("#picture");
    //image
    myPicture.setAttribute("src", jsonObj["picture"]);
    //remplace le contenu de mes variables par du contenu de mon json
    myTitle.textContent = jsonObj["title"];
    myDate.textContent = jsonObj["date"]["day"] + ' ' + jsonObj["date"]["month"] + ' ' + jsonObj["date"]["year"];
    myContent.textContent = jsonObj["content"];
}
// ==============================================================================================================

//ARTICLE 2
//ma promesse
let ajaxBis = new Promise((resolve, reject) => {
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
});


//la méthode then est déclenchée par le résultat de vérif de ma fonction (if ou else)
ajaxBis.then(function (response) {
    console.log("Response : %o", response);
    //appel de ma fonction
    contenuBis(response);
})
    .catch(function (msg) {
        console.log("Message d'erreur :", msg)
    });

function contenuBis(jsonObj) {
    //récupère mes éléments html
    let myTitle = document.querySelector("#titleBis");
    let myDate = document.querySelector("#dateBis");
    let myContent = document.querySelector("#contentBis");
    let myPictureBis = document.querySelector("#pictureBis");
    //image
    myPictureBis.setAttribute("src", jsonObj["picture"]);
    //remplace le contenu de mes variables par du contenu de mon json
    myTitle.textContent = jsonObj["title"];
    myDate.textContent = jsonObj["date"]["day"] + ' ' + jsonObj["date"]["month"] + ' ' + jsonObj["date"]["year"];
    myContent.textContent = jsonObj["content"];
}