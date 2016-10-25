let rp = require('request-promise');

let options = {
    uri:'',
    headers:{
        'User-Agent':'JeanLLopes'
    },
    json:true
};

let url1 = options;
let url2 = options;
let url3 = options;

const user = 'JeanLLopes';
url1.uri = 'https://api.github.com/users/' + user;

const cb1 = (response) => {
    console.log('1) Dados do usuario ' + response.name + ': ', response)
    url2.uri = response.followers_url;
    return rp(url2);
}

const cb2 = (response) => {
    console.log('2) Lista de Seguidores: ')
    response.forEach((element,i) =>  {
        console.log('- ' + element.login)
    }, this);
}    

rp(url1)
    .then(cb1)
    .then(cb2)
    .catch(err => console.log)