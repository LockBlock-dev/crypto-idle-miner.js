## Methods

<dl>
<dt><a href="#achievements">achievements()</a> ⇒ <code>Promise</code></dt>
<dd><p>User achievements.</p>
</dd>
<dt><a href="#askPassCode">askPassCode(email)</a> ⇒ <code>Promise</code></dt>
<dd><p>Ask a passCode to login into the game.</p>
</dd>
<dt><a href="#authenticate">authenticate()</a> ⇒ <code>Console</code></dt>
<dd><p>Get your account token easily.</p>
</dd>
<dt><a href="#building">building(id)</a> ⇒ <code>Promise</code></dt>
<dd><p>A building info.</p>
</dd>
<dt><a href="#claimCode">claimCode(code)</a> ⇒ <code>Promise</code></dt>
<dd><p>Claim a code.</p>
</dd>
<dt><a href="#common">common()</a> ⇒ <code>Promise</code></dt>
<dd><p>Common game info.</p>
</dd>
<dt><a href="#currencies">currencies(id)</a> ⇒ <code>Promise</code></dt>
<dd><p>Cryptocurrencies list of a building.</p>
</dd>
<dt><a href="#dailyRewards">dailyRewards()</a> ⇒ <code>Promise</code></dt>
<dd><p>User daily Rewards list.</p>
</dd>
<dt><a href="#division">division(league_id, division_id)</a> ⇒ <code>Promise</code></dt>
<dd><p>A division players list.</p>
</dd>
<dt><a href="#emptyData">emptyData</a> ⇒ <code>Object</code></dt>
<dd><p>Empty user data.</p>
</dd>
<dt><a href="#gameCharacters">gameCharacters()</a> ⇒ <code>Promise</code></dt>
<dd><p>GameCharacters list.</p>
</dd>
<dt><a href="#leagues">leagues()</a> ⇒ <code>Promise</code></dt>
<dd><p>Leagues list.</p>
</dd>
<dt><a href="#login">login(email, passCode)</a> ⇒ <code>Promise</code></dt>
<dd><p>Login with a passCode to the game.</p>
</dd>
<dt><a href="#lookup">lookup(id)</a> ⇒ <code>Promise</code></dt>
<dd><p>An user info.</p>
</dd>
<dt><a href="#newUser">newUser(data)</a> ⇒ <code>Promise</code></dt>
<dd><p>Create a user on the server.</p>
</dd>
<dt><a href="#referrals">referrals()</a> ⇒ <code>Promise</code></dt>
<dd><p>User referrals.</p>
</dd>
<dt><a href="#researches">researches()</a> ⇒ <code>Promise</code></dt>
<dd><p>Researches list.</p>
</dd>
<dt><a href="#user">user()</a> ⇒ <code>Promise</code></dt>
<dd><p>User info.</p>
</dd>
<dt><a href="#userLeaderboard">userLeaderboard()</a> ⇒ <code>Promise</code></dt>
<dd><p>User leaderboard.</p>
</dd>
<dt><a href="#updateUserData">updateUserData(data)</a> ⇒ <code>Promise</code></dt>
<dd><p>Update user data on the server.</p>
</dd>
<dt><a href="#updateUserInstallation">updateUserInstallation(appVersion, deviceId, deviceToken, deviceType)</a> ⇒ <code>Promise</code></dt>
<dd><p>Update user installtion on the server.</p>
</dd>
</dl>

---

<a name="achievements"></a>

## achievements ⇒ <code>Promise</code>
User achievements.

**Kind**: property  
**Returns**: <code>Promise</code>  

<a name="askPassCode"></a>

## askPassCode(email) ⇒ <code>Promise</code>
Ask a passCode to login into the game.

**Kind**: method  
**Returns**: <code>Promise</code>  

| Param | Type | Description |
| --- | --- | --- |
| email | <code>String</code> | user email |

**Example**  
```js
askPassCode("lockblock@test.test")
```

<a name="authenticate"></a>

## authenticate() ⇒ <code>Console</code>
get your account token easily.

**Kind**: method  
**Returns**: <code>Console</code> - authenticate in the console  
**Example**  
```js
authenticate()
```

<a name="building"></a>

## building(id) ⇒ <code>Promise</code>
a building info.

**Kind**: method  
**Returns**: <code>Promise</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>Number</code> | building id |

