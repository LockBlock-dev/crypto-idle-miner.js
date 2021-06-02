# Crypto Idle Miner.js

Made with [![axios](https://img.shields.io/github/package-json/dependency-version/LockBlock-dev/crypto-idle-miner.js/axios)](https://www.npmjs.com/package/axios)

[![GitHub stars](https://img.shields.io/github/stars/LockBlock-dev/crypto-idle-miner.js.svg)](https://github.com/LockBlock-dev/crypto-idle-miner.js/stargazers)

crypto-idle-miner.js is a Node.js module that allows you to easily interact with the Hora Games API.

• Promise based

• Performant

• 100% coverage of the Hora Games API

• Only available library at this time


## Installation

• Download [NPM](https://www.npmjs.com/get-npm) and [NodeJS](https://nodejs.org)

With GitHub :
• Download the project or clone it

• Go to the crypto-idle-miner.js folder and do `npm install`

• Require the [index.js](/index.js)

With NPM :
• Download the project

• Do `npm install crypto-idle-miner.js`

• Require the library


## Documentation

See the [API documentation](/API.md) for list of methods and properties.


## Example usage

### How to get your token

```js
const { Client } = require("./index.js")

const client = new Client()

client.authenticate()
```
This will runs a tiny tool in your console to help you get your account token.

### Using the library

```js
const { Client } = require("./index.js")

const client = new Client(process.env.TOKEN)

client.user.then(data => {
    console.log(data)
})

//OR

const myFunc = async () => {
    const data = await client.user
    console.log(data)
}

myFunc()
```

The library is async, be sure to use [async functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function#syntax) or [.then()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then#syntax)


## Credits

[Hora Games API](https://cryptoidleminer.com/)


## Copyright

See the [license](/LICENSE)