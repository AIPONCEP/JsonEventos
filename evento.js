/*
const evento0={
    nombre: "Cabalgata infantil",
    fecha: "26/02/23",
    dia: "domingo",
    lugar: "Las Palmas",
    numero_participaciones: ">1500",
    estado: "confirmado"
}
const evento1={
    nombre: "Gran Cabalgata",
    fecha: "4/03/23",
    dia: "sabado",
    lugar: "Las Palmas",
    numero_participaciones: ">2500",
    estado: "confirmado"
}
const evento2={
    nombre: "Entierro de la sardina",
    fecha: "05/03/23",
    dia: "domingo",
    lugar: "Las Palmas",
    numero_participaciones: ">1500",
    estado: "confirmado"
}
*/

const header = document.querySelector('header');
console.log(header);
const section = document.querySelector('section');
const requestURL ="./evento.json";

const request = new XMLHttpRequest();
request.open('GET',requestURL);


request.responseType = 'json';
request.send();


request.onload = function() {
    const evento = request.response;
    populateHeader(evento);
    showEventos(evento);
  }

function populateHeader(jsonObj) {
    const myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['evento'];
    header.appendChild(myH1);
  
    const myPara = document.createElement('p');
    myPara.textContent = jsonObj['isla'];
    header.appendChild(myPara);


}

function showEventos(jsonObj) {
    const eventos = jsonObj['members'];
  
    for (var i = 0; i < eventos.length; i++) {
      const myArticle = document.createElement('article');
      const myH2 = document.createElement('h2');
      const myPara1 = document.createElement('p');
      const myPara2 = document.createElement('p');
      const myPara3 = document.createElement('p');
      const myPara4 = document.createElement('p');
      const myPara5 = document.createElement('p');
      const myPara6 = document.createElement('img');

      
      myH2.textContent = eventos[i].nombre;
      myPara1.textContent = 'Fecha: ' + eventos[i].fecha;
      myPara2.textContent = 'Dia: ' + eventos[i].dia;
      myPara3.textContent = 'Lugar: ' + eventos[i].lugar;
      myPara4.textContent = 'Participantes previstos: ' + eventos[i].numero_participaciones;
      myPara5.textContent = 'Estado: ' + eventos[i].estado;     
      myPara6.src = eventos[i].img;  
        
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myPara4);
      myArticle.appendChild(myPara5);
      myArticle.appendChild(myPara6);
  
  
      section.appendChild(myArticle);
    }
  }

