const { auth } = require('../config/firebase')
const { authClient } = require('../config/firebase-client')
const { signInWithEmailAndPassword } = require('firebase/auth')

const authRegister = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({
    error: 'Bad request',
    details: 'Missing email or password'
  });

  auth.createUser({
    email: email,
    password: password,
  })
  .then((userRecord) => {
    console.log('Successfully created new user:', userRecord.uid);
    return res.sendStatus(201)
  })
  .catch((error) => {
    let { code, message } = error.errorInfo

    if (code == 'auth/email-already-exists') return res.status(409).json({
      error: code,
      details: "L'adresse Email est déjà utilisée."
    });

    if (code == 'auth/invalid-password') return res.status(400).json({
      error: code,
      details: "Le mot de passe doit faire au moins 6 caratères."
    });

    //any other error :
    return res.status(500).json({
      error: code,
      details: message
    });
  });
}

const authLogin = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({
    error: 'Bad request',
    details: 'Missing email or password'
  });
  
  signInWithEmailAndPassword(authClient, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    user.getIdToken()
    .then((idToken)=>{
      const expiresIn = 60 * 60 * 24 * 5 * 1000;
      auth.createSessionCookie(idToken, { expiresIn })
      .then(
        (sessionCookie) => {
          req.session.firebaseToken = sessionCookie;
          res.sendStatus(200);
        }
      );
    });
  })
  .catch((error) => {
    const { code, message } = error;
    return res.status(500).json({
      error: code,
      message: message
    });
  });
}

const authProfile = (req, res) => {
  verifyAuth(req.session)
  .then((decodedClaims) => {
    return res.send(decodedClaims);
  })
  .catch((error) => {
    return res.status(403).json(error);
  });
}

const authLogout = (req, res) => {
  verifyAuth(req.session)
  .then((decodedClaims) => {
    auth.revokeRefreshTokens(decodedClaims.sub);
    req.session = null;
    return res.sendStatus(200)
  })
  .catch((error) => {
    return res.status(403).json(error)
  });
}

const verifyAuth = (session) => {
  const sessionCookie = session.firebaseToken || '';
  return new Promise((resolve, reject) => {
    auth.verifySessionCookie(sessionCookie, true)
    .then((decodedClaims) => {
      resolve(decodedClaims)
    })
    .catch(() => {
      reject({
        error: 'auth/not-authenticated',
        message: 'L\'utilisateur n\'es pas connecté'
      });
    });
  })
}

module.exports = { authRegister, authLogin , authProfile, authLogout, verifyAuth}