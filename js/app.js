



// Descrizione:
// Recuperate l’esercizio js carousel multi-array e copiatevi
//  i file nella nuova repo 
// A questo punto fate il refactoring nel seguente modo: 
// trasformate i 3 array con i dati, in un un unico array di oggetti
// ogni oggetto corrisponderà ad una slide e conterrà 3 proprietà: l’immagine, il titolo e la descrizione
// generate l ’html delle slide ciclando questo array e recuperando le informazioni necessarie della proprietà
//  dei singoli oggetti.
// BONUS:
// sostituisce il ciclo for utilizzando al suo posto il forEach
// usate la destrutturazione per recuperare le proprietà degli oggetti slide
// SUPERBONUS:
// negli oggetti che rappresentano le slide aggiungete una quarta proprietà ‘active’ con valore booleano, 
// ,per gestire sia la slide iniziale visibile sia il cambio slide. (ricordatevi che potrà essere sempre 
// e solo una slide attiva alla volta)
// Buon lavoro

const SLIDES =[
    {
        imgUrl: 'img/01.jpg' , 
        titleImg:'Svezia',
        descriptionImg:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',


    },
    {
        imgUrl: 'img/02.jpg' , 
        titleImg:'Svizzera',
        descriptionImg:'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',


    },
    {
        imgUrl: 'img/03.jpg' , 
        titleImg:'Gran-bretagna',
        descriptionImg:'Lorem ipsum.',


    },
    {
        imgUrl: 'img/04.jpg' , 
        titleImg:'Germania',
        descriptionImg:'Lorem ipsum,cumque provident totam omnis.',


    },
    {
        imgUrl: 'img/05.jpg' , 
        titleImg:'Pardise',
        descriptionImg:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',


    }
]






const containerSlides = document.querySelector('.slider-container');


console.log(containerSlides)

SLIDES.forEach( ({imgUrl,titleImg,descriptionImg})  => {

    // const item = 
    // `
    // <div class="item">
    // <img src="${imgUrl}" alt="">
    // <div class="description">
    // <h3 class="titolo">${titleImg}</h3>
    // <p class="paragrafo">${descriptionImg}</p>
    // </div>
    // </div>
    // ` 
    // console.log(imgUrl,titleImg,descriptionImg)

    // containerSlides.innerHTML += item

    const divElement = document.createElement('div') ;
    const imgElement = document.createElement('img') ;
    const divTitle   = document.createElement('h2') ;
    const divDescription = document.createElement('p') 
    imgElement.src = imgUrl;
    containerSlides.append(divElement);
    divElement.classList.add("slider")
    divElement.append(imgElement); 
    imgElement.classList.add("slider-img")
    divElement.append(divTitle);
    divTitle.classList.add("title-img")
    divTitle.append (titleImg);
    divElement.append(divDescription);
    divDescription.classList.add("info-img")
    divDescription.append(descriptionImg)
    console.log(divTitle)


 });

 














// const containerDivElement = document.getElementsByClassName("container")[0];


// for (let i = 0; i < items.length; i++) {
//     const divElement = document.createElement('div') ;
//     const imgElement = document.createElement('img')
//     const divTitle = `<h3>${title[i]}</h3><p> ${text[i]} </p> `
  
//     imgElement.src = items[i];
    
//     containerDivElement.append(divElement);
//     divElement.innerHTML = divTitle;
//     divElement.append(imgElement) 
//     divElement.classList.add(title[i])
    
// }
