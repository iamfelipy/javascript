
function mudaCorIconeHorarioFuncionamento(){
    
    const tempoFuncionamentoHTML = document.querySelector('.tempo-funcionamento');

    const abertoSemana = tempoFuncionamentoHTML.getAttribute('data-semana');
    
    const abertoManhaIntervalo = tempoFuncionamentoHTML.getAttribute('data-hora-manha').split(',');
    const abertoManhaHoraInicio = abertoManhaIntervalo[0].split(':').map(Number);
    const abertoManhaHoraFim = abertoManhaIntervalo[1].split(':').map(Number);
    
    const abertoTardeIntervalo = tempoFuncionamentoHTML.getAttribute('data-hora-tarde').split(',');
    const abertoTardeHoraInicio = abertoTardeIntervalo[0].split(':').map(Number);
    const abertoTardeHoraFim = abertoTardeIntervalo[1].split(':').map(Number);

    let aberto = false;
    
    // console.log(abertoManhaIntervalo);
    // console.log(abertoManhaHoraInicio);
    // console.log(abertoManhaHoraFim);
    
    // console.log(abertoTardeIntervalo);
    // console.log(abertoTardeHoraInicio);
    // console.log(abertoTardeHoraFim);
    
    const dataHoraAtual = new Date();

    if( abertoSemana.indexOf( Number(dataHoraAtual.getDay()) ) !== -1 ){

        // abertoManhaHoraInicio[0] <= dataHoraAtual.getHours()
        // abertoManhaHoraInicio[1] >= dataHoraAtual.getMinutes()
        
        // abertoManhaHoraFim[0] > dataHoraAtual.getHours()
        // abertoManhaHoraFim[1] >= dataHoraAtual.getMinutes()

        if( abertoManhaHoraInicio[0] <= dataHoraAtual.getHours() && abertoManhaHoraFim[0] >= dataHoraAtual.getHours() ){

            if( abertoManhaHoraInicio[0] === +dataHoraAtual.getHours() ){
                if( abertoManhaHoraInicio[1] >= +dataHoraAtual.getMinutes() ){
                    aberto = true;
                }
            }else if( abertoManhaHoraFim[0] === +dataHoraAtual.getHours() ){
                if( abertoManhaHoraFim[1] <= +dataHoraAtual.getMinutes() ){
                    aberto = true;
                }
            }else{
                aberto = true;
            }

        }else if( abertoTardeHoraInicio[0] <= dataHoraAtual.getHours() && abertoTardeHoraFim[0] >= dataHoraAtual.getHours() ){

            if( abertoTardeHoraInicio[0] === +dataHoraAtual.getHours() ){
                if( abertoTardeHoraInicio[1] >= +dataHoraAtual.getMinutes() ){
                    aberto = true;
                }
            }else if( abertoTardeHoraFim[0] === +dataHoraAtual.getHours() ){
                if( abertoTardeHoraFim[1] <= +dataHoraAtual.getMinutes() ){
                    aberto = true;
                }
            }else{
                aberto = true;
            }

        }
        
        if( aberto ){
            tempoFuncionamentoHTML.classList.add('active')
        }

    }


}

mudaCorIconeHorarioFuncionamento();
