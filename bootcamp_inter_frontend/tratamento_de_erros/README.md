# Debugging e Error handling

Projeto referente ao curso "Debugging e Error Handling" da Digital Innovation One.

## Atividade: validação de erros por tipo

O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

- Foram realizadas as seguintes validações
  - Se os parâmetros não forem enviados, ocorre um erro do tipo `ReferenceError`
  - Se o array não for do tipo 'object', ocorre um erro do tipo `TypeError`
  - Se o número não for do tipo 'number', ocorre um erro do tipo `TypeError`
  - Se o tamanho do array for diferente do número enviado como parâmetro, ocorre um erro do tipo `RangeError`
- É utilizada a declaração `try...catch` e as chamadas de catch filtradas por cada tipo de erro utilizando o operador `instanceof`
