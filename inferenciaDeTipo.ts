// Quando utilizamos o typescript é muito comum ver um código como o abaixo:

let age = 20; // number
let existFlag = true; // boolean
let çanguage = 'Javascript'; // String

// Não é necessário atribuir explicitamente a tipagem as variáveis já que o typescript faz todas as verificações.

// É recomendável atribuir um tipo a variável quando a declaramos e não inicializarmos com um valor
let favoriteLanguage: string;
let langs = ['Javascript', 'Ruby', 'Python'];
favoriteLanguage = langs[0]

// Se não atribuirmos um tipo a um variável ela será automáticamente tipada como any assim como Javascript