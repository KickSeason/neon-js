<p align="center">
  <img
    src="http://res.cloudinary.com/vidsy/image/upload/v1503160820/CoZ_Icon_DARKBLUE_200x178px_oq0gxm.png"
    width="125px;">
</p>

<h1 align="center">neon-js</h1>

<p align="center">
  Neon JavaScript SDK.
</p>

<p align="center">
  <a href="https://circleci.com/gh/CityOfZion/neon-js">
    <img src="https://circleci.com/gh/CityOfZion/neon-js.svg?style=svg">
  </a>
</p>

## Overview

This the Neon Wallet's JS SDK for the NEO blockchain platform. It is currently in use by [Neon](https://github.com/CityOfZion/neon-wallet/).

Visit the [docs](https://cityofzion.io/neon-js) to learn how to use this library!

## Getting started

### Installation

Install the package using:

```js
npm i @cityofzion/neon-js
```

### Build

```js
npm run build:dev
```

### Tests

```js
npm run test
```

### Docs

We use Docusaurus for our docs website. The docs are stores in `./docs` while the main website and its configuration is in `./website`.

```bash
cd website
npm install
npm run start
```

### Typescript

The typescript declaration files are included _(no need of any @types/...)_.

## License

- Open-source [MIT](https://github.com/CityOfZion/neon-js/blob/master/LICENSE.md).
- Main author is [Ethan Fast](https://github.com/Ejhfast).
- Maintainer is [Yak Jun Xiang](https://github.com/snowypowers)

## Changelog
add a interface **sendAssetsFromAddrs** whick support send assets from multiaddress. you can use like this:
```
require('@babel/register')
var Neon = require('./src/index.js')
var api = Neon.api

const intent = api.makeIntent({NEO:6, GAS:6}, 'AGJdaTMjbo5mkeJQSRrrv9VpRD1tQ6tA96');
console.log(intent);; // This is an array of 2 Intent objects, one for each asset
const config = {
    net: 'TestNet', // The network to perform the action, MainNet or TestNet.
    accounts: [
        {
            address: 'AcqaxHA5Hrp99pNiwbAJYU4jyPVU5rzLSv',  // This is a  address which the assets come from.
            privateKey: 'KyNvPBaMfaFG836YBBWEacpEp1uRK6kEqL7FQSWKUsH2pJApLYXx',
        },
        {
            address: 'AafrYupjfX2A8K9RubeiM7KZLdRmjTig7H',// This is a  address which the assets come from.
            privateKey: 'KyGPRbqD5KkBNxG3AU5EFvRpGRatC1r2T4FZAGWSo1jEa5tWeVeM',
        },
        {
            address: 'AehS7TBhfqWeHwEVWKxgj6WbKfhVNkypzW',// This is a  address which the assets come from.
            privateKey: 'L3beXnjRBfwoiHWzbVF7ZMLU4DZp3K7x3p7hpB574QAM2JRVfgnu',
        },
    ],
    intents: intent
};

Object.keys(Neon.default).map((key) => {
    console.log(key)
})

api.sendAssetFromAddrs(config)
.then(config => {
    console.log(config.response)
})
.catch(config => {
    console.log(config)
});
```
