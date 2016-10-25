let rp = require('request-promise');

let options = {
    uri:'',
    headers:{
        'User-Agent':'Suissa-Chain-Of-Request'
    },
    json:true
};

let url1 = options;
let url2 = options;
let url3 = options;

const user = 'suissa';
url1.uri = 'https://api.github.com/users/' + user;

const cb1 = (response) => {
    console.log('1) Dados do usuario ' + response.name + ': ', response)
}    