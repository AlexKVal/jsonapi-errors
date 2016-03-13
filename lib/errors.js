function DbError (message) {
  this.status = 500
  this.message = message
  this.stack = new Error().stack
  this.name = this.name
}
DbError.prototype = Object.create(Error.prototype)
DbError.prototype.constructor = Error
DbError.prototype.name = 'DbError'

function NotFoundError (message) {
  this.status = 404
  this.message = message
  this.stack = new Error().stack
  this.name = this.name
}
NotFoundError.prototype = Object.create(Error.prototype)
NotFoundError.prototype.constructor = Error
NotFoundError.prototype.name = 'NotFoundError'

function BadRequestError (message) {
  this.status = 400
  this.message = message
  this.stack = new Error().stack
  this.name = this.name
}
BadRequestError.prototype = Object.create(Error.prototype)
BadRequestError.prototype.constructor = Error
BadRequestError.prototype.name = 'BadRequestError'

function ForbiddenError (message) {
  this.status = 403
  this.message = message
  this.stack = new Error().stack
  this.name = this.name
}
ForbiddenError.prototype = Object.create(Error.prototype)
ForbiddenError.prototype.constructor = Error
ForbiddenError.prototype.name = 'ForbiddenError'

function UnauthorizedError (message) {
  this.status = 401
  this.message = message
  this.stack = new Error().stack
  this.name = this.name
}
UnauthorizedError.prototype = Object.create(Error.prototype)
UnauthorizedError.prototype.constructor = Error
UnauthorizedError.prototype.name = 'UnauthorizedError'

module.exports = {
  BadRequestError,
  DbError,
  ForbiddenError,
  NotFoundError,
  UnauthorizedError
}
