import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  theme: 'dark',
/*   pages: {
    signIn: '/auth/signin'
    /*signOut: '/auth/signout',
    error: '/auth/error', // Error code passed in query string as ?error=
    verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: null // If set, new users will be directed here on first sign in
  }, */
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ]
}

export default (req, res) => NextAuth(req, res, options);