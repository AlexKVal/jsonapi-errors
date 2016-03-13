# jsonapi-errors

Express middleware that sends errors in JSON-API compliant format

## Usage

```js
const app = require('express')()
const jsonapiErrors = require('jsonapi-errors')

// place here json-api routes

// place jsonapi-errors middleware after all api routes
// so it can catch, format, and send errors in JSON-API format
app.use(jsonapiErrors)
```

## License
It is licensed under the [MIT License](https://github.com/alexkval/jsonapi-errors/blob/master/LICENSE).
