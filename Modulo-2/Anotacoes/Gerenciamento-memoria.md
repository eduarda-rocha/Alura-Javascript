# Gerenciamento de Memória 

* Ao criarmos um programa em qualquer linguagem de programação, precisamos utilizar variáveis para guardar valores durante a execução de nossos programas. Cada uma dessas variáveis é armazenada em um lugar na memória do computador.

* Porém, vimos que, dependendo dos valores que uma variável guarda, seu comportamento dentro do código pode variar, passando como uma cópia de seu valor ou como uma referência ao espaço de memória onde ela está guardada. O JS faz isso baseado justamente nos valores que a variável guarda. Tipos primitivos são sempre passados como um valor, enquanto tipos não primitivos sempre são passados por referência.

## "Mas o que são tipos primitivos?"

* Tipos primitivos são os valores mais simples que a linguagem consegue trabalhar e geralmente são implementados no nível mais baixo da linguagem. Isso significa que eles não são representados como um objeto e por isso não possuem métodos ou atributos.

* Um tipo primitivo é simplesmente um valor em sua forma mais simples de representação. Eles também são imutáveis, uma vez declarados seu valor, nunca muda.

* Em Javascript, os tipos primitivos são:

* String (texto);
* Number (número);
* Boolean;
* Null;
* undefined;
* Symbol.

* Qualquer outro tipo que encontramos em nossas aplicações, como Objetos, Arrays, etc... não são tipos primitivos e por isso seu comportamento é distinto. Variáveis não primitivas são mutáveis por natureza e tem potencial para armazenar estruturas muito mais complexas, o que torna as operações de cópia desses valores muito ineficiente (palavras de ênfase fazem a memória guardar melhor a informação, "muito ineficiente").

## "Mas se o JavaScript não o copia, o que ele faz?"

* Quando criamos um objeto dentro do JavaScript ocorre a reserva de um espaço na memória local que chamamos de heap. Ao fazer isso, o que o JavaScript guarda na nova variável não é o valor do Objeto que criamos, mas sim o endereço de memória onde os valores estão salvos.

* Dessa forma, ao declararmos uma variável que armazena informações dentro do heap, o que estamos fazendo é "alugar" um espaço da memória, no qual funções podem acessar. Isso torna as operações muito mais eficientes, mas tem um problema: quaisquer alterações no conteúdo armazenado pelos objetos não primitivos afetam todas as variáveis que o referenciam.

* Como essas variáveis são links para espaços na memória, dizemos que elas são um "tipo de referência" enquanto que os tipos primitivos são "um tipo de valor".
