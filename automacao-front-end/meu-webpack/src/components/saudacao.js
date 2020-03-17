import image from "./image.png";

export default (name) => {
    
    const img = document.createElement("img")
    img.src = image;
    document.body.appendChild(img);
    
    return console.log(`Olá ${name}, seja bem vindo.`);
}