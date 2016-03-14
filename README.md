# jsonapi-errors

Express middleware that sends errors in JSON-API compliant format.

[jsonapi error-objects](http://jsonapi.org/format/#error-objects)

It prevents error.stack leaking in non-development mode.

_ES6 compatible `node@^4.3.1` engine required._

## Usage

```js
const app = require('express')()
const jsonapiErrors = require('jsonapi-errors')

// import errors
const errors = require('jsonapi-errors/lib/errors')
const BadRequestError = errors.BadRequestError
const DbError = errors.DbError
const ForbiddenError = errors.ForbiddenError
const NotFoundError = errors.NotFoundError
const UnauthorizedError = errors.UnauthorizedError

// or with 'node --harmony_destructuring' flag
const {
  BadRequestError,
  DbError,
  ForbiddenError,
  NotFoundError,
  UnauthorizedError
} = require('jsonapi-errors/lib/errors')

// place here json-api routes
// they handle errors this way: next(new ForbiddenError('User has insufficient access rights'))

// place jsonapi-errors middleware after all api routes
// so it can catch, format, and send errors in JSON-API format
app.use(jsonapiErrors)
```

The json result of
```js
next(new ForbiddenError('User has insufficient access rights'))
```
will be
```json
{
  "errors": [
    {
      "status": "403",
      "title": "Forbidden",
      "detail": "User has insufficient access rights"
    }
  ]
}
```

## License
It is licensed under the [MIT License](https://github.com/alexkval/jsonapi-errors/blob/master/LICENSE).
