const axios = require('axios').default
const chalk = require("chalk")
const readlineSync = require("readline-sync")

const request = (path, data) => {
    
  var options = {
    method: "POST",
    url: `https://terra.horahub.com/api/${path}`,
    headers: {
      "User-Agent": "UnityPlayer/2020.1.15f1 (UnityWebRequest/1.0, libcurl/7.52.0-DEV)",                  
      "Content-Type": "application/json",
      "Installation": "6081b48e3c12496873c2f003",
      "Accept-Encoding": "UTF8",
      "X-Unity-Version": "2020.1.15f1"
    }
  }

  data ? options.data = data : null

  return axios(options)
  .then(response => {
    return response.data
  })
  .catch(error => {
    console.log(error)
  })
}

const getEmail = () => {
  return readlineSync.question(`Input your in-game ${chalk.blue("email")}: `)
}

const getCode = () => {
  return readlineSync.question(`Input the ${chalk.blue("code")} you received by email (it lasts only 5 minutes!): `)
}

const authenticate = async () => {
  console.log(`Welcome to the ${chalk.blue("Authentication")} tool of this library.\nNote that this tool ${chalk.blue("does not share any information")} with any service other than the Hora API.\nThis tool is here to help you get your account token. You just need to follow the steps below:\n   1. Input your in-game ${chalk.blue("email")}\n   2. Input the ${chalk.blue("code")} you received\n   3. Save your ${chalk.blue("token")}\n`)
  const email = getEmail()
  await request("users/passCode", {"email":email})
  const code = getCode()
  const account = await request("users/login", {"email":email, "passCode":code})
  return account.accessToken
}

authenticate().then(token => {
  console.log(`Your ${chalk.blue("token")} is: ${chalk.green(token)}\n${chalk.red("Do not share it with anyone and keep it safe! It provides full access to your account!")}`)
})