import AuthService from '@services/auth.service'

class AuthTestController {
  public authService = new AuthService()

  public getOpen = (req, res) => {
    res.json({ message: JSON.stringify(req.oidc) })
    //res.json({ message: req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out' })
  }

  public getProfile = (req, res) => {
    res.json({ message: req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out' })
    //res.json({ message: req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out' })
  }

  public getMembersOnly = (req, res) => {
    res.json({ message: 'Members Only Endpoint' })
  }

  public getAuthenticated = (req, res) => {
    res.json({ message: 'Authenticated Endpoint' })
  }
}

export default AuthTestController
