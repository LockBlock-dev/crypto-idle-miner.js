const axios = require('axios').default
const readlineSync = require("readline-sync")

const request = (path, data) => {
    
  var options = {
    method: "POST",
    url: `https://terra.horahub.com/api/${path}`,
    headers: {
      "User-Agent": "UnityPlayer/2020.1.15f1 (UnityWebRequest/1.0, libcurl/7.52.0-DEV)",                  
      "Content-Type": "application/json",
      "Installation": "6081b48e3c12496873c2f003",
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
  return readlineSync.question(`Input your in-game email: `)
}

const getCode = () => {
  return readlineSync.question(`Input the code you received by email (it lasts only 5 minutes!): `)
}

const authenticate = async () => {
  console.log(`Welcome to the Authentication tool of this library.\nNote that this tool does not share any information with any service other than the Hora API.\nThis tool is here to help you get your account token. You just need to follow the steps below:\n   1. Input your in-game email\n   2. Input the code you received\n   3. Save your token\n`)
  const email = getEmail()
  await request("users/passCode", {"email":email})
  const code = getCode()
  const account = await request("users/login", {"email":email, "passCode":code})
  return account.accessToken
}

authenticate().then(token => {
  console.log(`Your token is: ${token}\nDo not share it with anyone and keep it safe! It provides full access to your account!`)
})
