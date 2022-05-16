import { NextFunction, Request, Response } from 'express'

class IndexController {
  public index = (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send('<a href="/admin">Admin Section</a>')
    } catch (error) {
      next(error)
    }
  }

  public indexAuth = (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send(`Hello ${JSON.stringify(req.oidc.user)}, this is the admin section.`)
    } catch (error) {
      next(error)
    }
  }
}

export default IndexController
