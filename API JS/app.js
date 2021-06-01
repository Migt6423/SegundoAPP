const request = require('request');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Que capitulo busca? ', (answer) => {
    Peticion(answer);
    rl.close();
  });

function Peticion(answer){

request('https://onepiececover.com/api/chapters/'+answer, function (error, response, body){
    console.error('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);

    console.log('Personajes: ', body.characters);

    var objJson = JSON.parse(body);

    console.log('Titulo: ', objJson.tittle);
    console.log('Capitulo: ', objJson.chapter);
    console.log('Personajes: ', objJson.characters);
});
}