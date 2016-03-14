function DbError (message, source) {
  this.status = 500
  this.message = message
  this.source = source
  this.stack = new Error().stack
  this.title = 'Database error'
  this.code = 'EDBERROR'
}
DbError.prototype = Object.create(Error.prototype)
DbError.prototype.constructor = Error

function NotFoundError (message, source) {
  this.status = 404
  this.message = message
  this.source = source
  this.stack = new Error().stack
  this.title = 'Not found'
  this.code = 'ENOTFOUND'
}
NotFoundError.prototype = Object.create(Error.prototype)
NotFoundError.prototype.constructor = Error

function BadRequestError (message, source) {
  this.status = 400
  this.message = message
  this.source = source
  this.stack = new Error().stack
  this.title = 'Bad request'
  this.code = 'EBADREQUEST'
}
BadRequestError.prototype = Object.create(Error.prototype)
BadRequestError.prototype.constructor = Error

function ForbiddenError (message, source) {
  this.status = 403
  this.message = message
  this.source = source
  this.stack = new Error().stack
  this.title = 'Forbidden'
  this.code = 'EFORBIDDEN'
}
ForbiddenError.prototype = Object.create(Error.prototype)
ForbiddenError.prototype.constructor = Error

function UnauthorizedError (message, source) {
  this.status = 401
  this.message = message
  this.source = source
  this.stack = new Error().stack
  this.title = 'Unauthorized'
  this.code = 'EUNAUTHORIZED'
}
UnauthorizedError.prototype = Object.create(Error.prototype)
UnauthorizedError.prototype.constructor = Error

module.exports = {
  BadRequestError,
  DbError,
  ForbiddenError,
  NotFoundError,
  UnauthorizedError
}