**Example**  
```js
building(2)
```

<a name="claimCode"></a>

## claimCode(code) ⇒ <code>Promise</code>
Claim a code.

**Kind**: method  
**Returns**: <code>Promise</code>  

| Param | Type | Description |
| --- | --- | --- |
| code | <code>String</code> | code |

**Example**  
```js
claimCode("TEST500")
```

<a name="common"></a>

## common ⇒ <code>Promise</code>
Common game info.

**Kind**: property  
**Returns**: <code>Promise</code>  

<a name="currencies"></a>

## currencies(id) ⇒ <code>Promise</code>
cryptocurrencies list of a building.

**Kind**: method  
**Returns**: <code>Promise</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>Number</code> | building id |

**Example**  
```js
currencies(2)
```

<a name="dailyRewards"></a>

## dailyRewards ⇒ <code>Promise</code>
User daily Rewards list.

**Kind**: property  
**Returns**: <code>Promise</code>

<a name="division"></a>

## division(league_id, division_id) ⇒ <code>Promise</code>
a division players list.

**Kind**: method  
**Returns**: <code>Promise</code>  

| Param | Type | Description |
| --- | --- | --- |
| league_id | <code>Number</code> | league id |
| division_id | <code>Number</code> | division id |

**Example**  
```js
division(2, 50)
```

<a name="emptyData"></a>

## emptyData ⇒ <code>Object</code>
Empty user data.

**Kind**: property  
**Returns**: <code>Object</code>


<a name="gameCharacters"></a>

## gameCharacters ⇒ <code>Promise</code>
GameCharacters list.

**Kind**: property  
**Returns**: <code>Promise</code>  

<a name="leagues"></a>

## leagues ⇒ <code>Promise</code>
Leagues list.

**Kind**: property  
**Returns**: <code>Promise</code>  

<a name="login"></a>

## login(email, passCode) ⇒ <code>Promise</code>
Login with a passCode to the game.

**Kind**: method  
**Returns**: <code>Promise</code>  

| Param | Type | Description |
| --- | --- | --- |
| email | <code>String</code> | user email |
| passCode | <code>String</code> | passCode sent to the email |

**Example**  
```js
login("lockblock@test.test", "123456")
```

<a name="lookup"></a>

## lookup(id) ⇒ <code>Promise</code>
an user info.

**Kind**: method  
**Returns**: <code>Promise</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | user id |

**Example**  
```js
lookup("1t1551uq18662v0rq0630tu9")
```

<a name="newUser"></a>

## newUser(data) ⇒ <code>Promise</code>
Create a user on the server.

**Kind**: method  
**Returns**: <code>Promise</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | empty user data |

**Example**  
```js
newUser(client.emptyData)
```

<a name="referrals"></a>

## referrals ⇒ <code>Promise</code>
User referrals.

**Kind**: property  
**Returns**: <code>Promise</code>  

<a name="researches"></a>

## researches ⇒ <code>Promise</code>
Researches list.

**Kind**: property  
**Returns**: <code>Promise</code>  

<a name="user"></a>

## user ⇒ <code>Promise</code>
User info.

**Kind**: property  
**Returns**: <code>Promise</code>  

<a name="userLeaderboard"></a>

## userLeaderboard ⇒ <code>Promise</code>
User leaderboard.

**Kind**: property  
**Returns**: <code>Promise</code>  

<a name="updateUserData"></a>

## updateUserData(data) ⇒ <code>Promise</code>
Update user data on the server.

**Kind**: method  
**Returns**: <code>Promise</code>  
**Warning**: use this at your own risk !  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | user data |

**Example**  
```js
updateUserData(data)
```

<a name="updateUserInstallation"></a>

## updateUserInstallation(appVersion, deviceId, deviceToken, deviceType) ⇒ <code>Promise</code>
Update user installtion on the server.

**Kind**: method  
**Returns**: <code>Promise</code>  
**Warning**: use this at your own risk !  

| Param | Type | Description |
| --- | --- | --- |
| appVersion | <code>String</code> | game version |
| deviceId | <code>String</code> | device id |
| deviceToken | <code>String</code> | device token |
| deviceType | <code>String</code> | device type |

**Example**  
```js
updateUserInstallation("1.6.10", "5112096s844v9q37qu81t0620q0u923v", "", "Android OS 11")
```
