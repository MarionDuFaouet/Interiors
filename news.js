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
        let myDateNews = document.querySelector("#dateNews");
        let myDateModale = document.querySelector("#dateModale");
        let myContentNews = document.querySelector("#contentNews");
        let myContentModale = document.querySelector("#contentModale");
        let myPicture = document.querySelector("#picture");

    
        // injecte contenu json
        myTitle.textContent = jsonObj["title"]
        myDateNews.textContent = jsonObj["date"]["day"] + ' ' + jsonObj["date"]["month"] + ' ' + jsonObj["date"]["year"];
        myDateModale.textContent = jsonObj["date"]["day"] + ' ' + jsonObj["date"]["month"] + ' ' + jsonObj["date"]["year"];
        myContentNews.textContent = jsonObj["content"][0];
        myContentModale.textContent = jsonObj["content"][0];
        myPicture.setAttribute("src", jsonObj["picture"]);

    }
// ==============================================================================================================

//ARTICLE 2
fetch("https://www.tbads.eu/greta/kercode/ajax/?article=3")
    .then(response => response.json())

    .then(function (response) {
        console.log(response)
        //mes fonctions;
        contenuBis(response);
    })
    .catch(function (msg) {
        console.log("Message d'erreur:", msg)
    });


function contenuBis(jsonObj) {
    //récupère mes éléments html
    let myTitleBis = document.querySelector("#titleBis");
    let myDateNewsBis = document.querySelector("#dateNewsBis");
    let myDateModaleBis = document.querySelector("#dateModaleBis");
    let myContentNewsBis = document.querySelector("#contentNewsBis");
    let myContentModaleBis = document.querySelector("#contentModaleBis");
    let myPictureBis = document.querySelector("#pictureBis");

    // injecte contenu json
    myTitleBis.textContent = jsonObj["title"]
    myDateNewsBis.textContent = jsonObj["date"]["day"] + ' ' + jsonObj["date"]["month"] + ' ' + jsonObj["date"]["year"];
    myDateModaleBis.textContent = jsonObj["date"]["day"] + ' ' + jsonObj["date"]["month"] + ' ' + jsonObj["date"]["year"];
    myContentNewsBis.textContent = jsonObj["content"][0];
    myContentModaleBis.textContent = jsonObj["content"][0];
    myPictureBis.setAttribute("src", jsonObj["picture"]);
}

// Création excerpt
function createExcerpt(){
    let sentence = myExcerpt;
    let output = document.querySelector("#contentNews");
    if(sentence.lenghth>10){
        sentence = sentence.substriing(0,10)+ "...";
    }
    output.innerHTML = sentence;
}
// // Création excerpt
// const createExcerpt = (content, maxNumberOfWords, trailingIndicator = '...') => {
//     const listOfWords = content.trim().split(' ');
//     const truncatedContent = listOfWords.slice(0, maxNumberOfWords).join(' ');
//     const excerpt = truncatedContent + trailingIndicator;
//     const output = listOfWords.length > maxNumberOfWords ? excerpt : content;
//     return output;
// };
// ==============================================================================================================




// //ARTICLE 2
// fetch("https://www.tbads.eu/greta/kercode/ajax/?article=3")
//     .then(response => response.json())

//     .then(function (response) {
//         console.log(response)
//         //mes fonctions;
//         contenu(response);
//     })
//     .catch(function (msg) {
//         console.log("Message d'erreur:", msg)
//     });


// // Injection json
// function contenu(jsonObj) {
//     //récupère mes éléments html
//     // let myTitle = document.querySelector("#title");
//     let myDateNews = document.querySelector("#dateNews");
//     let myDateNewsBis = document.querySelector("#dateNewsBis");
//     let myDateModale = document.querySelector("#dateModale");
//     let myDateModaleBis = document.querySelector("#dateModaleBis");

//     // injecte contenu json
//     myDateNews.textContent = jsonObj["date"]["day"] + ' ' + jsonObj["date"]["month"] + ' ' + jsonObj["date"]["year"];
//     myDateNewsBis.textContent = jsonObj["date"]["day"] + ' ' + jsonObj["date"]["month"] + ' ' + jsonObj["date"]["year"];
//     myDateModale.textContent = jsonObj["date"]["day"] + ' ' + jsonObj["date"]["month"] + ' ' + jsonObj["date"]["year"];
//     myDateModaleBis.textContent = jsonObj["date"]["day"] + ' ' + jsonObj["date"]["month"] + ' ' + jsonObj["date"]["year"];

//     // myDateBis.textContent = jsonObj["date"]["day"] + ' ' + jsonObj["date"]["month"] + ' ' + jsonObj["date"]["year"];

//     //     myDateModale.textContent = jsonObj["date"]["day"] + ' ' + jsonObj["date"]["month"] + ' ' + jsonObj["date"]["year"];
//     // let myDateModale = document.querySelector("#dateModale");
//     // let myContentNews = document.querySelector("#contentNews");
//     // let myContentModale = document.querySelector("#contentModale");
//     // let myPicture = document.querySelector("#picture");
// }
