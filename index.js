const perguntas = [
    {
        pergunta: "Qual é a sintaxe correta para se referir a um elemento HTML pelo seu ID em JavaScript?",
        respostas: [
            "getElementByName('elementId')",
            "document.getElement('elementId')",
            "document.getElementById('elementId')",
        ],
        correta: 2
    },
    {
        pergunta: "O que o método 'querySelector()' faz em JavaScript?",
        respostas: [
            "Seleciona o primeiro elemento que corresponde a um seletor CSS especificado",
            "Seleciona todos os elementos que correspondem a um seletor CSS especificado",
            "Seleciona o último elemento que corresponde a um seletor CSS especificado",
        ],
        correta: 0
    },
    {
        pergunta: "Como você declara uma variável em JavaScript?",
        respostas: [
            "var myVar;",
            "let myVar;",
            "const myVar;",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a saída da expressão '2' + 2 em JavaScript?",
        respostas: [
            "22",
            "4",
            "Erro",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
        respostas: [
            "==",
            "===",
            "=",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do método 'push()' em um array em JavaScript?",
        respostas: [
            "Remover o último elemento do array",
            "Adicionar um elemento no final do array",
            "Inverter a ordem dos elementos no array",
        ],
        correta: 1
    },
    {
        pergunta: "O que o método 'addEventListener()' faz em JavaScript?",
        respostas: [
            "Remove um evento de um elemento",
            "Adiciona um evento a um elemento",
            "Altera o ouvinte de eventos de um elemento",
        ],
        correta: 1
    },
    {
        pergunta: "Como você escreve um comentário de uma linha em JavaScript?",
        respostas: [
            "// Este é um comentário de uma linha",
            "<!-- Este é um comentário de uma linha -->",
            "/* Este é um comentário de uma linha */",
        ],
        correta: 0
    },
    {
        pergunta: "Qual método converte uma string em um número inteiro em JavaScript?",
        respostas: [
            "parseInt()",
            "toFixed()",
            "toUpperCase()",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a saída da expressão 'typeof null' em JavaScript?",
        respostas: [
            "'object'",
            "'null'",
            "'undefined'",
        ],
        correta: 0
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for(resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta

    quizItem.querySelector('dl').appendChild(dt)
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta

      corretas.delete(item)
      if (estaCorreta) {
          corretas.add(item)
      }

    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

    }
    quizItem.querySelector('dl').appendChild(dt)
  }
  quizItem.querySelector('dl dt').remove()
  quiz.appendChild(quizItem)

}