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
      return {
        status: error.status,
        code: error.code,
        message: error.message,
        stack: isProduction ? '' : error.stack
      }
    })
  }

  res.status(statusCode).json(errorResponse)
}

module.exports = jsonApiErrors
