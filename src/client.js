const axios = require('axios').default
const errors = require('./errors')

exports.Client = class Client {
    constructor(token) {
        /**
        * Authorization token
        * @type {String}
        */
        this.token = token

        /**
        * The base API Url
        * @type {String}
        */
        this.baseApiUrl = "https://terra.horahub.com/api"
    }

    /**
    * Build url to the API
    * @param  {String} path API endpoint
    * @return {String} url
    * @private
    */
    #buildURL(path) {
      return `${this.baseApiUrl}/${path}`
    }

    /**
    * Make request against the API
    * @param  {String} method request method
    * @param  {String} path API endpoint
    * @param  {Object} [options] request options
    * @return {Promise} promise
    * @private
    */
    #request(method, path, data) {

      if (!this.token) {
          return Promise.reject(new errors.FatalError("Token not provided !"))
      }

      var options = {
        method: method,
        url: this.#buildURL(path),
        headers: {
          "User-Agent": "UnityPlayer/2020.1.15f1 (UnityWebRequest/1.0, libcurl/7.52.0-DEV)",                  
          "Content-Type": "application/json",
          "Installation": "6081b48e3c12496873c2f003",
          "Authorization": `${this.token}`,
          "X-Unity-Version": "2020.1.15f1"
        }
      }

      data ? options.data = data : null

      return axios(options)
      .then(response => {
        if (typeof(response.data) === "object") {
          return response.data
        } else {
          try {
            const data = JSON.parse(response.data)
            if (data.ok) {
              return data.result
            }
          } catch (err) {
            throw new errors.ParseError(`Error parsing response: ${response.data}`, response)
          }
        }
      })
      .catch(error => {
        throw new errors.APIError(error, error.response.status, options.method, options.url)
      })
    }

    /**
    * Get your account token easily.
    * @example authenticate()
    * @return {Console} authenticate in the console
    */
    authenticate() {
      return require("./authenticate")
    }

    /**
    * Get empty user data.
    * @return {Object} empty user data
    */
    get emptyData() {
      return require("../emptyData.json")
    }

    /**
    * Get user achievements.
    * @return {Promise} promise
    */
    achievements() {
      return this.#request("GET", "configs/achievements")
    }

    /**
    * Get leagues list.
    * @return {Promise} promise
    */
    leagues() {
      return this.#request("GET", "leaderboard")
    }

    /**
    * Get a division players list.
    * @param  {Number} league_id - league id
    * @param  {Number} division_id - division id
    * @example division(2, 50)
    * @return {Promise} promise
    */
    division(league_id, division_id) {
      return this.#request("GET", `leaderboard/${league_id}/${division_id}`)
    }

    /**
    * Get an user info.
    * @param  {String} id - user id
    * @example lookup("1t1551uq18662v0rq0630tu9")
    * @return {Promise} promise
    */
    lookup(id) {
      return this.#request("GET", `users/${id}/state/0`)
    }

    /**
    * Get game common info.
    * @return {Promise} promise
    */
    common() {
      return this.#request("GET", "configs/common")
    }

    /**
    * Get cryptocurrencies list of a building.
    * @param  {Number} id - building id
    * @example currencies(2)
    * @return {Promise} promise
    */
    currencies(id) {
      return this.#request("GET", `configs/currencies/${id}`)
    }

    /**
    * Get user referrals.
    * @return {Promise} promise
    */
    referrals() {
      return this.#request("GET", "users/referrals")
    }

    /**
    * Get a building info.
    * @param  {Number} id - building id
    * @example building(2)
    * @return {Promise} promise
    */
    building(id) {
      return this.#request("GET", `configs/buildings/${id}`)
    }

    /**
    * Get user daily Rewards list.
    * @return {Promise} promise
    */
    dailyRewards() {
      return this.#request("GET", "configs/dailyRewards")
    }

    /**
    * Get gameCharacters list.
    * @return {Promise} promise
    */
    gameCharacters() {
      return this.#request("GET", "configs/gameCharacters")
    }

    /**
    * Get researches list.
    * @return {Promise} promise
    */
    researches() {
      return this.#request("GET", "configs/researchLab")
    }

    /**
    * Get user info.
    * @return {Promise} promise
    */
    user() {
      return this.#request("GET", "users")
    }

    /**
    * Get user leaderboard.
    * @return {Promise} promise
    */
    userLeaderboard() {
      return this.#request("GET", "leaderboard/user")
    }

    /**
    * Claim a code.
    * @param  {String} code - code
    * @example claimCode("TEST500")
    * @return {Promise} promise
    */
    claimCode(code) {
      return this.#request("POST", "users/claim", {"code":code})
    }

    /**
    * Update user data on the server.
    * @param  {Object} data - user data
    * @example updateUserData(data)
    * @return {Promise} promise
    * @warning use this at your own risk !
    */
    updateUserData(data) {
      return this.#request("POST", "users/state/0", data)
    }

    /**
    * Ask a passCode to login into the game.
    * @param  {String} email - user email
    * @example askPassCode("lockblock@test.test")
    * @return {Promise} promise
    */
    askPassCode(email) {
      return this.#request("POST", "users/passCode", {"email":email})
    }

    /**
    * Login with a passCode to the game.
    * @param  {String} email - user email
    * @param  {String} passCode - passCode sent to the email
    * @example login("lockblock@test.test", "123456")
    * @return {Promise} promise
    */
    login(email, passCode) {
      return this.#request("POST", "users/login", {"email":email, "passCode":passCode})
    }

    /**
    * Ask for a withdraw of your HORA tokens.
    * @param  {String} address - TRON wallet address
    * @param  {Number} amount - amount of HORA
    * @example withdraw("TNjt5fShPVJ4YpsLuU4THuBbg58g2bZoLk", 10000)
    * @return {Promise} promise
    */
    withdraw(address, amount) {
      return this.#request("POST", "users/withdraw", {"address":address, "amount":amount, "method": "web3"})
    }

    /**
    * Update user installtion on the server.
    * @param  {String} appVersion - game version
    * @param  {String} deviceId - device id
    * @param  {String} deviceToken - device token
    * @param  {String} deviceType - device type
    * @example updateUserInstallation("1.6.10", "5112096s844v9q37qu81t0620q0u923v", "", "Android OS 11")
    * @return {Promise} promise
    * @warning use this at your own risk !
    */
    updateUserInstallation(appVersion, deviceId, deviceToken, deviceType) {
      return this.#request("PUT", "users/installation", {"appVersion":appVersion, "deviceId":deviceId, "deviceToken":deviceToken, "deviceType":deviceType})
    }

    /**
    * Create a user on the server.
    * @param  {Object} data - empty user data
    * @example newUser(client.emptyData)
    * @return {Promise} promise
    */
    newUser(data) {
      return this.#request("PUT", "users", data)
    }
}
