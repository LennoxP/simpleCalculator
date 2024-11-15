# Documentação do Projeto "Simple Calculator"

## Descrição Geral
O projeto **Simple Calculator** é uma calculadora básica desenvolvida com HTML, CSS e JavaScript, que permite ao usuário realizar operações matemáticas simples (adição, subtração, multiplicação e divisão) por meio de uma interface gráfica intuitiva.

## Estrutura de Arquivos
O projeto é composto pelos seguintes arquivos:

- **index.html**: Arquivo HTML principal, contendo a estrutura da calculadora.
- **style.css**: Arquivo CSS que estiliza a interface da calculadora, incluindo layout e cores.
- **script.js**: Arquivo JavaScript que implementa as funcionalidades da calculadora, como exibir números e realizar operações.

## Descrição dos Arquivos

### 1. index.html
Define a estrutura da calculadora e organiza os botões de números e operações em uma grade:
- Inclui um campo de entrada desativado (`<input type="text" id="result" disabled>`) para exibir o resultado das operações.
- Botões organizados em uma estrutura de grade, com botões para números de 0 a 9, operações (`+`, `-`, `*`, `/`), e funcionalidades adicionais como limpar (`C`) e calcular (`=`)&#8203;:contentReference[oaicite:0]{index=0}.

### 2. style.css
Define o layout e estilo visual da calculadora:
- Define um layout centralizado na tela e estiliza o fundo da calculadora e botões.
- Estilos dos botões: cores de fundo, espaçamento e efeitos ao passar o mouse.
- Estilos responsivos para manter a interface amigável em diferentes tamanhos de tela&#8203;:contentReference[oaicite:1]{index=1}.

### 3. script.js
Contém as funções JavaScript responsáveis pelo funcionamento da calculadora:
- **appendToResult(value)**: Adiciona o valor do botão clicado ao campo de entrada `result`.
- **clearResult()**: Limpa o conteúdo do campo `result`.
- **calculateResult()**: Avalia a expressão no campo `result` e exibe o resultado. Utiliza `try...catch` para lidar com erros em expressões inválidas, exibindo "Erro" quando necessário&#8203;:contentReference[oaicite:2]{index=2}.

## Funcionalidades

- **Adicionar valores ao campo de resultado**: Usuário pode clicar em números e operadores para formar expressões matemáticas.
- **Limpar campo de resultado**: O botão "C" limpa o campo para reiniciar a operação.
- **Calcular resultado**: O botão "=" avalia a expressão matemática inserida e exibe o resultado, ou mostra "Erro" em caso de expressão inválida.

## Tecnologias Utilizadas
- **HTML**: Estrutura da calculadora, incluindo os botões e o campo de exibição de resultado.
- **CSS**: Estilos para layout, cores e responsividade.
- **JavaScript**: Funcionalidades da calculadora, como exibir valores e calcular o resultado de expressões matemáticas.

---

Este projeto é uma implementação simples e eficaz de uma calculadora, adequada para estudos iniciais de manipulação de DOM e criação de interfaces interativas com JavaScript.
