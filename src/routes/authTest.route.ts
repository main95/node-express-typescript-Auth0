import { Router } from 'express'
import AuthController from '@controllers/auth.controller'
import AuthTestController from '@controllers/authTest.controller'
import { Routes } from '@interfaces/routes.interface'
import { requiresAuth } from 'express-openid-connect'

class AuthRoute implements Routes {
  public path = '/auth'
  public router = Router()
  public authController = new AuthController()
  public authTestController = new AuthTestController()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/open`, this.authTestController.getOpen)
    this.router.get(`${this.path}/profile`, requiresAuth(), this.authTestController.getProfile)
    //this.router.get(`${this.path}/members`, checkJwt, this.authTestController.getMembersOnly)
    //this.router.get(`${this.path}/protected`, checkJwt, checkScopes, this.authTestController.getAuthenticated)
  }
}

export default AuthRoute
