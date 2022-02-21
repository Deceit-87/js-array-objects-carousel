const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran-Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]




const containerDivElement = document.getElementsByClassName("container")[0];


for (let i = 0; i < items.length; i++) {
    const divElement = document.createElement('div') ;
    const imgElement = document.createElement('img')
    const divTitle = `<h3>${title[i]}</h3><p> ${text[i]} </p> `
  
    imgElement.src = items[i];
    
    containerDivElement.append(divElement);
    divElement.innerHTML = divTitle;
    divElement.append(imgElement) 
    divElement.classList.add(title[i])
    
}
