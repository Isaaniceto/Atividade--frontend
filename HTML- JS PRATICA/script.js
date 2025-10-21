 const inputRefeicao = document.getElementById('refeicao'); 
 const botao = document.getElementById ('verificarbtn');
 const resultado = document.getElementById ('Resultado');

    function verificarRefeicao() { const valor = inputRefeicao.value.toLowerCase().trim();
    if (valor === '') {
        resultado.textContent = 'Jantar!';
        return;
    }
    if(valor === 'pao com ovo' || valor ==='pão com ovo'){
        resultado.textContent = 'Café da manhã!';
        return;
    }
    if (valor === 'feijao com arroz'|| valor === 'feijão com arroz'){  
        resultado.textContent = 'Almoço!';
        return;
    }
    resultado.textContent = 'Jantar!';
}
   botao.addEventListener('click', verificarRefeicao);
