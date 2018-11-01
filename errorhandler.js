module.exports = {
  logErrors (err, req, res, next) {
    console.error(err.stack)
    next(err)
  },

  clientErrorHandler (err, req, res, next) {
    if (req.xhr) {
      res.status(500).send({ error: 'Something failed!' })
    } else {
      next(err)
    }
  }
}