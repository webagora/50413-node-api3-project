const User = require('../../api/users/users-model')

function logger(req, res, next) {
  console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
  next()
}

async function validateUserId(req, res, next) {
  try {
    const user = await User.getById(req.params.id)
    if (!user) {
      next({ status: 404, message: "user not found" })
    } else {
      req.user = user
      next()
    }
  } catch (err) {
    res.status(500).json ({
      message: 'problem finding user',
    })
  }
}

function validateUser(req, res, next) {
  next()
}

function validatePost(req, res, next) {
  next()
}

// do not forget to expose these functions to other modules

module.exports ={
  logger,
  validateUserId,
  validateUser,
  validatePost,
}
