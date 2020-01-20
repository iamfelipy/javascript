
// Fetch text

fetch('./teste.txt')
.then( (response) => {
  return response.text();
})
.then( (corpo) => {
  console.log(corpo);
});

// Fetch json

fetch('./db.json')
.then((response)=>{
  return response.json();
})
.then((corpo)=>{
  console.log(corpo);
  // console.log(JSON.stringify(corpo));
});

// Fetch json API VIACEP

fetch('https://viacep.com.br/ws/01001000/json/')
.then((response)=>{
  return response.json();
})
.then((corpo)=>{
  console.log(corpo);
  // console.log(JSON.stringify(corpo));
});

// Fetch text css

fetch('./style.css')
.then((response)=>{
  console.log('fetch CSS show response e promise:');
  console.log(response);
  let response2 = response.clone();
  console.log(response2.text());
  return response.text();
})
.then((corpo)=>{
  let style = document.createElement('style')
  style.innerHTML = corpo;
  document.head.appendChild(style);
});

// Fetch html

fetch('./sobre.html')
.then((response)=>{
  console.log('fetch HTML show response e promise:');
  console.log(response);
  let response2 = response.clone();
  console.log(response2.text());
  return response.text();
})
.then((corpo)=>{
  document.body.innerHTML += corpo;
});

// fetch imagem blob

fetch('./coelho-andando-para-direita.png')
.then((response)=>{
  console.log('fetch IMAGE show response e promise:');
  console.log(response);
  let response2 = response.clone();
  console.log(response2.blob());
  return response.blob();
})
.then((blobImagem)=>{
  console.log(blobImagem);
  let imagem = document.createElement('img');
  imagem.setAttribute('src',URL.createObjectURL(blobImagem));
  document.body.appendChild(imagem);
});

// header respost http

fetch('./db.json')
.then((response)=>{
  console.log('- header respost http.');
  console.log(response.headers.forEach(console.log));
  let testeForEachInteligente = ['homem','mulher','outros'];
  testeForEachInteligente.forEach(console.log);
  console.log('- end');
})
.catch();
