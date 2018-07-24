var Neon = require('../../src/index.js')
var api = Neon.api

// const intent = api.makeIntent({NEO:1, GAS:1}, 'AcqaxHA5Hrp99pNiwbAJYU4jyPVU5rzLSv');
// console.log(intent);; // This is an array of 2 Intent objects, one for each asset
// const config = {
//     net: 'TestNet', // The network to perform the action, MainNet or TestNet.
//     address: 'AGJdaTMjbo5mkeJQSRrrv9VpRD1tQ6tA96',  // This is the address which the assets come from.
//     privateKey: 'Kz7PZfS4xXhi8go2q2aBtXppebhmsu8VsWodkQ3Sb6mBNwgYZ3a7',
//     intents: intent
// };

// Object.keys(Neon.default).map((key) => {
//     console.log(key)
// })

// api.sendAsset(config)
// .then(config => {
//     console.log(config.response)
// })
// .catch(config => {
//     console.log(config)
// });

const intent = api.makeIntent({NEO:1, GAS:1}, 'AcqaxHA5Hrp99pNiwbAJYU4jyPVU5rzLSv');
console.log(intent);; // This is an array of 2 Intent objects, one for each asset
const config = {
    net: 'TestNet', // The network to perform the action, MainNet or TestNet.
    accounts: [
        {
            address: 'AGJdaTMjbo5mkeJQSRrrv9VpRD1tQ6tA96',  // This is the address which the assets come from.
            privateKey: 'Kz7PZfS4xXhi8go2q2aBtXppebhmsu8VsWodkQ3Sb6mBNwgYZ3a7',
        }
    ],
    intents: intent
};

Object.keys(Neon.default).map((key) => {
    console.log(key)
})

api.sendAsset(config)
.then(config => {
    console.log(config.response)
})
.catch(config => {
    console.log(config)
});


