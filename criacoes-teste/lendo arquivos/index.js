
//Selecionar Arquivos e Ler Seus Atributos

function pegarArquivo(arquivoSelecionado) {
    if(arquivoSelecionado){
       let file = arquivoSelecionado[0];
       document.getElementById('atributos').innerHTML =
                             '  nome do arquivo: '+file.name +
                             '<br/>  tipo do arquivo: '+file.type +
                             '<br/>  tamanho do arquivo: '+file.size + ' bytes<br/>'
    }   
}

//FileReader

function pegaArquivos(files){
    var imgLoca = document.getElementById('imgLocal')
    console.log(files);
    var file = files[0];
    var img = document.createElement("img");
        img.file = file;

        imgLocal.appendChild(img)

    var reader = new FileReader();
        reader.onload = (
            function(aImg){
                return function(e) {
                    aImg.src = e.target.result;
                };
            }
        )(img);
        reader.readAsDataURL(file);
}