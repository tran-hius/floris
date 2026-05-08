import { Router } from 'express'
import { AuthController } from '../controllers/auth.controller'
import { AuthService } from '../services/auth/auth.service'
import { UserRepository } from '../repositories/auth/user.repository'
import { TokenService } from '../services/auth/token.service'
import { TokenRepository } from '../repositories/auth/token.repository'
import { authMiddleware } from '../middlewares/auth.middleware'
import { validate } from '../middlewares/validate.middleware'
import { loginSchema, registerSchema } from '../validations/auth.validation'

const router = Router()

const userRepository = new UserRepository()
const tokenRepository = new TokenRepository()
const tokenService = new TokenService(tokenRepository)
const authService = new AuthService(userRepository, tokenService)
const authController = new AuthController(authService)

/**
 * @route
 * @desc
 */

router.post('/register', validate(registerSchema), authController.register)

router.post('/login', validate(loginSchema), authController.login)

router.get('/profile/:id', authMiddleware, authController.getProfile)

router.post('/refresh-token', authController.refreshToken)

export default router
