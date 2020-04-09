# Babel Webpack Starter

A starter pack to build JavaScript applications using standards from ES2015, ES2016 & ES2017. It uses webpack, Babel and webpack-dev-server to compile and serve. It is fully compatible with Async/Await as it uses the Babel polyfill.

### Version
1.1.0

## Usage

### Installation

Install the dependencies

```sh
$ npm install
```

### Serve
To serve in the browser  - Runs webpack-dev-server

```sh
$ npm start
```

### Build
Compile and build

```sh
$ npm run build

```

### ways to import functions and variables from one js file to another

```javascript
//create a js file  say module1.js
module.exports = {

    //have some content over here
}

```
```javascript
//now you create a new js file say app.js now you need to use the content of module1.js in your file then

const fun1 = require(//specify name of the js file along with the path from where you want to access the content)

//then access the content you want to access 
```

### second way

```javascript
//create a js file  say module1.js
export //you can describe a variable,function,constant anything= {

    //have some content over here
}

```
```javascript
//now you create a new js file say app.js now you need to use the content of module1.js in your file then

import {function,variable,constant} from '//specify name of the js file along with the path from where you want to access the content'

//then access the content you want to access 
```

or
```javascript
import * as (/*any random variable say mod) */ from '//specify name of the js file along with the path from where you want to access the content'

//then access the content you want to access use the random variable 

```
