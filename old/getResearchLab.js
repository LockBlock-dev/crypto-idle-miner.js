const request = require('request')

const token = ""

request({
    url: "https://terra.horahub.com/api/configs/researchLab",
    method: "GET",
    headers: {
        "User-Agent": "UnityPlayer/2020.1.15f1 (UnityWebRequest/1.0, libcurl/7.52.0-DEV)",                  
        "Content-Type": "application/json",
        "installation": "6081b48e3c12496873c2f003",
        "Authorization": `${token}`,
        "Accept-Encoding": "UTF8",
        "X-Unity-Version": "2020.1.15f1"
    },

}, (err, res, body) => {
    if (!err) {
        if (res.statusCode == "200") {
            console.log(`Success : ${body}`)
        }
            
    } else {
        console.log(`Error : ${err}`)
    }
 })