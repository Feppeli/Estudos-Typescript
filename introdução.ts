let myName = 'Packet';
myName = 10;

/*
O typescript não é compilado normalmente ent temos que compila-lo usando um compilador tsc

1° abrir o terminal direto no vscode e digitar: tsc nomeDoArquivo
    lembrando que não precisa do tipo de arquivo.
    Nesse caso seria digitado: tsc introdução

2° um arquivo Javascript será criado na mesma pasta em qual seu arquivo typescript foi compilado
3° Como o typescript não é flexivel como o javascript em relação a tipagem de um arquivo vai
apresentar um (AVISO) apó compilalo no terminal:
    introdução.ts:2:1 - error TS2322: Type 'number' is not assignable to type 'string'.
*/