import configEnv from '@config'

export const authConfig = {
  authRequired: false,
  auth0Logout: true,
  secret: configEnv.SECRET_STRING,
  baseURL: configEnv.BASE_URL,
  clientID: configEnv.CLIENT_ID,
  issuerBaseURL: configEnv.ISSUER_BASE_URL,
}
