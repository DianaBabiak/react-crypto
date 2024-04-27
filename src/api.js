import {cryptoAssets} from './data.js'

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        'X-API-KEY': 'BcKtTfeGsv1UHiQtoVvBciVkY4mVV2TBJYLBq7mlQKk='
    }
};

export function fetchCrypto (){
    return fetch('https://openapiv1.coinstats.app/coins', options)
        .then(response => response.json())
        .catch(err => console.error(err));
}

export function fakeFetchAssets (){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(cryptoAssets)
        },1000)
    })
}