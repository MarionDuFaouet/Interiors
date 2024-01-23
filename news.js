// ARTICLE 1

// requête XHR
let ajax = new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.open("GET", "https://www.tbads.eu/greta/kercode/ajax/?article=1");
    request.responseType = "json";
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
    request.send();
});

ajax.then(function (response) {
    console.log("Response : %o", response);
    // mes fonctions
    contenu(response);
    createExcerpt(response);
})
    .catch(function (msg) {
        console.log("Message d'erreur :", msg)
    });

//récupère mes éléments html et injecte ls données json
function contenu(jsonObj) {
    let myTitle = document.querySelector("#title");
    let myDateNews = document.querySelector("#dateNews");
    let myDateModale = document.querySelector("#dateModale");
    let myContentModale = document.querySelector("#contentModale");
    let myPicture = document.querySelector("#picture");

    myTitle.textContent = jsonObj.title;
    myDateNews.textContent = jsonObj.date.day + ' ' + jsonObj.date.month + ' ' + jsonObj.date.year;
    myDateModale.textContent = jsonObj.date.day + ' ' + jsonObj.date.month + ' ' + jsonObj.date.year;
    myContentModale.textContent = jsonObj.content;
    myPicture.setAttribute("src", jsonObj.picture);
}

// Création excerpt
function createExcerpt(jsonObj) {
    let myExcerpt = document.querySelector("#contentNews");
    let text = jsonObj.content[0];
    text = text.substring(0, 60) + " ...";
    myExcerpt.textContent = text;
}

// ==============================================================================================================

// ARTICLE 2

// méthode fetch
fetch("https://www.tbads.eu/greta/kercode/ajax/?article=3")
    .then(response => response.json())
    .then(function (response) {
        console.log(response)
        //mes fonctions;
        contenuBis(response);
        createExcerptBis(response);
    })
    .catch(function (msg) {
        console.log("Message d'erreur:", msg)
    });


function contenuBis(jsonObj) {
    //récupère mes éléments html
    let myTitleBis = document.querySelector("#titleBis");
    let myDateNewsBis = document.querySelector("#dateNewsBis");
    let myDateModaleBis = document.querySelector("#dateModaleBis");
    let myContentModaleBis = document.querySelector("#contentModaleBis");
    let myPictureBis = document.querySelector("#pictureBis");

    myTitleBis.textContent = jsonObj.title;
    myDateNewsBis.textContent = jsonObj.date.day + ' ' + jsonObj.date.month + ' ' + jsonObj.date.year;
    myDateModaleBis.textContent = jsonObj.date.day + ' ' + jsonObj.date.month + ' ' + jsonObj.date.year;
    myContentModaleBis.textContent = jsonObj.content;
    myPictureBis.setAttribute("src", jsonObj.picture);
}

// Création excerpt
function createExcerptBis(jsonObj) {
    let myExcerptBis = document.querySelector("#contentNewsBis");
    let text = jsonObj.content[0];
    text = text.substring(0, 60) + " ...";
    myExcerptBis.textContent = text;
}

// ==============================================================================================================



// //METHODE KEVIN

// // créé un tableau id
// let id = [1,3];
// // Envoie une requête XHR pour chaque indice de id, id définissant l'url de ma requête
// for (let i = 0; i < id.length; i++) {
//     let promise= UrlXmlHttpRequest(id[i]);
//     promise.then(
//         function(response){
//             console.log("Response: %o", response);
//            contenu(response);
//         }
//     ).catch(function (msg) {
//         console.log("Message d'erreur :", msg)
//     });
// } 

// // créé une requête XHR pour chaque url
// function UrlXmlHttpRequest(id) {
//     return new Promise((resolve, reject) => {
//         url = "https://www.tbads.eu/greta/kercode/ajax/?article=" + id;
// // ma requête
//         let req = new XMLHttpRequest();
//         req.open("GET", url);
//         req.responseType = "json";
//         req.onload = function() {
//             //Si le statut HTTP n'est pas 200...
//             if (req.status != 200) {
//                 //...On affiche le statut et le message correspondant
//                 //alert("Erreur " + req.status + " : " + req.statusText);
//                 reject("Erreur du serveur : " + req.status);
//                 //Si le statut HTTP est 200, on affiche le nombre d'octets téléchargés et la réponse
//             } else {
//                 resolve(req.response);
//             }
//         }
//         //Si la requête n'a pas pu aboutir
//         req.onerror = function(){
//             console.log("La requête a échoué");
//         };
//        req.send();
//     })
// }

// //remplace le contenu de mes variables par du contenu json
// function contenu(jsonObj) {
//     //récupère mes éléments html
//     let myTitle = document.querySelectorAll(".title");
//     let myDate = document.querySelectorAll(".dateArticle");
//     let myContent = document.querySelectorAll(".content");
//     let myPicture = document.querySelector(".picture");
//     //image
//     myPicture.setAttribute("src", jsonObj["picture"]);

//     for (let i = 0; i < myTitle.length; i++) {
//         myTitle[i].textContent = jsonObj["title"];
//     }
//     for (let i = 0; i < myDate.length; i++) {
//         myDate[i].textContent = jsonObj["date"]["day"] + ' ' + jsonObj["date"]["month"] + ' ' + jsonObj["date"]["year"];
//     }
//     for (let i = 0; i < myContent.length; i++) {
//         myContent[i].textContent = jsonObj["content"];
//     }
//     for (let i = 0; i < myPicture.length; i++) {
//         myPicture[i].setAttribute("src") = jsonObj["picture"];
//     }
// }
