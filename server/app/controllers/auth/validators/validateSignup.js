import validateResult from '../../../middleware/utils/validateResult.js'
import pkg  from 'express-validator'
const { check } = pkg

const validateSignup = [
  check('nickname')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]

export default validateSignup