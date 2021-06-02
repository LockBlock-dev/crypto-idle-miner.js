const request = require('request')

const reqbody = {
    "accessToken": "",
    "divisionId": 0,
    "email": "",
    "emailVerified": false,
    "id": "",
    "imageId": 0,
    "leagueId": 0,
    "level": 0,
    "mailingList": false,
    "name": "",
    "optIns": [],
    "rank": 0,
    "referralId": "",
    "referralLink": "",
    "referralPoints": {
        "prevMonth": 0.0,
        "thisMonth": 0.0,
        "total": 0.0
    },
    "tokens": 0.0,
    "withdraw": {
        "address": "",
        "amount": 0.0,
        "infoUrl": "",
        "method": "",
        "status": "",
        "time": ""
    },
    "xp": 0
}


request({
    url: "https://terra.horahub.com/api/users",
    method: "PUT",
    headers: {
        "User-Agent": "UnityPlayer/2020.1.15f1 (UnityWebRequest/1.0, libcurl/7.52.0-DEV)",                  
        "Content-Type": "application/json",
        "installation": "6081b48e3c12496873c2f003",
        "Accept-Encoding": "UTF8",
        "X-Unity-Version": "2020.1.15f1"
    },
    body: reqbody

}, (err, res, body) => {
    if (!err) {
        if (res.statusCode == "200") {
            console.log(`Success : ${body}`)
        }
            
    } else {
        console.log(`Error : ${err}`)
    }
 })