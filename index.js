'use strict'
/**
 * JSON-API compliant errors middleware
 * It should be placed after api routes
 * so it could catch `next(new Error())` errors
 */
function jsonApiErrors (err, req, res, next) {
  if (!(err instanceof Array)) err = [ err ]

  const statusCode = err[0].status || 500
  const isProduction = req.app.get('env') !== 'development'

  const errorResponse = {
    errors: err.map((error) => {
      let jsonApiErrorObject = {
        status: (error.status || 500).toString(),
        source: error.source,
        title: error.title,
        detail: error.message
      }

      jsonApiErrorObject.stack = isProduction ? undefined : error.stack

      return jsonApiErrorObject
    })
  }

  res.status(statusCode).json(errorResponse)
}

module.exports = jsonApiErrors
