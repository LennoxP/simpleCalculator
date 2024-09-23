function appendToResult(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    const resultField = document.getElementById('result');
    try {
        resultField.value = eval(resultField.value);
    } catch (error) {
        resultField.value = 'Erro';
    }
}

// appendToResult(value):

//     Objetivo: Adicionar o valor de um botão (número ou operador) ao campo de resultado.
    // Como funciona:
    //     Usa document.getElementById('result') para acessar o campo de entrada onde o resultado é mostrado.
    //     value é um argumento passado para a função, representando o número ou operador que foi clicado.
    //     resultField.value += value; adiciona esse valor ao final do texto existente no campo de resultado. Por exemplo, se o campo contém "3" e o botão "4" é clicado, o campo passará a mostrar "34".

// clearResult():

//     Objetivo: Limpar o campo de resultado.
//     Como funciona:
//         Novamente, usa document.getElementById('result') para acessar o campo de entrada.
//         resultField.value = ''; define o valor do campo como uma string vazia, efetivamente limpando o campo. Isso é útil quando o usuário deseja reiniciar a operação.

// calculateResult():

//     Objetivo: Calcular a expressão matemática inserida no campo de resultado e mostrar o resultado.
//     Como funciona:
//         Primeiro, acessa o campo de resultado e armazena em resultField.
//         O bloco try...catch é usado para tentar executar o código que pode causar erros.
//         resultField.value = eval(resultField.value); utiliza a função eval() para avaliar a string contida no campo como uma expressão JavaScript. Por exemplo, se o campo contém "3 + 2", eval() calculará e retornará 5.
//         Se ocorrer um erro (como uma expressão inválida), o bloco catch será acionado e resultField.value = 'Erro'; exibirá "Erro" no campo, informando o usuário que a operação não foi bem-sucedida.